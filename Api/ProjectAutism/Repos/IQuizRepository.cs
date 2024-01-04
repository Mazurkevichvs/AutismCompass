using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public interface IQuizRepository
{
    Quiz? GetQuiz(int quizId);
    Result? GetQuizResult(int quizId, UserTestResult userTestResult);
}