using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
namespace unter.Domain;


public class Job{

    [Key]
    public int Id {get; set;}
    [Required]
    public string Title {get;set;} = "";
    public string Company {get;set;} = "";
    public string? Location {get;set;}
    public string? Salary {get;set;}
    public string? URL {get;set;}
    public string? Colour {get;set;}
    public string? Description {get;set;}

    public DateTime Date_Added {get;set;} = DateTime.Today;
    public DateTime? Deadline {get;set;}
    public string Status {get;set;} = "New";
    public string UserId {get;set;}
    [ForeignKey(nameof(UserId))]
    public IdentityUser User {get;set;}

    
}