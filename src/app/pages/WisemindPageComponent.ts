import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-wisemind',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="assets/images/pages/wisemind_2x.png" alt="Wisemind">
    <app-project-navigator
      [prevUrl]="'/portfolio/slides'"
      [nextUrl]="'/portfolio/bifor'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class WiseMindPageComponent {}