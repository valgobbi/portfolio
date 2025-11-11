
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer";
import { NavComponent } from './components/nav';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}