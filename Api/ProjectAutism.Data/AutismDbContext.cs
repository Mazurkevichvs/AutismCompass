using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Data;

public class AutismDbContext : DbContext
{
    public DbSet<Gathering> Gatherings { get; set; }
    public DbSet<Address> Addresses { get; set; }

    public DbSet<Quiz> Quizzes { get; set; }

    public DbSet<Question> Questions { get; set; }

    public DbSet<Answer> Answers { get; set; }

    public DbSet<Result> Results { get; set; }

    public AutismDbContext(DbContextOptions<AutismDbContext> options) :
        base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Gathering>()
            .HasOne(e => e.Address)
            .WithOne()
            .HasForeignKey<Gathering>(g => g.AddressId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);


        modelBuilder.Entity<Gathering>()
            .Property(g => g.Type)
            .HasConversion<string>();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.LogTo(
            action: Console.WriteLine,
            minimumLevel: LogLevel.Information);
    }
}