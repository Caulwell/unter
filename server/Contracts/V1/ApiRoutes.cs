
namespace unter.Contracts.V1;

    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = $"{Root}/{Version}";

        public static class Jobs
        {
            public const string GetAll = Base + "/jobs";
            public const string Update = Base + "/jobs/{jobId}";
            public const string Delete = Base + "/jobs/{jobId}";
            public const string Get = Base + "/jobs/{jobId}";
            public const string Create = Base + "/jobs";
        }

        public static class Auth{
            public const string Login = Base + "/auth/login";
            public const string Register = Base + "/auth/register";
        }
        
    }
