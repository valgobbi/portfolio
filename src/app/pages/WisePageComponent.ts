import { Component } from '@angular/core';

@Component({
  selector: 'page-wise',
  template: `<img src="/images/page_wise.png" alt="Wise Project">`,
  styles: `:host {
    img {
        width: 100%;
    }
  }`
})
export class WisePageComponent {}