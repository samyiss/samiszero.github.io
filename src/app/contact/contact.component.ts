import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LoadingComponent} from "../loading/loading.component";
import {MatDialog} from "@angular/material/dialog";

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
  email: string = "samylichine.iss@gmail.com"

  constructor(private titleService:Title, public dialog: MatDialog) {
    this.titleService.setTitle("Contact - Samy Issiakhem");

    this.openLoadingOverlay();
    this.titleService.setTitle("Projects - Samy Issiakhem");

    setTimeout(() => {
      this.closeLoadingOverlay();
    }, 1500);

  }

  openLoadingOverlay(): void {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      panelClass: 'loading-dialog-overlay'
    });
  }

  closeLoadingOverlay(): void {
    this.dialog.closeAll();
    this.scrollToTop()
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onNavigateLinkedIn(){
    window.open("https://www.linkedin.com/in/samy-issiakhem-09b6b6261/", "_blank");
  }

  onNavigateGmail(){
    window.location.href = `mailto:${this.email}`;
  }
}
