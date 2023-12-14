using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjectAutism.Data.Models;

[Table("address")]
public class Address
{
    [Column("address_id")] [Key] public int Id { get; init; }
    [Column("city")]public string? City { get; set; }
    [Column("street")]public string? Street { get; set; }
    [Column("house")]public int? House { get; set; }
    [Column("apartment")] public int? Apartment { get; set; }
    [Column("link")]public string? Link { get; set; }
}