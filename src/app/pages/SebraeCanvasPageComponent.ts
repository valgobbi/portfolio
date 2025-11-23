import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-sebrae_canvas',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/sebrae_canvas_2x.png" alt="Sebrae Canvas">
    <app-project-navigator
      [prevUrl]="'/bifor'"
      [nextUrl]="'/innergy_rh'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class SebraeCanvasPageComponent {}