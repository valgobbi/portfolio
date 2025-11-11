import { Component } from '@angular/core';
import { InfiniteCarouselComponent } from '../infinite-carousel';
import { ProjectsComponent } from '../projects'
import { AboutComponent } from '../about';
import { HeaderComponent } from "../header";

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent, InfiniteCarouselComponent, ProjectsComponent, AboutComponent],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {}