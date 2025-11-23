import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio';
import { WisePageComponent } from './pages/WisePageComponent'
import { WiseMindPageComponent } from './pages/WisemindPageComponent'
import { B4credPageComponent } from './pages/B4credPageComponent'
import { BiforPageComponent } from './pages/BiforPageComponent'
import { InnergyRHPageComponent } from './pages/InnergyRHPageComponent'
import { FurktechPageComponent } from './pages/FurktechPageComponent'
import { SlidesPageComponent } from './pages/SlidesPageComponent'
import { NotifymePageComponent } from './pages/NotifymePageComponent'
import { PrecifiquePageComponent } from './pages/PrecifiquePageComponent'
import { SebraeOnPageComponent } from './pages/SebraeOnPageComponent'
import { SebraeCanvasPageComponent } from './pages/SebraeCanvasPageComponent'

export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'wise',
    component: WisePageComponent,
  },
  {
    path: 'b4cred',
    component: B4credPageComponent,
  },
  {
    path: 'bifor',
    component: BiforPageComponent,
  },
  {
    path: 'innergy_rh',
    component: InnergyRHPageComponent,
  },
  {
    path: 'furktech',
    component: FurktechPageComponent,
  },
  {
    path: 'slides',
    component: SlidesPageComponent,
  },
  {
    path: 'notifyme',
    component: NotifymePageComponent,
  },
  {
    path: 'precifique',
    component: PrecifiquePageComponent,
  },
  {
    path: 'sebrae_on',
    component: SebraeOnPageComponent,
  },
  {
    path: 'sebrae_canvas',
    component: SebraeCanvasPageComponent,
  },
  {
    path: 'wisemind',
    component: WiseMindPageComponent,
  }
];
