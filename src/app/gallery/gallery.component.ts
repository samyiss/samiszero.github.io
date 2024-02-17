import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    RouterOutlet
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  red: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_1515.JPG?alt=media&token=fe972745-5ddf-49fe-aefe-f2f91b7f888c"
  speaknow: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_9587.jpg?alt=media&token=29140da0-b8b0-4a47-895e-9177419d24f7"
  reputation: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_1235.jpg?alt=media&token=d42d2fe5-44b3-498f-9442-38cde201c0af"
  folklore: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_1500.JPG?alt=media&token=a0273f21-9a2a-4123-af74-2bb0362bbbf4"
  evermore: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_0035.JPEG?alt=media&token=64f8ccdc-9371-43cc-9ddc-231de06479f8"
  midnight: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_1478.JPG?alt=media&token=8af56e70-be6b-46be-95f6-c71f0b259fdf"
  nineteen: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_9087.JPEG?alt=media&token=e1a276ed-fc12-410e-95eb-32a8480e4883"
  fearless: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-5d345.appspot.com/o/pictures%2FIMG_1491.JPG?alt=media&token=fc65f61a-a5ac-48d1-98c6-6c566c392e45"

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle("Gallery - Samy Issiakhem");
  }

  navigateToRedComponent() {
    this.router.navigate(['gallery', 'red']).then(r => console.log("done"));
  }
}
