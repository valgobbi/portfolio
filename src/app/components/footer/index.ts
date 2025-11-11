import { Component } from '@angular/core';
import { SocialsComponent } from '../socials';
import { BackToTopSVG } from "../svgs/back-to-top";

@Component({
  selector: 'app-footer',
  imports: [SocialsComponent, BackToTopSVG],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  backToTop () {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }
}