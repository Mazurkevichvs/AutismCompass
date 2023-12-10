using ProjectAutism.Data.Models;

namespace ProjectAutism;

public class GatheringModelCreate
{
    public string Name { get; set; }
    public Type Type { get; set; }
    public DateTime Date { get; set; }
    public Address Address { get; set; }
    public string? Description { get; set; }
    public string? ShortDescription { get; set; }
}