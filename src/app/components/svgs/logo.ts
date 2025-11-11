import { Component } from '@angular/core';

@Component({
  selector: 'logo-svg',
  template: `
  <svg id="Grupo_67618" data-name="Grupo 67618" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50.572" height="40" viewBox="0 0 50.572 40">
    <defs>
      <clipPath id="clip-path">
        <rect id="Retângulo_27699" data-name="Retângulo 27699" width="50.572" height="40"/>
      </clipPath>
    </defs>
    <g id="Grupo_67617" data-name="Grupo 67617" clip-path="url(#clip-path)">
      <path id="Caminho_63068" data-name="Caminho 63068" d="M24.553,27.557c-3.644-.951-6.867,1.286-10.547,1.327C3.883,29-.841,21.557.123,12.121,1.309.5,13.235-2.7,22.676,2.24,32.684,7.476,35.716,26.18,41.283,35.516c-.262.893-1.334,5.6-2.947,4.237-.162-.138-.911-3.176-1.3-4.049C33.994,28.838,26.549,8.643,22.021,4.417,14.742-2.376,5.741,1.313,4.715,11.1,3.576,21.984,7.588,31.124,19.961,26.54V16.378h4.592Z" transform="translate(0 0)"/>
      <path id="Caminho_63069" data-name="Caminho 63069" d="M314.128,106.306c-1,.08-.429-1.562-.266-2.045a89.186,89.186,0,0,1,4.107-9.63c.3-.586.475-1.405,1.263-1.532Z" transform="translate(-268.66 -79.769)"/>
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
export class LogoSVG {}