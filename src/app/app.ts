import { Component, signal } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio';
import { NavComponent } from "./nav/nav";
import { FooterComponent } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [PortfolioComponent, NavComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('val-portfolio');
}