import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  websiteName: string = "Samy Issiakhem";
}
