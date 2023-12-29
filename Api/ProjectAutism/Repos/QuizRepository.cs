﻿using Microsoft.EntityFrameworkCore;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public class QuizRepository : IQuizRepository
{
    private readonly AutismDbContext _autismDbContext;

    public QuizRepository(AutismDbContext autismDbContext)
    {
        _autismDbContext = autismDbContext;
    }

    public Quiz? GetQuiz(int quizId)
    {
        var quizFormDb = _autismDbContext.Quizzes
            .Include(q => q.Questions)
            .ThenInclude(q => q.Answers)
            .FirstOrDefault( q => q.Id == quizId );
        return quizFormDb;
    }
}