import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        NgIf,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Contact - Samy Issiakhem");
  }
}
