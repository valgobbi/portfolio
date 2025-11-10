import { Component, HostListener } from '@angular/core';
import { WiseSVG } from '../svgs/wise';
import { AiukaSVG } from "../svgs/aiuka";
import { WisemindSVG } from "../svgs/wisemind";
import { VolvoSVG } from "../svgs/volvo";
import { SebraeSVG } from "../svgs/sebrae";
import { Re3veSVG } from "../svgs/re3ve";
import { NotifymeSVG } from "../svgs/notifyme";
import { FurktechSVG } from "../svgs/furktech";
import { DentaluniWiseSVG } from "../svgs/dentaluni";
import { BiforSVG } from "../svgs/bifor";

@Component({
  selector: 'app-infinite-carousel',
  imports: [WiseSVG, AiukaSVG, WisemindSVG, VolvoSVG, SebraeSVG, Re3veSVG, NotifymeSVG, FurktechSVG, DentaluniWiseSVG, BiforSVG],
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
}