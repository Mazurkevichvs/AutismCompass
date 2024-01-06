namespace ProjectAutism.Repos;

public class SupportRepository
{
    private readonly MailHandler _mailHandler;

    public SupportRepository(MailHandler mailHandler)
    {
        _mailHandler = mailHandler;
    }

    public async Task SendSupportMessage(Credential credential)
    {
        var body = BuildBody(credential);
        var mailToSend = _mailHandler.BuildMailForSend(body, credential.Email);
        mailToSend.Subject = "Prośba o Pomoc";
        await _mailHandler.SendMessage(mailToSend);
    }

    private string BuildBody(Credential credential)
    {
        var baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        var filePath = Path.Combine(baseDirectory, "EmailTemplates", "SupportFormHtmlTemplate.html");
        string bodyTemplate;
        using (var reader =
               new StreamReader(filePath))
        {
            bodyTemplate = reader.ReadToEnd();
        }

        var body = bodyTemplate.Replace("[Name]", credential.Name)
            .Replace("[Surname]", credential.Surname);
        return body;
    }
}