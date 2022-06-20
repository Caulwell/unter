using unter.Domain;
using unter.Extensions;
using unter.Services;
using unter.Contracts.V1;
using unter.Contracts.V1.Requests;
using unter.Contracts.V1.Responses;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;


namespace unter.Controllers.V1;
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class JobsController : ControllerBase
{

    private readonly IJobService _jobService;

    public JobsController(IJobService jobService){
        _jobService = jobService;
    }

    [HttpGet(ApiRoutes.Jobs.GetAll)]
    public async Task<IActionResult> GetAllAsync(){

        return Ok(await _jobService.GetJobsAsync(HttpContext.GetUserId()));
        
    }

    [HttpPut(ApiRoutes.Jobs.Update)]
    public async Task<IActionResult> Update(int jobId, UpdateJobRequest request)
    {
        var userOwnsJob = await _jobService.UserOwnsJobAsync(jobId, HttpContext.GetUserId());

        if(!userOwnsJob)
        {
            return BadRequest( new {error = "You do not own this post"});
        }

        var job = new Job
        {
            Id = jobId,
            Title = request.Title,
            Company = request.Company,
            Location = request.Location,
            Salary = request.Salary,
            URL = request.URL,
            Colour = request.Colour,
            Description = request.Description,
            Deadline = request.Deadline,
            Status = request.Status,
        };

        var updated = await _jobService.UpdateJobAsync(job);

        if(updated)
            return Ok(job);

        return NotFound();
        
        
    }


    [HttpGet(ApiRoutes.Jobs.Get)]
    public async Task<IActionResult> Get(int jobId)
    {

        var jobFromDb = await _jobService.GetJobByIdAsync(jobId);
        if(jobFromDb == null) return NotFound();

        return Ok(jobFromDb);
        
    }



    [HttpPost(ApiRoutes.Jobs.Create)]
    public async Task<IActionResult> Create(CreateJobRequest request)
    {

        var job = new Job{
            Company = request.Company,
            Title = request.Title,
            Location = request.Location,
            UserId = HttpContext.GetUserId()
        };

        await _jobService.CreateJobAsync(job);

        var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
        var locationUri = baseUrl + "/" + ApiRoutes.Jobs.Get.Replace("{jobId}", job.Id.ToString());

        var response = new CreateJobResponse{job = job};

        return Created(locationUri, response);
    
    }
        


    
    [HttpDelete(ApiRoutes.Jobs.Delete)]
    public async Task<IActionResult> Delete(int jobId)
    {

         var userOwnsJob = await _jobService.UserOwnsJobAsync(jobId, HttpContext.GetUserId());

        if(!userOwnsJob)
        {
            return BadRequest( new {error = "You do not own this post"});
        }

       var deleted = await _jobService.DeleteJobAsync(jobId);

       if(deleted)
            return NoContent();

    
        return NotFound();

    }

}