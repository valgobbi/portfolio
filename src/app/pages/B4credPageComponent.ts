import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-b4cred',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/b4cred_2x.png" alt="Wise">
    <app-project-navigator
      [prevUrl]="'/notifyme'"
      [nextUrl]="'/furktech'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class B4credPageComponent {}