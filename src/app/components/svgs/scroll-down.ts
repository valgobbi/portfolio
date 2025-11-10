import { Component } from '@angular/core';

@Component({
  selector: 'wise-svg',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="91.952" height="94.952" viewBox="0 0 91.952 94.952">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#c943c4"/>
      <stop offset="1" stop-color="#12fafa"/>
    </linearGradient>
  </defs>
  <g id="Grupo_67594" data-name="Grupo 67594" transform="translate(-637.524 -514.524)">
    <rect id="Retângulo_27678" data-name="Retângulo 27678" width="39" height="42" rx="19.5" transform="translate(664 541)" opacity="0.7" fill="url(#linear-gradient)"/>
    <path id="scroll-bar_1_" data-name="scroll-bar (1)" d="M14.017,1.25H11.785A7.546,7.546,0,0,0,4.25,8.785v8.93a7.546,7.546,0,0,0,7.535,7.535h2.233a7.546,7.546,0,0,0,7.535-7.535V8.785A7.546,7.546,0,0,0,14.017,1.25Zm2.824,14.824-3.349,3.349a.835.835,0,0,1-1.183,0L8.961,16.074a.837.837,0,0,1,1.183-1.183l1.92,1.92V7.669a.837.837,0,0,1,1.674,0v9.142l1.92-1.92a.837.837,0,0,1,1.183,1.183Z" transform="translate(670.099 549.157)" />
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
export class WiseSVG {}