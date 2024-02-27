import {Component, ElementRef, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        NgIf,
        RouterLink,
        RouterLinkActive,
        NgOptimizedImage
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  @ViewChild('taylor') taylorElement!: ElementRef;
  buttonVisible: boolean = true;

  constructor(private titleService: Title) {
    window.addEventListener('scroll', this.toggleButtonVisibility);
    this.titleService.setTitle("Home - Samy Issiakhem");
  }
  toggleButtonVisibility = () => {
    const taylorElement = this.taylorElement.nativeElement;

    if (!taylorElement) return;

    const topOffset = taylorElement.getBoundingClientRect().top;
    const bottomOffset = taylorElement.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    this.buttonVisible = !(topOffset <= windowHeight && bottomOffset >= 0);
  }

  scrollToSection() {
    const taylorElement = this.taylorElement.nativeElement;
    taylorElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
