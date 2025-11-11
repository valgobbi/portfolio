import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio';
import { WisePageComponent } from './pages/WisePageComponent'

export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'wise_ia',
    component: WisePageComponent,
  },
];
