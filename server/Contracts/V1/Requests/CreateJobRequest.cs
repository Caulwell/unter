using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace unter.Contracts.V1.Requests
{
    public class CreateJobRequest
    {
        public string Company {get;set;}
        public string Title {get;set;}
        public string Location {get;set;}
    }
}