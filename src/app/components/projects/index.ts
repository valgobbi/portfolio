import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { MatCardModule } from '@angular/material/card';
import "keen-slider/keen-slider.min.css";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  imports: [ MatCardModule ],
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;

  slider: KeenSliderInstance | null = null;

  projects = [
    {
      name: 'wisemind',
      imgSrc: '/images/portfolio_wisemind.png',
      link: '/wisemind'
    },
    {
      name: 'bifor',
      imgSrc: '/images/portfolio_bifor.png',
      link: '/bifor'
    },
    {
      name: 'sebrae_canvas',
      imgSrc: '/images/portfolio_sebrae_canvas.png',
      link: '/sebrae_canvas'
    },
    {
      name: 'sebrae_on',
      imgSrc: '/images/portfolio_sebrae_on.png',
      link: '/sebrae_on'
    },
    {
      name: 'wise_ia',
      imgSrc: '/images/portfolio_wise_ia.png',
      link: '/wise_ia'
    },
    {
      name: 'notifyme',
      imgSrc: '/images/portfolio_notifyme.png',
      link: '/notifyme'
    },
    {
      name: 'p4p',
      imgSrc: '/images/portfolio_p4p.png',
      link: '/p4p'
    },
    {
      name: 'furktech',
      imgSrc: '/images/portfolio_furktech.png',
      link: '/furktech'
    },
    {
      name: 'more',
      imgSrc: '/images/portfolio_more.png',
      link: '/more'
    }
  ]

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}