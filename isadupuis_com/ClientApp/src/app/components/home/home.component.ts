import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ApiService } from '../../services/api.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

    constructor(
        protected title: Title,
        private apiService: ApiService,
    ) {
        super(title);
        this.setPageTitle("Accueil");
    }

    ngOnInit(): void {
    }

}
