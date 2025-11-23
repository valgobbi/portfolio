import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-wisemind',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/wisemind_2x.png" alt="Wisemind">
    <app-project-navigator
      [prevUrl]="'/slides'"
      [nextUrl]="'/bifor'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class WiseMindPageComponent {}