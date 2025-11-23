import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-innergy_rh',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/innergy_rh_2x.png" alt="Innergy RH">
    <app-project-navigator
      [prevUrl]="'/portfolio/sebrae_canvas'"
      [nextUrl]="'/portfolio/precifique'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class InnergyRHPageComponent {}