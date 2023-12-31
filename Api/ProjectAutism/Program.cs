using FluentValidation;
using Microsoft.EntityFrameworkCore;
using ProjectAutism;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;
using ProjectAutism.Repos;
using ProjectAutism.Validators;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AutismDbContext>(
    o => o.UseNpgsql(builder.Configuration.GetConnectionString("AutProjectDb")));
builder.Services.AddScoped<IGatheringRepository, GatheringRepository>();
builder.Services.AddScoped<IQuizRepository, QuizRepository>();
builder.Services.AddScoped<SupportRepository>();
builder.Services.AddScoped<MailHandler>();
builder.Services.AddScoped<IValidator<UserTestResult>,UserTestResultValidator>();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseAuthorization();
#pragma warning disable ASP0014
// Ensures the correct order of middleware when used with SPA proxy
app.UseEndpoints(_ => { });
#pragma warning restore ASP0014


if (app.Environment.IsDevelopment())
{
    app.UseSpa(x =>
    {
        var spaConfigSection = app.Configuration.GetSection("SpaDevelopmentServer");
        var spaServer = spaConfigSection["SpaServer"];
        var spaUrl = spaConfigSection[$"Url:{spaServer}"];
        x.UseProxyToSpaDevelopmentServer("http://localhost:5173/");
    });
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();