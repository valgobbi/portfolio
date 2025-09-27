import { Component, signal } from '@angular/core';
import { PortfolioComponent } from './pages/portfolio';
import { NavComponent } from "./components/nav";
import { FooterComponent } from "./components/footer";

@Component({
  selector: 'app-root',
  imports: [PortfolioComponent, NavComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('val-portfolio');
}