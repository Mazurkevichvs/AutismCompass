using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("gathering")]
public class Gathering
{
    [Column("gathering_id")] [Key] public int Id { get; set; }
    [Column("name")] public string Name { get; set; } = null!;
    [Column("type")] public Type Type { get; set; }
    [Column("date")] public DateTime Date { get; set; }
    [Column("address_id")] public int AddressId { get; set; }
    public Address Address { get; set; }
    [Column("description")] public string? Description { get; set; }
    [Column("short_description")] public string? ShortDescription { get; set; }
    [Column("img_link")] public string? ImgLink { get; set; }
}