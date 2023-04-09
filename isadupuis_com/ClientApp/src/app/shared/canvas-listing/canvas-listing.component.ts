import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { default as PhotoSwipe, default as PhotoSwipeLightbox } from 'photoswipe';
import { CanvasViewModel } from '../../models/models';
import { ApiService, FilterParams } from '../../services/api.service';

export interface CanvasListingOptions {
    take?: number;
}

@Component({
    selector: 'canvas-listing',
    templateUrl: './canvas-listing.component.html',
    styleUrls: ['./canvas-listing.component.scss'],
    animations: [
        trigger('enterFadeIn', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate('300ms ease', style({ opacity: '1' })),
            ]),
        ])
    ]
})
export class CanvasListingComponent implements OnInit {

    public listing: CanvasViewModel[] = [];
    public filterParams = new FilterParams();
    public lightbox: any/*PhotoSwipeLightbox*/;

    @Input() options: CanvasListingOptions;

    constructor(
        private apiService: ApiService,
    ) { }

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
        if (this.options?.take)
            this.filterParams.take = this.options.take;

        this.apiService.getCanvasListing(this.filterParams).subscribe((result) => {
            if (result?.length > 0) {
                this.listing = result;
            }
        });
    }
}
