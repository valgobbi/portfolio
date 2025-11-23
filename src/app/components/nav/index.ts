import { Component, HostListener } from '@angular/core';
import { LogoSVG } from "../svgs/logo";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
  imports: [LogoSVG]
})
export class NavComponent {
  theme: 'light' | 'dark' = localStorage['theme'] ?? 'dark';
  menuOpen: boolean = false;

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem("theme", this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
  }

@HostListener('document:click', ['$event'])
  closeMenuOnAnyClick(event: Event) {
    const { target } = event;
    if (target instanceof HTMLElement && [...target?.classList].includes('fa-bars')) {
      this.menuOpen = !this.menuOpen;
    } else if (target instanceof HTMLElement && ![...target?.classList].includes('fa-circle-half-stroke')) {
      this.menuOpen = false;
    }
  }

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  backToTop () {
    if (location?.pathname === '/') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      location.href = '/'
    }
  }
}