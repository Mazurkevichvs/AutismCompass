using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;
using ProjectAutism.Data.Repos;
using Type = ProjectAutism.Data.Models.Type;

namespace ProjectAutism.Controllers;

[ApiController]
[Route("api/events")]
public class GatheringController : ControllerBase
{
    private AutismDbContext _context;
    private readonly IGatheringRepository _gatheringRepository;

    public GatheringController(AutismDbContext context, IGatheringRepository gatheringRepository)
    {
        _context = context;
        _gatheringRepository = gatheringRepository;
    }

    [HttpGet]
    public IEnumerable<Gathering> GetEvents()
    {
        return _gatheringRepository.GetGatherings();
    }

    [HttpPost]
    public IActionResult CreateGathering(Gathering gathering)
    {
        //some more validation?
        if (gathering.Type is not (Type.Offline or Type.Online))
            return NotFound("Unknown Gathering type");
        var addedGathering = _gatheringRepository.CreateGathering(gathering);
        return Ok(addedGathering);
        
    }

    [HttpGet("{id}")]
    public IActionResult FindById(int id)
    {
        var gathering = _context.Gatherings.FirstOrDefault(g => g.Id == id);
        if (gathering == null)
        {
            return NotFound();
        }

        return Ok(gathering);
    }


    [HttpGet("Search")]
    public IActionResult FindByName([FromQuery] string name)
    {
        var gatherings = _context.Gatherings.Where(gathering => gathering.Name == name).ToList();
        return Ok(gatherings);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteGathering(int id)
    {
        if (!_gatheringRepository.DeleteGathering(id))
            return NotFound();
        return Ok();
    }
}