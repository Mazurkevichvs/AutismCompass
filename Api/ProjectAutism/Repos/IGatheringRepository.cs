using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public interface IGatheringRepository
{
    IEnumerable<Gathering> GetGatherings();
    Gathering CreateGathering(Gathering gathering);
    bool DeleteGathering(int id);
    bool SubscribeToGathering(Credential credential, int gatheringId);
}