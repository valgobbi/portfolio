import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-furktech',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/furktech_2x.png" alt="Bifor">
    <app-project-navigator
      [prevUrl]="'/b4cred'"
      [nextUrl]="'/slides'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class FurktechPageComponent {}