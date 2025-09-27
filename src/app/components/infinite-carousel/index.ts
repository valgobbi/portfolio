import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.html',
  styleUrls: ['./infinite-carousel.scss']
})
export class InfiniteCarouselComponent {
    items = ['bifor', 'furktech', 'notifyme', 're3ve', 'sebrae', 'wisemind'].map(c => (
        {
            name: c,
            src: `/images/${c}.PNG`
        }
    ))
}