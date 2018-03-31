using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpecterOps.Game;
using SpecterOps.UI.Models;

namespace SpecterOps2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var game = new SOGame(3);

            return View(game);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
