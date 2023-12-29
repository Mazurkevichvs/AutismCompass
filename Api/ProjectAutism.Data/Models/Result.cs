﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("result")]
public class Result
{
    [Column("result_id")] public int Id { get; set; }
    [Column("score")] public int Score { get; set; }
    [Column("details")] public string Details { get; set; }
}