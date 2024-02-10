import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  image: string = '/assets/images/cha.jpg'
  constructor(private titleService:Title) {
    this.titleService.setTitle("About - Samy Issiakhem");
  }
}
