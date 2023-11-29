using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("gathering")]
public class Gathering
{
    [Column("id")] [Key] public int Id { get; set; }
    [Column("name")] public string Name { get; set; } = null!;
    [Column("type")] public Type Type { get; set; }
    [Column("date")] public DateTime Date { get; set; }
    [Column("address")] public string Address { get; set; } = null!;

    [Column("image_link")] public string? ImageLink { get; set; }

    [Column("description")] public string? Description { get; set; }
}