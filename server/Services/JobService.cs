using Microsoft.EntityFrameworkCore;
using unter.Domain;
using unter.Data;

namespace unter.Services
{
    public class JobService : IJobService
    {
        private readonly DataContext _dataContext;
        public JobService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Job>> GetJobsAsync(string userId)
        {
            return await _dataContext.Jobs.Where(x => x.UserId == userId).ToListAsync();
        }

        public async Task<Job> GetJobByIdAsync(int jobId)
        {
            return await _dataContext.Jobs.SingleOrDefaultAsync(x => x.Id == jobId);
        }
        public async Task<bool> CreateJobAsync(Job job)
        {
            await _dataContext.Jobs.AddAsync(job);
            var created = await _dataContext.SaveChangesAsync();
            return created > 0;

        }
        public async Task<bool> UpdateJobAsync(Job jobToUpdate)
        {
            _dataContext.Jobs.Update(jobToUpdate);
            var updated = await _dataContext.SaveChangesAsync();
            return updated > 0;
        }

       public async Task<bool> DeleteJobAsync(int jobId)
        {
            var job = await GetJobByIdAsync(jobId);
            _dataContext.Jobs.Remove(job);
            var deleted = await _dataContext.SaveChangesAsync();
            return deleted > 0;
        }

        public async Task<bool> UserOwnsJobAsync(int jobId, string userId)
        {
            var job = await _dataContext.Jobs.AsNoTracking().SingleOrDefaultAsync(x => x.Id == jobId);

            if(job == null)
            {
                return false;
            }

            if(job.UserId != userId)
            {
                return false;
            }

            return true;

        }
    }
}