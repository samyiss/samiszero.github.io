import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-gallery',
  standalone: true,
    imports: [
        NgIf,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
