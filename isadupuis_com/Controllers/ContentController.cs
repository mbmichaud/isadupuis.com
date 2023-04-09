using Contentful.Core;
using Contentful.Core.Models;
using Microsoft.AspNetCore.Mvc;
using isadupuis_com.ClientApp.ViewModels;
using isadupuis_com.Models;
using isadupuis.com.Params;

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

        [HttpPost("get-canvas-listing")]
        public async Task<IActionResult> GetCanvasListing([FromBody] FilterParams parameters)
        {
            if (parameters == null)
                return BadRequest();

            var queryBuilder = new Contentful.Core.Search.QueryBuilder<Canvas>();

            if (parameters.Take.HasValue)
                queryBuilder = queryBuilder.Limit(parameters.Take.Value);

            var result = await _client.GetEntries(queryBuilder);

            var viewModel = result.Select(x => new CanvasViewModel()
            {
                Name = x.Name,
                Description = x.Description?.Content?.ToString(),
                MainImage = new CanvasImage()
                {
                    Url = x.MainImage.File.Url,
                    Width = x.MainImage?.File?.Details?.Image?.Width,
                    Height = x.MainImage?.File?.Details?.Image?.Height,
                },
                OtherImages = x.OtherImages?.Where(x => x.File != null).Select(x => new CanvasImage()
                {
                    Url = x.File.Url,
                    Width = x.File?.Details?.Image?.Width,
                    Height = x.File?.Details?.Image?.Height,
                }).ToList()
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
                MainImage = new CanvasImage()
                {
                    Url = result.MainImage.File.Url,
                    Width = result.MainImage?.File?.Details?.Image?.Width,
                    Height = result.MainImage?.File?.Details?.Image?.Height,
                },
                OtherImages = result.OtherImages?.Where(x => x.File != null).Select(x => new CanvasImage()
                {
                    Url = x.File.Url,
                    Width = x.File?.Details?.Image?.Width,
                    Height = x.File?.Details?.Image?.Height,
                }).ToList()
            };

            return Ok(viewModel);
        }
    }
}
