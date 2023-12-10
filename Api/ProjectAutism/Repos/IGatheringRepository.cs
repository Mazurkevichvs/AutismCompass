using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public interface IGatheringRepository
{
    IEnumerable<Gathering> GetGatherings();

    IEnumerable<Address> GetAddresses();

    Gathering CreateGathering(GatheringModelCreate gatheringModelCreate);

    bool DeleteGathering(int id);
    Task SubscribeToGathering(int gatheringId, Credential credential);
}