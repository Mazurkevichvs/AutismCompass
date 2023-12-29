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

    public IEnumerable<Question> GetQuiz(int quizId)
    {
        var quizWithQuestionsAndAnswers = _autismDbContext.Questions
            .Include(q => q.QuizId == quizId);
        return quizWithQuestionsAndAnswers.ToList();
    }
}