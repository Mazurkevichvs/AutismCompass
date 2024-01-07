using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("user_result")]
public class UserQuizResult
{
    [Column("user_result_id")] public int UserQuizResultId { get; set; }
    [Column("email")] public string Email { get; set; }
    [Column("result_title")]public string ResultTitle { get; set; }
    [Column("Description")] public string Description { get; set; }
    [Column("result")]public int UserResult { get; set; }
    [Column("quiz_name")]public string QuizName { get; set; }
}