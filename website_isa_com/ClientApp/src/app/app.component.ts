import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private apiService: ApiService,
    ) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.removeAttribute("ng-version");

        this.apiService.getNavigation().subscribe((result) => {
            console.log("result", result);
        });
    }
}
