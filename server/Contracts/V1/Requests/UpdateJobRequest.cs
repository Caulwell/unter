using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace unter.Contracts.V1.Requests
{
    public class UpdateJobRequest
    {
         public string Title {get;set;}
        public string Company {get;set;}
        public string? Location {get;set;}
        public string? Salary {get;set;}
        public string? URL {get;set;}
        public string? Colour {get;set;}
        public string? Description {get;set;}
        public DateTime? Deadline {get;set;}
        public string Status {get;set;}
    }
}