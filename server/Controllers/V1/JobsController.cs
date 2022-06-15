using Microsoft.AspNetCore.Mvc;
using unter.Domain;
using unter.Data;
using unter.Contracts.V1;
using unter.Contracts.V1.Requests;
using unter.Contracts.V1.Responses;

namespace unter.Controllers.V1;

public class JobsController : ControllerBase
{

    private readonly DataContext _db;

    public JobsController(DataContext db){
        _db = db;
    }

    [HttpGet(ApiRoutes.Jobs.GetAll)]
    public IActionResult GetAll(){

        IEnumerable<Job> jobsList = _db.Jobs;
        return Ok(jobsList);
        
    }



    [HttpPost(ApiRoutes.Jobs.Create)]
    public IActionResult Create(CreateJobRequest request)
    {

        var job = new Job{
            Company = request.Company,
            Title = request.Title,
            Location = request.Location
        };

        _db.Jobs.Add(job);
        _db.SaveChanges();

        var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
        var locationUri = baseUrl + "/" + ApiRoutes.Jobs.Get.Replace("{jobId}", job.Id.ToString());

        var response = new CreateJobResponse{job = job};

        return Created(locationUri, response);
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