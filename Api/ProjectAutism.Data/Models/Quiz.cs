using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table(("quiz"))]
public class Quiz
{
    [Column("quiz_id")] public int Id { get; set; }
    [Column("name")] public string Name { get; set; }
    public List<Question> Questions { get; set; } 
    public List<Result> Results { get; set; }
}