import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.html',
  styleUrls: ['./infinite-carousel.scss']
})
export class InfiniteCarouselComponent {
    public screenWidth: any;
    public screenHeight: any;
    loops: number[]
    
    constructor() {
        this.loops = [1, 2, 3];
    }

    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log('ngOnInit: ', this.screenWidth, this.screenHeight)
    }

    @HostListener('window:resize')
    onWindowResize() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log('resize: ', this.screenWidth, this.screenHeight)
        // Add any component logic here that depends on the new size
    }

    items = ['bifor', 'furktech', 'notifyme', 're3ve', 'sebrae', 'wisemind'].map(c => (
        {
            name: c,
            src: `/images/${c}.PNG`
        }
    ))
}