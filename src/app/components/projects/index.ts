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
      imgSrc: 'images/projetos/wisemind.png',
      link: '/portfolio/wisemind'
    },
    {
      name: 'bifor',
      imgSrc: 'images/projetos/bifor.png',
      link: '/portfolio/bifor'
    },
    {
      name: 'sebrae_canvas',
      imgSrc: 'images/projetos/sebrae_canvas.png',
      link: '/portfolio/sebrae_canvas'
    },
    {
      name: 'innergy',
      imgSrc: 'images/projetos/innergy_rh.png',
      link: '/portfolio/innergy_rh'
    },
    {
      name: 'precifique',
      imgSrc: 'images/projetos/precifique.png',
      link: '/portfolio/precifique'
    },
    {
      name: 'sebrae_on',
      imgSrc: 'images/projetos/sebrae_on.png',
      link: '/portfolio/sebrae_on'
    },
    {
      name: 'wise',
      imgSrc: 'images/projetos/wise.png',
      link: '/portfolio/wise'
    },
    {
      name: 'notifyme',
      imgSrc: 'images/projetos/notifyme.png',
      link: '/portfolio/notifyme'
    },
    {
      name: 'b4cred',
      imgSrc: 'images/projetos/b4cred.png',
      link: '/portfolio/b4cred'
    },
    {
      name: 'furktech',
      imgSrc: 'images/projetos/furktech.png',
      link: '/portfolio/furktech'
    },
    {
      name: 'slides',
      imgSrc: 'images/projetos/slides.png',
      link: '/portfolio/slides'
    }
  ]

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        '(min-width: 540px)': {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        '(min-width: 1080px)': {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
    },
      [
        (slider) => {
          let timeout: number
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}