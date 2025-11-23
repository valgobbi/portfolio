import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  template: `
    <div class="socials">
      <a href="https://www.linkedin.com/in/valeria-gobbi/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
    </div>
  `,
  styles: `
    .socials {
      display: flex;
      width: 200px;
      flex-direction: row;
      justify-content: space-between;

      a {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        color: var(--primary);
        background-color: var(--secondary);
        border-radius: 8px;

        i {
          font-size: 1.1rem;
        }
      }
    }
  `
})
export class SocialsComponent {}