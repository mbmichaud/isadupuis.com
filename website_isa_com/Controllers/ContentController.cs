using Contentful.Core;
using Contentful.Core.Models;
using Microsoft.AspNetCore.Mvc;
using isadupuis_com.ClientApp.ViewModels;
using isadupuis_com.Models;

namespace isadupuis_com.Controllers
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

        [HttpGet("navigation")]
        public async Task<IActionResult> GetNavigation(string? url)
        {
            if (string.IsNullOrEmpty(url))
                return BadRequest();

            return Ok();
        }

        [HttpGet("entities/{identifier}")]
        public async Task<IActionResult> GetEntities(string identifier)
        {
            if (string.IsNullOrEmpty(identifier))
                return BadRequest();

            var result = await _client.GetEntries<Canvas>();

            var viewModel = result.Select(x => new CanvasViewModel()
            {
                Name = x.Name,
                Description = x.Description?.Content?.ToString(),
                MainImageUrl = x.MainImage?.File?.Url,
                OtherImageUrls = x.OtherImages?.Where(x => x.File != null).Select(x => x.File.Url).ToList()
            }).ToList();

            return Ok(viewModel);
        }

        [HttpGet("entity/{identifier}")]
        public async Task<IActionResult> GetEntity(string identifier)
        {
            if (string.IsNullOrEmpty(identifier))
                return BadRequest();

            var result = await _client.GetEntry<Canvas>(identifier);

            var viewModel = new CanvasViewModel()
            {
                Name = result.Name,
                Description = result.Description?.Content?.ToString(),
                MainImageUrl = result.MainImage?.File?.Url,
                OtherImageUrls = result.OtherImages?.Where(x => x.File != null).Select(x => x.File.Url).ToList()
            };

            return Ok(viewModel);
        }
    }
}
