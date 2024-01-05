using System.Net;
using System.Net.Mail;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public class GatheringRepository : IGatheringRepository
{
    private readonly AutismDbContext _autismDbContext;
    private readonly MailHandler _mailHandler;
    
    public GatheringRepository(AutismDbContext autismDbContext, MailHandler mailHandler)
    {
        _autismDbContext = autismDbContext;
        _mailHandler = mailHandler;
    }

    public IEnumerable<Gathering> GetGatherings()
    {
        var gatheringsWithAddresses = _autismDbContext.Gatherings
            .Include(gathering => gathering.Address)
            .ToList();
        return gatheringsWithAddresses;
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

        var body = BuildBody(gatheringFromDb, credential);
        var mailMessage = _mailHandler.BuildMailForSend(body,credential.Email);
        mailMessage.Subject = "Potwierdzenie Zapisu na Wydarzenie";
        
        
        await _mailHandler.SendMessage(mailMessage);
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
                    .Replace("[EventLink]", gathering.Address.Link)
                    .Replace("[EventDescription]", gathering.Description);
                return body;
            default:
                throw new ArgumentOutOfRangeException();
        }
    }
}