using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public interface IQuizRepository
{
    IEnumerable<Question> GetQuiz(int quizId);
}