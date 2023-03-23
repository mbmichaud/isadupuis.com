export interface CanvasViewModel {
    name: string;
    description: string;
    mainImage: CanvasImage;
    otherImages: CanvasImage[];
}

export interface CanvasImage {
    url: string;
    width: number;
    height: number;
}
