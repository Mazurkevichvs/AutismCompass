using System.Collections;
using Microsoft.AspNetCore.Mvc;
using ProjectAutism.Data.Models;
using ProjectAutism.Repos;

namespace ProjectAutism.Controllers;


[ApiController]
[Route("api/quiz")]
public class QuizController : ControllerBase
{

    private readonly IQuizRepository _quizRepository;

    public QuizController(IQuizRepository quizRepository)
    {
        _quizRepository = quizRepository;
    }

    [HttpGet]
    public IEnumerable<Question> GetQuiz(int quizId)
    { 
        return _quizRepository.GetQuiz(quizId);
    }
}