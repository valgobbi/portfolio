import { Component } from '@angular/core';
import { SocialsComponent } from '../socials';
import { BackToTopComponent } from '../backToTop';

@Component({
  selector: 'app-footer',
  imports: [ SocialsComponent, BackToTopComponent ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {}