import {Component, HostListener} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  websiteName: string = "Samy Issiakhem";


  isLargeScreen: boolean;

  constructor() {
    this.isLargeScreen = window.innerWidth > 768; // You can adjust the threshold as per your requirement
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isLargeScreen = window.innerWidth > 768; // You can adjust the threshold as per your requirement
  }

  isScreenWidthLarge() {
    return this.isLargeScreen;
  }
}
