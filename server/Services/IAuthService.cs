using unter.Domain;

namespace unter.Services
{
    public interface IAuthService
    {
        Task<AuthenticationResult> RegisterAsync(string email, string password);
    }
}