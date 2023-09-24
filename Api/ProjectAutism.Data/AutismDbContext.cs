using Microsoft.EntityFrameworkCore;
using ProjectAutism.Models;

namespace ProjectAutism.Data;

public class AutismDbContext : DbContext
{
    //TODO EFC Connection string(PostgreSQL),DB contex    
    public DbSet<Gathering> Gatherings { get; set; }

    public AutismDbContext(DbContextOptions<AutismDbContext> options):
        base(options)
    {
    }
}