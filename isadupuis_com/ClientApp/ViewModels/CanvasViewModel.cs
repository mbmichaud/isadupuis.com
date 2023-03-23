using System.Security.Policy;

namespace isadupuis_com.ClientApp.ViewModels
{
    public class CanvasViewModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public CanvasImage? MainImage { get; set; }
        public List<CanvasImage>? OtherImages { get; set; }
    }

    public class CanvasImage
    {
        public string Url { get; set; }
        public int? Width { get; set; }
        public int? Height { get; set; }
    }
}
