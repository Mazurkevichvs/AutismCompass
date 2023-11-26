using System.Net;
using System.Net.Mail;
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

    public async Task SubscribeToGathering(Gathering gathering, Credential credential)
    {
        var gatheringFromDb =_autismDbContext.Gatherings.FirstOrDefault(g => g.Id == gathering.Id);
        /*if (gatheringFromDb is null)
            return false;*/

        var smtpServer = _configuration["EmailSettings:SmtpServer"];
        var smtpPort = _configuration.GetValue<int>("EmailSettings:SmtpPort");
        var username = _configuration["EmailSettings:Username"];
        var password = _configuration["EmailSettings:Password"];

        using (var client = new SmtpClient(smtpServer,smtpPort))
        {
            client.Credentials = new NetworkCredential(username, password);
            client.EnableSsl = true;
            client.TargetName = "STARTTLS";
            var mailMessage = new MailMessage
            {
                From = new MailAddress(username!),
                Subject = "Fuck Youu",
                Body = "<h1>Hello</h1> <h2> donate pls </h2>" +
                       "<button> donate </button>",
                IsBodyHtml = true,
            };
            mailMessage.To.Add(credential.Email);
            await client.SendMailAsync(mailMessage);
        }
        
        
        /*var smtpClient = new SmtpClient(smtpServer)
        {
            Port = smtpPort,
            Credentials = new NetworkCredential(username, password),
            EnableSsl = true,
        };*/
       
        
        
    }
}