using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Models;
[Table("gathering")]
public class Gathering
{
    [Column("id") ]
    [Key]
    public int Id { get; set; }
    [Column("city")]
    public string City { get; set; } = null!;
    [Column("name")]
    public string Name { get; set; } = null!;
    
    [Column("description")]
    public string? Description { get; set; }
}