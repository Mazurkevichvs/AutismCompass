using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Primitives;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public class QuizRepository : IQuizRepository
{
    private readonly AutismDbContext _autismDbContext;
    private readonly MailHandler _mailHandler;

    public QuizRepository(AutismDbContext autismDbContext, MailHandler mailHandler)
    {
        _autismDbContext = autismDbContext;
        _mailHandler = mailHandler;
    }

    public Quiz? GetQuiz(int quizId)
    {
        var quizFormDb = _autismDbContext.Quizzes
            .Include(q => q.Questions)
            .ThenInclude(q => q.Answers)
            .FirstOrDefault(q => q.Id == quizId);
        return quizFormDb;
    }

    public Result? GetQuizResult(int quizId, UserTestResult userTestResult)
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

        Result endAnswer;
        if (userResult >= 0 && userResult <= resultsFromDb[0].Score)
        {
            endAnswer = resultsFromDb[0];
            endAnswer.Score = userResult;
            return endAnswer;
        }


        var lastResult = resultsFromDb.Last();

        for (int i = 1; i < resultsFromDb.Count; i++)
        {
            if (userResult >= resultsFromDb[i - 1].Score && userResult <= resultsFromDb[i].Score)
            {
                endAnswer = resultsFromDb[i];
                endAnswer.Score = userResult;
                return endAnswer;
            }

            if (userResult >= lastResult.Score)
            {
                endAnswer = lastResult;
                endAnswer.Score = userResult;
                return endAnswer;
            }
        }

        return null;
    }

    public async Task SendQuizResultToUser(UserQuizResult userResult)
    {
        _autismDbContext.UserQuizResults.Add(userResult);
        var body = BuildBody(userResult);
        var mailMessage = _mailHandler.BuildMailForSend(body, userResult.Email);
        mailMessage.Subject = "Wynik Testu Diagnostycznego";
        await _mailHandler.SendMessage(mailMessage);
    }

    private static string BuildBody(UserQuizResult userQuizResult)
    {
        var body = new StringBuilder();
        string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        string templatePath = Path.Combine(baseDirectory, "EmailTemplates", "QuizResultHtmlTemplate.html");
        using (var reader =
               new StreamReader(templatePath))
        {
            body.Append(reader.ReadToEnd());
        }

        body.Replace("[Email]", userQuizResult.Email)
            .Replace("[Description]", userQuizResult.Description)
            .Replace("Score", userQuizResult.UserResult.ToString())
            .Replace("[QuizName]", userQuizResult.QuizName);
        return body.ToString();
    }
}