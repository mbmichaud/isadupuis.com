import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ApiService, FilterParams } from '../../services/api.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

    public canvasFilterParams = new FilterParams();

    constructor(
        protected title: Title,
        private apiService: ApiService,
    ) {
        super(title);
        this.setPageTitle("Accueil");
        this.canvasFilterParams.take = 3;
    }

    ngOnInit(): void {
    }

}
