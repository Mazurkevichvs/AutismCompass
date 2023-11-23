using Microsoft.EntityFrameworkCore;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Data;

public class AutismDbContext : DbContext
{
    public DbSet<Gathering> Gatherings { get; set; }

    public AutismDbContext(DbContextOptions<AutismDbContext> options) :
        base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Gathering>()
            .Property(g => g.Type)
            .HasConversion<string>();
    }   
}