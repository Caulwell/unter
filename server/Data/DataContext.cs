using unter.Models;
using Microsoft.EntityFrameworkCore;


namespace unter.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Job> Jobs {get;set;}
}