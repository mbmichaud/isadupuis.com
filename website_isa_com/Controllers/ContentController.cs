using Contentful.Core;
using Contentful.Core.Models;
using Microsoft.AspNetCore.Mvc;
using website_isa_com.ClientApp.ViewModels;
using website_isa_com.Models;

namespace website_isa_com.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : BaseController
    {
        private readonly IContentfulClient _client;

        public ContentController(IContentfulClient client)
        {
            _client = client;
        }

        [HttpPost("navigation")]
        public async Task<IActionResult> GetNavigation(string? url)
        {
            var result = await _client.GetEntry<Canvas>("4cZNIwV8XeXxVsVkMvW13m");

            var viewModel = new CanvasViewModel()
            {
                Name = result.Name,
                Description = result.Description?.Content?.ToString(),
                MainImageUrl = result.MainImage?.File?.Url,
                OtherImageUrls = result.OtherImages?.Where(x => x.File != null).Select(x => x.File.Url).ToList()
            };

            return Ok(viewModel);

            //var t2 = await _client.GetEntriesByType<Canvas>("canvas");

            //return Ok();
        }
    }
}
