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

    items = [
        {
            name: 'bifor',
            src: '/svg/bifor.svg',
            width: '100px'
        },
        {
            name: 'furktech',
            src: '/svg/furktech.svg',
            width: '130px'
        },
        {
            name: 'notifyme',
            src: '/svg/notifyme.svg',
            width: '140px'
        },
        {
            name: 're3ve',
            src: '/svg/re3ve.svg',
            width: '100px'
        },
        {
            name: 'sebrae',
            src: '/svg/sebrae.svg',
            width: '100px'
        },
        {
            name: 'wisemind',
            src: '/svg/wisemind.svg',
            width: '120px'
        },
        {
            name: 'volvo',
            src: '/svg/volvo.svg',
            width: '170px'
        },
        {
            name: 'wisemind',
            src: '/svg/wisemind.svg',
            width: '100px'
        },
        {
            name: 'wise',
            src: '/svg/wise.svg',
            width: '100px'
        },
    ]
}