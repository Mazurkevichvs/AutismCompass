using Microsoft.AspNetCore.Mvc;
using ProjectAutism.Repos;

namespace ProjectAutism.Controllers;

[ApiController]
[Route("api/support")]
public class SupportController : ControllerBase
{
    private readonly SupportRepository _supportRepository;

    public SupportController(SupportRepository supportRepository)
    {
        _supportRepository = supportRepository;
    }

    [HttpPost]
    public async Task<IActionResult> GetSupport(Credential credential)
    {
        try
        {
            await _supportRepository.SendSupportMessage(credential);
            return Ok("Massage send successfully");
        }
        catch (Exception e)
        {
            return NotFound(e);
        }
    }
}