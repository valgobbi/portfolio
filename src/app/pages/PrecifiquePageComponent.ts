import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-precifique',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/precifique_2x.png" alt="Precifique">
    <app-project-navigator
      [prevUrl]="'/innergy_rh'"
      [nextUrl]="'/sebrae_on'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class PrecifiquePageComponent {}