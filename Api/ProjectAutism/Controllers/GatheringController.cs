using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectAutism.Data;
using ProjectAutism.Models;

namespace ProjectAutism.Controllers;

[ApiController]
[Route("events")]
public class GatheringController : ControllerBase
{
   // public static List<Gathering> Gatherings = new List<Gathering>();
    private AutismDbContext _context;

    public GatheringController(AutismDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public IActionResult GetEvents()
    {
        var gatherings = _context.Gatherings.ToList();
        return Ok(gatherings);
    }

    [HttpPost]
    public IActionResult CreateGathering(Gathering gathering)
    {
        
        var addedGathering = _context.Gatherings.Add(gathering);
        _context.SaveChanges();
        return Ok(addedGathering.Entity);
    }
    [HttpGet("{id}")]
    public IActionResult FindById(int id)
    {
        var gathering = _context.Gatherings.FirstOrDefault(g => g.Id == id );
        if (gathering == null)
        {
            return NotFound();
        }
        return Ok(gathering);
    }
    
    
    [HttpGet("Serch")]
    public IActionResult FindByName( [FromQuery] string name)
    {

        var gatherings = _context.Gatherings.Where(gathering => gathering.Name == name).ToList();
        return Ok(gatherings);
    }
}