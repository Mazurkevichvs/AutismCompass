using System.Net;
using System.Net.Mail;
using System.Text.Json;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public class GatheringRepository : IGatheringRepository
{
    private readonly IConfiguration _configuration;

    private readonly AutismDbContext _autismDbContext;

    public GatheringRepository(AutismDbContext autismDbContext, IConfiguration configuration)
    {
        _autismDbContext = autismDbContext;
        _configuration = configuration;
    }

    public IEnumerable<Gathering> GetGatherings()
    {
        return _autismDbContext.Gatherings.ToList();
    }

    public IEnumerable<Address> GetAddresses()
    {
        return _autismDbContext.Addresses.ToList();
    }

    public Gathering CreateGathering(GatheringModelCreate gatheringModelCreate)
    {
        var address = new Address
        {
            City = gatheringModelCreate.Address.City,
            Street = gatheringModelCreate.Address.Street,
            House = gatheringModelCreate.Address.House,
            Apartment = gatheringModelCreate.Address.Apartment,
            Link = gatheringModelCreate.Address.Link
        };

        var gathering = new Gathering
        {
            Name = gatheringModelCreate.Name,
            Type = gatheringModelCreate.Type,
            Date = gatheringModelCreate.Date,
            ImageLink = gatheringModelCreate.ImageLink,
            Description = gatheringModelCreate.Description,
            ShortDescription = gatheringModelCreate.ShortDescription
        };
        _autismDbContext.Addresses.Add(address);
        _autismDbContext.SaveChanges();
        gathering.AddressId = address.Id;
        var addedGathering = _autismDbContext.Gatherings.Add(gathering);
        _autismDbContext.SaveChanges();

        return addedGathering.Entity;
    }

    public bool DeleteGathering(int id)
    {
        var gatheringFromDb = _autismDbContext.Gatherings.FirstOrDefault(g => g.Id == id);
        if (gatheringFromDb is null)
            return false;
        _autismDbContext.Gatherings.Remove(gatheringFromDb);
        _autismDbContext.SaveChanges();
        return true;
    }

    public async Task SubscribeToGathering(int gatheringId, Credential credential)
    {
        var gatheringFromDb = _autismDbContext.Gatherings.FirstOrDefault(g => g.Id == gatheringId);
        if (gatheringFromDb is null)
            return;
        var addressFromDb = _autismDbContext.Addresses.FirstOrDefault(a => a.Id == gatheringFromDb.AddressId);
        if (addressFromDb is null)
            return;

        gatheringFromDb.Address = addressFromDb;

        var smtpServer = _configuration["EmailSettings:SmtpServer"];
        var smtpPort = _configuration.GetValue<int>("EmailSettings:SmtpPort");
        var username = _configuration["EmailSettings:Username"];
        var password = _configuration["EmailSettings:Password"];

        using var client = new SmtpClient(smtpServer, smtpPort);
        client.Credentials = new NetworkCredential(username, password);
        client.EnableSsl = true;
        client.TargetName = "STARTTLS";
        var mailMessage = new MailMessage
        {
            From = new MailAddress(username!),
            Subject = "Event Subscription Confirmation",
            Body = BuildBody(gatheringFromDb, credential),
            IsBodyHtml = true,
        };
        mailMessage.To.Add(credential.Email);
        await client.SendMailAsync(mailMessage);
    }

    private static string BuildBody(Gathering gathering, Credential credential)
    {
        string bodyTemplate;
        string? body;
        string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        switch (gathering.Type)
        {
            case Type.Offline:
                string offlineFilePath = Path.Combine(baseDirectory, "EmailTemplates", "OfflineEmailHtmlTemplate.html");
                using (var reader =
                       new StreamReader(offlineFilePath))
                {
                    bodyTemplate = reader.ReadToEnd();
                }
                body = bodyTemplate.Replace("[Name]", credential.Name)
                    .Replace("[Surname]", credential.Surname)
                    .Replace("[EventDate]", gathering.Date.ToLongDateString())
                    .Replace("[EventTitle]", gathering.Name)
                    .Replace("[EventCity]", gathering.Address.City)
                    .Replace("[EventStreet]", gathering.Address.Street)
                    .Replace("[EventHouse]", gathering.Address.House.ToString())
                    .Replace("[EventApartment]", gathering.Address.Apartment.ToString())
                    .Replace("[EventDescription]", gathering.Description);
                return body;
            case Type.Online:
                string onlinePath = Path.Combine(baseDirectory, "EmailTemplates", "OnlineEmailHtmlTemplate.html");
                using (var reader = new StreamReader(onlinePath))
                {
                    bodyTemplate = reader.ReadToEnd();
                }
                body = bodyTemplate.Replace("[Name]", credential.Name)
                    .Replace("[Surname]", credential.Surname)
                    .Replace("[EventDate]", gathering.Date.ToLongDateString())
                    .Replace("[EventTitle]", gathering.Name)
                    .Replace("[EventLink]",gathering.Address.Link)
                    .Replace("[EventDescription]", gathering.Description);
                return body;
            default:
                throw new ArgumentOutOfRangeException();
        }
    }
}