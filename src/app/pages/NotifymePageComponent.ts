import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-notifyme',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/notifyme_2x.png" alt="Notifyme">
    <app-project-navigator
      [prevUrl]="'/portfolio/wise'"
      [nextUrl]="'/portfolio/b4cred'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class NotifymePageComponent {}