import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CanvasViewModel } from '../../models/models';
import { ApiService } from '../../services/api.service';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe';
import { Title } from '@angular/platform-browser';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    animations: [
        trigger('enterFadeIn', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate('300ms ease', style({ opacity: '1' })),
            ]),
        ])
    ]
})
export class GalleryComponent extends BasePageComponent implements OnInit {

    public listing: CanvasViewModel[] = [];
    public lightbox: any;

    constructor(
        protected title: Title,
        private apiService: ApiService,
    ) {
        super(title);
        this.setPageTitle("Galerie");
    }

    public async openImage(index: number) {
        //this.setImagesDimensions();

        this.lightbox = new PhotoSwipeLightbox({
            gallery: `#canvas-gallery`,
            children: 'div',
            pswpModule: PhotoSwipe,
            index: index,
            errorMsg: "L'image n'a pas pu être chargée",
            closeTitle: 'Fermer',
            zoomTitle: 'Agrandir',
            arrowPrevTitle: 'Précédent',
            arrowNextTitle: 'Suivant',
            showAnimationDuration: 250,
            hideAnimationDuration: 250,
            closeOnVerticalDrag: true,
            dataSource: this.getImagesAsPhotoswipe()
        });
        this.lightbox.init();
        this.lightbox.loadAndOpen(index);
    }

    private getImagesAsPhotoswipe(): Array<any> {
        return this.listing.map(x => {
            return {
                src: x.mainImage.url,
                width: x.mainImage.width,
                height: x.mainImage.height,
            }
        });
    }

    ngOnInit(): void {
        this.apiService.getEntities("canvas").subscribe((result) => {
            if (result?.length > 0) {
                this.listing = result;
            }
        });

    }
}
