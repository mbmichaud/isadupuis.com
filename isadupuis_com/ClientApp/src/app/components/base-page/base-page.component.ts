import { Title } from '@angular/platform-browser';

export abstract class BasePageComponent {

    constructor(
        protected title: Title,
    ) { }

    public setPageTitle(title: string) {
        this.title.setTitle(`${title} - isa dupuis`);
    }
}
