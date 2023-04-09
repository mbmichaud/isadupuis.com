import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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

    constructor(
        protected title: Title,
    ) {
        super(title);
        this.setPageTitle("Galerie");
    }

    ngOnInit(): void {
    }
}
