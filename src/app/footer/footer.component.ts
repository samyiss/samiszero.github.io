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

  onNavigateGitLab(){
    window.open("https://gitlab.com/samyiss", "_blank");
  }
  onNavigateLinkedIn(){
    window.open("https://www.linkedin.com/in/samy-issiakhem-09b6b6261/", "_blank");
  }
  onNavigateGitHub(){
    window.open("https://github.com/samyiss", "_blank");
  }
  onNavigateGmail(){
    window.open("https://www.google.com", "_blank");
  }
  onNavigateDiscord(){
    window.open("https://www.google.com", "_blank");
  }

}
