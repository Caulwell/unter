using Microsoft.AspNetCore.Mvc;
using unter.Models;
using unter.Data;

namespace unter.Controllers;

[ApiController]
[Route("[controller]")]
public class JobController : ControllerBase
{

    private readonly ApplicationDbContext _db;

    public JobController(ApplicationDbContext db){
        _db = db;
    }

    [HttpGet]
    public IActionResult Get(){

        IEnumerable<Job> jobsList = _db.Jobs;
        return Ok(jobsList);
        
    }



    [HttpPost]
    public IActionResult Post(Job job)
    {
        _db.Jobs.Add(job);
        _db.SaveChanges();
        return CreatedAtAction(nameof(Post), new {id = job.Id}, job);
    }

}