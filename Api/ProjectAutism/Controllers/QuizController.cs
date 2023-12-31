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
    public ActionResult<Quiz> GetQuiz(int quizId)
    {
        var quiz = _quizRepository.GetQuiz(quizId);
        if (quiz is null)
            return NotFound();
        return Ok(quiz);
    }

    [HttpPost]
    public IActionResult GetResult(int quizId, int userResult)
    {
        
        return Ok();
    }
}