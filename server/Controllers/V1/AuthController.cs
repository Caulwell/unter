using Microsoft.AspNetCore.Mvc;
using unter.Services;
using unter.Contracts.V1;
using unter.Contracts.V1.Requests;
using unter.Contracts.V1.Responses;

namespace unter.Controllers.V1
{
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }


        [HttpPost(ApiRoutes.Auth.Register)]
        public async Task<IActionResult> Register(UserRegistrationRequest request)
        {
            var authResponse = await _authService.RegisterAsync(request.Email, request.Password);

            if(!authResponse.Success)
            {
                return BadRequest(new AuthFailedResponse
                {
                    Errors = authResponse.Errors
                });
            }
            return Ok(new AuthSuccessResponse{
                Token = authResponse.Token
            });
        }
    }
}