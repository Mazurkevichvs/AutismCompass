using FluentValidation;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Validators;

public class UserTestResultValidator : AbstractValidator<UserTestResult>
{
    public UserTestResultValidator()
    {
        RuleFor(a => a.QuestionAnswers).NotEmpty().WithMessage("QuestionAnswer Empty");
        RuleForEach(a => a.QuestionAnswers).SetValidator(new QuestionAnswersValidator());
    }
}

public class QuestionAnswersValidator : AbstractValidator<QuestionAnswer>
{
    public QuestionAnswersValidator()
    {
        RuleFor(answer => answer.AnswerId).Must(answerId => answerId > 0);
        RuleFor(answer => answer.QuestionId).Must(questionId => questionId > 0);
    }
}