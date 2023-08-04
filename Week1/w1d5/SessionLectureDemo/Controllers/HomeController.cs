using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionLectureDemo.Models;

namespace SessionLectureDemo.Controllers;

/*

Objectives:

1. Add Session to Program.cs and use Session to track a user's name and display it on the Index page.

2. Build a form to use an action to save that user name.

3. Add a route for a Player page where a user can add a character and their level.

4. Add a validation check with session to see if the user entered a UserName when they visit the Player Page. If they did not, it kicks them back to Index.

5. Build a form to save a Character Name and Character Level to Session on the Player Page and display it.

*/


public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        // HttpContext.Session.SetString("UserName", "Winter");


        return View();
    }

    [HttpPost("Login")]
    public IActionResult Login(string UserName)
    {
        HttpContext.Session.SetString("UserName", UserName);
        return RedirectToAction("Index");
    }

    [HttpGet("Logout")]
    public IActionResult Logout()
    {
        // If you want to remove only one key from our session, use .Remove()!
        // HttpContext.Session.Remove("UserName");
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [HttpGet("Player")]
    public IActionResult Player()
    {

        if (HttpContext.Session.GetString("UserName") == null)
        {
            return RedirectToAction("Index");
        }


        return View();
    }

    [HttpPost("UpdatePlayer")]
    public IActionResult UpdatePlayer(string CharacterName, int CharacterLevel)
    {
        HttpContext.Session.SetString("CharacterName", CharacterName);
        HttpContext.Session.SetInt32("CharacterLevel", CharacterLevel);

        int? IntVariable = HttpContext.Session.GetInt32("CharacterLevel");

        return RedirectToAction("Player");

    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
