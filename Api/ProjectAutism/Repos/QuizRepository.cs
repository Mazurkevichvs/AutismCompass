using Microsoft.EntityFrameworkCore;
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

    public Result? GetQuizResult(int quizId,UserTestResult userTestResult)
    {
        var answerIds = userTestResult.QuestionAnswers.Select(a => a.AnswerId).ToList();
        var userResult = 0;
        foreach (var answerId in answerIds)
        {
            var answerFromDb = _autismDbContext.Answers.FirstOrDefault(a => a.Id == answerId);
            if (answerFromDb != null)
                userResult += answerFromDb.Value;
        }
        
        var resultsFromDb = _autismDbContext.Results.Where(r => r.QuizId == quizId).ToList();
        //make sort results depends on score
        
        if (userResult >= 0 && userResult <= resultsFromDb[0].Score)
            return resultsFromDb[0];
        
        var lastResult = resultsFromDb.Last();
        
        for (int i = 1; i < resultsFromDb.Count; i++)
        {
            if (userResult >= resultsFromDb[i - 1].Score && userResult <= resultsFromDb[i].Score)
                return resultsFromDb[i];
            
            if (userResult >= lastResult.Score)
                return lastResult;
        }

        return null ;
    }
}