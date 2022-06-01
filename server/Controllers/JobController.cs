using Microsoft.AspNetCore.Mvc;
using unter.Models;

namespace unter.Controllers;

[ApiController]
[Route("[controller]")]
public class JobController : ControllerBase
{


    [HttpPost]
    public IActionResult Post(Job job)
    {

        return CreatedAtAction(nameof(Post), new {id = job.Id}, job);
    }

}