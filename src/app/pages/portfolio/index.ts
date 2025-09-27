import { Component } from '@angular/core';
import { InfiniteCarouselComponent } from '../../components/infinite-carousel';

@Component({
  selector: 'app-portfolio',
  imports: [InfiniteCarouselComponent],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {}