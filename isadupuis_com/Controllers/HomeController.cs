using Contentful.Core;
using Microsoft.AspNetCore.Mvc;

namespace isadupuis_com.Controllers
{
    public class HomeController : Controller
    {
        private ContentController _contentController { get; set; }
        public HomeController(IContentfulClient client)
        {
            _contentController = new ContentController(client);
        }

        public async Task<IActionResult> Index()
        {
            //string lang;

            //if (Request.Path.Value.StartsWith("/en"))
            //    lang = "en";
            //else if (Request.Path.Value.StartsWith("/fr"))
            //    lang = "fr";
            //else
            //    lang = HttpContext.Request.Cookies["lang"] ?? "fr";

            //if (Request.Path.Value == "/")
            //    return Redirect("/" + lang);

            var websiteResult = await _contentController.GetNavigation(Request.Path.Value);
            //ViewBaseViewModel viewBaseViewModel = Tools.GetViewBaseViewModel(websiteResult, lang);

            //if (!string.IsNullOrEmpty(viewBaseViewModel.RedirectTo))
            //    return Redirect(viewBaseViewModel.RedirectTo);

            //viewBaseViewModel.SetShareParameters(lang);

            //// TODO: Test this...
            //viewBaseViewModel.ViewModelJson = null; // We reset it otherwise it's changed in the cache object 
            //viewBaseViewModel.ViewModelJson = Tools.SerializeToJson(Json(viewBaseViewModel));
            //viewBaseViewModel.ViewModelJson = viewBaseViewModel.ViewModelJson.Replace("</script>", "<script/>"); // We have to convert it back client-side

            //if (viewBaseViewModel.SelectedNotFound && !(HardcodedRoutes.StartWithPaths.Any(x => Request.Path.Value.StartsWith(x)) || HardcodedRoutes.ExactPaths.Any(x => x == Request.Path.Value)))
            //    Response.StatusCode = StatusCodes.Status404NotFound;

            return View(websiteResult);
        }
    }
}
