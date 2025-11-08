import { Component } from '@angular/core';
import { InfiniteCarouselComponent } from '../../components/infinite-carousel';
import { ProjectsComponent } from '../../components/projects'
import { AboutComponent } from '../../components/about';
import { HeaderComponent } from "../../components/header";

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent, InfiniteCarouselComponent, ProjectsComponent, AboutComponent , HeaderComponent],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {}