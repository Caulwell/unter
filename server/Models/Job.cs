using System.ComponentModel.DataAnnotations;

namespace unter.Models;


public class Job{

    [Key]
    public int Id {get; set;}
    [Required]
    public string Title {get;set;} 
    public string? Company {get;set;} 
    public string? Location {get;set;}
    public string? Salary {get;set;}
    public string? URL {get;set;}
    public string? Colour {get;set;}
    public string? Description {get;set;}
    
}