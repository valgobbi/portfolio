import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-wise',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="images/pages/wise_2x.png" alt="Wise">
    <app-project-navigator
      [prevUrl]="'/portfolio/sebrae_on'"
      [nextUrl]="'/portfolio/notifyme'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class WisePageComponent {}