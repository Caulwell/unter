using unter.Models;
using Microsoft.EntityFrameworkCore;


namespace unter.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }

    public DbSet<Job> Jobs {get;set;}
}