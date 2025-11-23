import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-navigator',
  template: `
    <div class="navigator-container">
      <a [href]="prevUrl()"><i class="fab fa-chevron-left fa-solid"></i></a>
      <a [href]="nextUrl()"><i class="fab fa-chevron-right fa-solid"></i></a>
    </div>
  `,
  styles: `
    .navigator-container {
      position: fixed;
      top: 0;
      left: 0;
      width: calc(100% - 32px);
      height: calc(100% - 32px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary);
        background: rgba(var(--secondary-rgb), 0.5);
        border: 1px solid rgba(var(--primary-rgb), 0.3);
        font-size: 1rem;
        width: 3rem;
        height: 3rem;
        border-radius: 4rem;
      }
    }
  `
})
export class ProjectNavigatorComponent {
  prevUrl = input('');
  nextUrl = input('');
}