import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-wise',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/wise_2x.png" alt="Wise">
    <app-project-navigator
      [prevUrl]="'/sebrae_on'"
      [nextUrl]="'/notifyme'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class WisePageComponent {}