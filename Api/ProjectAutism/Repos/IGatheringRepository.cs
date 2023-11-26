using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public interface IGatheringRepository
{
    IEnumerable<Gathering> GetGatherings();
    Gathering CreateGathering(Gathering gathering);
    bool DeleteGathering(int id);
    Task SubscribeToGathering(Gathering gathering, Credential credential);
}