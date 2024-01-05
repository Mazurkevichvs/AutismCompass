using System.Net;
using System.Net.Mail;

namespace ProjectAutism;

public class MailHandler
{
    private readonly SmtpClient _client;
    private readonly string? _username;
    private readonly string? _password;
    
    public MailHandler(IConfiguration configuration)
    {
        var smtpServer = configuration["EmailSettings:SmtpServer"];
        var smtpPort = configuration.GetValue<int>("EmailSettings:SmtpPort");
        _username = configuration["EmailSettings:Username"];
        _password = configuration["EmailSettings:Password"];
        _client = new SmtpClient(smtpServer,smtpPort);
    }
    
    public MailMessage BuildMailForSend(string body,string email)
    {
        _client.Credentials = new NetworkCredential(_username, _password);
        _client.EnableSsl = true;
        _client.TargetName = "STARTTLS";
        var mailMessage = new MailMessage
        {
            From = new MailAddress(_username!),
            Body = body,
            IsBodyHtml = true,
        };
        mailMessage.To.Add(email);
        return mailMessage;
    }
    
    public async Task SendMessage(MailMessage mailMessage)
    {
        await _client.SendMailAsync(mailMessage);
    }
}