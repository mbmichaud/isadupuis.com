using Contentful.Core;
using Microsoft.AspNetCore.Mvc;

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
            var products = await _client.GetEntries<dynamic>();

            return Ok(products);
        }
    }
}
