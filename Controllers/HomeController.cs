using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment2._1.Models;
using Microsoft.AspNetCore.Mvc;

namespace Assignment2._1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("CalcluateGrade")]
        public IActionResult CalculateGrade()
        {
            return View();
        }

        //overloading an action name with addition parameters
        [HttpPost("CalcluateGrade")]
        public IActionResult CalculateGrade(CalculateGradeModel model)
        {
            return View();

        }
    }
}
