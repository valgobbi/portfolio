import { Component } from '@angular/core';
import { SocialsComponent } from '../socials';
import { ScrollDownSVG } from "../svgs/scroll-down";

@Component({
  selector: 'app-header',
  imports: [SocialsComponent, ScrollDownSVG],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {}