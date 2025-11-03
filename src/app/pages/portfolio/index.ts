import { Component } from '@angular/core';
import { InfiniteCarouselComponent } from '../../components/infinite-carousel';
import { ProjectsComponent } from '../../components/projects'
import { AboutComponent } from '../../components/about';

@Component({
  selector: 'app-portfolio',
  imports: [InfiniteCarouselComponent, ProjectsComponent, AboutComponent],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {}