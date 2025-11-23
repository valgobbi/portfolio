import { Component } from '@angular/core';
import { ProjectNavigatorComponent } from '../components/projectNavigator';

@Component({
  selector: 'page-sebrae_on',
  imports: [ProjectNavigatorComponent],
  template: `
    <img src="/images/pages/sebrae_on_2x.png" alt="Sebrae On">
    <app-project-navigator
      [prevUrl]="'/precifique'"
      [nextUrl]="'/wise'"
    />
  `,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class SebraeOnPageComponent {}