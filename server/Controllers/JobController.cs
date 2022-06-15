using Microsoft.AspNetCore.Mvc;
using unter.Models;
using unter.Data;

namespace unter.Controllers;

[ApiController]
[Route("[controller]")]
public class JobController : ControllerBase
{

    private readonly DataContext _db;

    public JobController(DataContext db){
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

    [HttpPut]
    public IActionResult Put(Job job)
    {
        var jobFromDb = _db.Jobs.FirstOrDefault(e => e.Id == job.Id);

        if(jobFromDb != null){
            jobFromDb.Title = job.Title;
            jobFromDb.Company = job.Company;
            jobFromDb.Location = job.Location;
            jobFromDb.Salary = job.Salary;
            jobFromDb.Deadline = job.Deadline;
            jobFromDb.Status = job.Status;
            jobFromDb.Description = job.Description;
            jobFromDb.URL = job.URL;

            _db.SaveChanges();

            return NoContent();


        } else {

            return NotFound("No job found with that ID");
        }

        


    }
    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var jobFromDb = _db.Jobs.FirstOrDefault(e => e.Id == id);

        if(jobFromDb != null){
            _db.Jobs.Remove(jobFromDb);
            _db.SaveChanges();
            return NoContent();
        } else {

            return NotFound("No job found with that ID");
        }

        


    }

}