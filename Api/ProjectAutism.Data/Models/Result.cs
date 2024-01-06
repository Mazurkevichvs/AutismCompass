using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("result")]
public class Result
{
    [Column("result_id")] public int Id { get; set; }
    [Column("score")] public int Score { get; set; }

    [Column("result_title")]public string ResultTitle { get; set; }
    
    [Column("details")] public string Details { get; set; }
    [Column("quiz_id")]public int QuizId { get; set; }
}