using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using unter.Domain;

namespace unter.Services
{
    public interface IJobService
    {
        Task<List<Job>> GetJobsAsync(string userId);
        Task<Job> GetJobByIdAsync(int jobId);
        Task<bool> CreateJobAsync(Job job);
        Task<bool> UpdateJobAsync(Job jobToUpdate);
        Task<bool> DeleteJobAsync(int jobId);
        Task<bool> UserOwnsJobAsync(int jobId, string userId);
        
    }
}