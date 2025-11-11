import { Component } from '@angular/core';
import { LogoSVG } from "../svgs/logo";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
  imports: [LogoSVG]
})
export class NavComponent {
  theme: 'light' | 'dark' = 'light';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  backToTop () {
    console.log(location)
    if (location?.pathname === '/') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      location.href = '/'
    }
  }
}