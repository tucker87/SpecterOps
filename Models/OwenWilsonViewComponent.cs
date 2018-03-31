using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecterOps2.Models
{
    public class OwenWilsonViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(int length)
        {
            return View(await DataLayer.GetWows(length));
        }
    }
}