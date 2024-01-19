import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  isButtonClicked: Boolean = false;

  scrollFunction: Boolean = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20

  constructor(private titleService:Title) {
    this.titleService.setTitle("Home");
  }
}
