import { Component } from '@angular/core';

@Component({
  selector: 'backtotop-svg',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="66" height="66" viewBox="0 0 66 66">
      <defs>
        <filter id="Elipse_6556" x="0" y="0" width="66" height="66" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Grupo_67587" data-name="Grupo 67587" transform="translate(-1724 -1954)">
        <g transform="matrix(1, 0, 0, 1, 1724, 1954)" filter="url(#Elipse_6556)">
          <circle id="Elipse_6556-2" data-name="Elipse 6556" cx="24" cy="24" r="24" transform="translate(9 6)" fill="#1f242e"/>
        </g>
        <path id="Caminho_63053" data-name="Caminho 63053" d="M32.7,22.115l-3.9-4.673a.847.847,0,0,0-.133-.145.828.828,0,0,0-.456-.188c-.025,0-.051,0-.076,0s-.051,0-.077,0a.8.8,0,0,0-.59.333l-3.9,4.673a.827.827,0,1,0,1.271,1.06l2.465-2.956v9.49a.827.827,0,1,0,1.655,0V20.22l2.464,2.955A.827.827,0,0,0,32.7,22.115Z" transform="translate(1728.621 1960.177)" fill="#fff"/>
      </g>
    </svg>
  `,
  styles: `
    :host {
      margin: 0 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
        fill: var(--primary);
    }
  `
})
export class BackToTopSVG {}