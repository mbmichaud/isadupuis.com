import { Component, ElementRef, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        slideInAnimation
    ]
})

export class AppComponent implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private apiService: ApiService,
        private contexts: ChildrenOutletContexts,
    ) { }

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.removeAttribute("ng-version");

        this.apiService.getNavigation().subscribe((result) => {
            console.log("result", result);
        });
    }
}
