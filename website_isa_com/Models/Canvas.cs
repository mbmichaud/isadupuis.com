using Contentful.Core.Models;

namespace website_isa_com.Models
{
    public class Canvas : SystemProperties
    {
        public string Name { get; set; }
        public Document Description { get; set; }
        public Asset MainImage { get; set; }
        public List<Asset> OtherImages { get; set; }
    }
}
