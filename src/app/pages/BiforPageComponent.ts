import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-bifor',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="images/pages/bifor_2x.png" alt="Bifor">
    <app-project-navigator
      [prevUrl]="'/portfolio/wisemind'"
      [nextUrl]="'/portfolio/sebrae_canvas'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class BiforPageComponent {}