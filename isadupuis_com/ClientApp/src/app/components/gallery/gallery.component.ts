import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CanvasViewModel } from '../../models/models';
import { ApiService } from '../../services/api.service';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe';
import { Title } from '@angular/platform-browser';
import { BasePageComponent } from '../base-page/base-page.component';
//import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

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
    public lightbox: any/*PhotoSwipeLightbox*/;

    constructor(
        protected title: Title,
        private apiService: ApiService,
    ) {
        super(title);
        this.setPageTitle("Galerie");
    }

    public async openImage(index: number) {

        const smallScreenPadding = {
            top: 0, bottom: 0, left: 0, right: 0
        };
        const largeScreenPadding = {
            top: 30, bottom: 30, left: 0, right: 0
        };

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
            paddingFn: (viewportSize) => {
                return viewportSize.x < 700 ? smallScreenPadding : largeScreenPadding
            },
            
            dataSource: this.getImagesAsPhotoswipe()
        });

        //const captionPlugin = new PhotoSwipeDynamicCaption(this.lightbox, {
        //    mobileLayoutBreakpoint: 700,
        //    type: 'auto',
        //    mobileCaptionOverlapRatio: 1
        //});

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
