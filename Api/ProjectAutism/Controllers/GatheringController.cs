using Microsoft.AspNetCore.Mvc;
using ProjectAutism.Data.Models;
using ProjectAutism.Repos;

namespace ProjectAutism.Controllers;

[ApiController]
[Route("api/events")]
public class GatheringController : ControllerBase
{
    private readonly IGatheringRepository _gatheringRepository;

    public GatheringController(IGatheringRepository gatheringRepository)
    {
        _gatheringRepository = gatheringRepository;
    }

    [HttpGet]
    public IEnumerable<Gathering> GetEvents()
    {
        return _gatheringRepository.GetGatherings();
    }

    [HttpGet("addresses/get")]
    public IEnumerable<Address> GetAddresses()
    {
        return _gatheringRepository.GetAddresses();
    }
    
    [HttpPost]
    public IActionResult CreateGathering(GatheringModelCreate gatheringModelCreate)
    {
        if (gatheringModelCreate.Type is not (Type.Offline or Type.Online))
            return NotFound("Unknown Gathering type");
        var addedGathering = _gatheringRepository.CreateGathering(gatheringModelCreate);
        return Ok(addedGathering);
    }
    
    [HttpPost("subscribe-to-gathering")]
    public async Task<IActionResult> SubscribeToGathering(int gatheringId, Credential credential)
    {

        try
        {
            await _gatheringRepository.SubscribeToGathering(gatheringId, credential);
            return Ok();
        }
        catch (Exception e)
        {
            return NotFound(e);
        }
       
       
    }
    
}