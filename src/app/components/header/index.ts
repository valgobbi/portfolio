import { Component } from '@angular/core';
import { SocialsComponent } from '../socials';

@Component({
  selector: 'app-header',
  imports: [ SocialsComponent ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {}