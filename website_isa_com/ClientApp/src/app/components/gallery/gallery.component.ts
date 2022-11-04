import { Component, OnInit } from '@angular/core';
import { CanvasViewModel } from '../../models/models';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    public listing: CanvasViewModel[] = [];

    constructor(
        private apiService: ApiService,
    ) { }

    ngOnInit(): void {
        this.apiService.getEntities("canvas").subscribe((result) => {
            if (result?.length > 0) {
                this.listing = result;
            }
        });
        
    }
}
