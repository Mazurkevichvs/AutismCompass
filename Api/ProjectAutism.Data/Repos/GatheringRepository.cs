using ProjectAutism.Data.Models;

namespace ProjectAutism.Data.Repos;

public class GatheringRepository : IGatheringRepository
{
    private readonly AutismDbContext _autismDbContext;

    public GatheringRepository(AutismDbContext autismDbContext)
    {
        _autismDbContext = autismDbContext;
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
}