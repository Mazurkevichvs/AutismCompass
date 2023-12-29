using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("question_answer")]
public class QuestionAnswer
{
     [Column("question_answer_id")]public int  QuestionAnswerId { get; set; }
     [Column("question_id")]public int QuestionId { get; set; }
     [Column("answer_id")]public int AnswerId { get; set; }
}