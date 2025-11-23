import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-slides',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="assets/images/pages/slides_2x.png" alt="Slides">
    <app-project-navigator
      [prevUrl]="'/portfolio/furktech'"
      [nextUrl]="'/portfolio/wisemind'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class SlidesPageComponent {}