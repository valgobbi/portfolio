import { Component } from '@angular/core';

@Component({
    selector: 'app-backToTop',
    template: `
        <div (click)="backToTop()">
            <img src="/svg/back-to-top.svg" />
        </div>
    `,
    styles: `
        :host {
            position: sticky;
        }
    `
})
export class BackToTopComponent {
    backToTop () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}