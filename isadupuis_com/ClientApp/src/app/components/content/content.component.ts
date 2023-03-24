import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent extends BasePageComponent implements OnInit {

    constructor(
        protected title: Title,
    ) {
        super(title);
        this.setPageTitle("Content");
    }

    ngOnInit(): void {
    }

}
