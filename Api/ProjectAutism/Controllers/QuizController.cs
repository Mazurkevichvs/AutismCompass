using System.Collections;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using ProjectAutism.Data.Models;
using ProjectAutism.Repos;
using ProjectAutism.Validators;

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
    public IActionResult GetResult(int quizId, UserTestResult userTestResult, [FromServices]IValidator<UserTestResult> userTestResultValidator)
    {
        var validationResult = userTestResultValidator.Validate(userTestResult);

        if (!validationResult.IsValid)
            return BadRequest("Test result not valid"); 
        
        var result = _quizRepository.GetQuizResult(quizId,userTestResult);

        if (result is null)
            return NotFound("Quiz dont have results");
        return Ok(result);
    }

    [HttpPost("send-answer")]
    public async Task<IActionResult> SendQuizResult(UserQuizResult userQuizResult)
    {
        try
        {
            await _quizRepository.SendQuizResultToUser(userQuizResult);
            return Ok();
        }
        catch (Exception e)
        {
            return NotFound("Problem with send" + e);
        }
    }
    
}