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

    public Gathering CreateGathering(Gathering gathering)
    {
        var addedGathering = _autismDbContext.Gatherings.Add(gathering);
        _autismDbContext.SaveChanges();
        return addedGathering.Entity;
    }

    public bool DeleteGathering(int id)
    {
        var gatheringFromDb =_autismDbContext.Gatherings.FirstOrDefault(g => g.Id == id);
        if (gatheringFromDb is null)
            return false;
        _autismDbContext.Gatherings.Remove(gatheringFromDb);
        _autismDbContext.SaveChanges();
        return true;
    }

    public async Task SubscribeToGathering(int gatheringId, Credential credential)
    {
        var gatheringFromDb =_autismDbContext.Gatherings.FirstOrDefault(g => g.Id == gatheringId);
        if (gatheringFromDb is null)
            return;

        var smtpServer = _configuration["EmailSettings:SmtpServer"];
        var smtpPort = _configuration.GetValue<int>("EmailSettings:SmtpPort");
        var username = _configuration["EmailSettings:Username"];
        var password = _configuration["EmailSettings:Password"];

        using var client = new SmtpClient(smtpServer,smtpPort);
        client.Credentials = new NetworkCredential(username, password);
        client.EnableSsl = true;
        client.TargetName = "STARTTLS";
        var mailMessage = new MailMessage
        {
            From = new MailAddress(username!),
            Subject = "Event Subscription Confirmation",
            Body = BuildBody(gatheringFromDb,credential),
            IsBodyHtml = true,
        };
        mailMessage.To.Add(credential.Email);
        await client.SendMailAsync(mailMessage);
        
    }

    public string BuildBody(Gathering gathering,Credential credential)
    {
        //replace gathering data
        //switch for address data
        var bodyTemplate = string.Empty;
        string? body;
        string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        string filePath = Path.Combine(baseDirectory, "EmailTemplates", "OfflineEmailHtmlTemplate.html");
        switch (gathering.Type)
        {
            case Type.Offline:
                var deserializedOfflineAddress = JsonSerializer.Deserialize<OfflineAddress>(gathering.Address);
                using (var reader = new StreamReader(@"C:\Users\shako\Documents\GitHub\AutismCompass\api\ProjectAutism\EmailTemplates\OfflineEmailHtmlTemplate.html"))
                {
                    bodyTemplate = reader.ReadToEnd();
                }

                body = bodyTemplate.Replace("[Name]", credential.Name)
                    .Replace("[Surname]", credential.Surname)
                    .Replace("[EventDate]", gathering.Date.ToLongDateString())
                    .Replace("[EventTitle]", gathering.Name)
                    .Replace("[EventCity]", deserializedOfflineAddress?.City)
                    .Replace("[EventStreet]", deserializedOfflineAddress?.Street)
                    .Replace("[EventHouse]", deserializedOfflineAddress?.House.ToString())
                    .Replace("[EventApartment]", deserializedOfflineAddress?.Apartment.ToString())
                    .Replace("[EventDescription]", gathering.Description);
                return body;
            case Type.Online:
                var deserializedOnlineAddress = JsonSerializer.Deserialize<OnlineAddress>(gathering.Address);
                using (var reader = new StreamReader("OnlineEmailHtmlTemplate.html"))
                {
                    bodyTemplate = reader.ReadToEnd();
                }

                body = bodyTemplate;
                return body;
                break;
            default:
                throw new ArgumentOutOfRangeException();
        }
        
    }
}