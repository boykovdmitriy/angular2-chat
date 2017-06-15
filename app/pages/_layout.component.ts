import {Component} from "@angular/core";
@Component({
    selector: 'layout',
    template: `
        <side-menu></side-menu>
    `,
    styles  : [`
        :host {
            display: flex;
            flex-direction: row;
        }
    `]
})

export class LayoutComponent {
}