using ProjectAutism.Data.Models;

namespace ProjectAutism.Data.Repos;

public interface IGatheringRepository
{
    IEnumerable<Gathering> GetGatherings();
    Gathering CreateGathering(Gathering gathering);
    bool DeleteGathering(int id);
}