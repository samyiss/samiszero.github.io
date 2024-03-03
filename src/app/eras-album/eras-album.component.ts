import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {Gallery} from '../../interfaces/Gallery.interface'
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../api.service";
import {LoadingComponent} from "../loading/loading.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-eras-album',
  standalone: true,
  imports: [
    NgIf, RouterLink, RouterLinkActive, NgForOf,
    NgOptimizedImage, HttpClientModule
  ],
  templateUrl: './eras-album.component.html',
  styleUrl: './eras-album.component.css'
})

export class ErasAlbumComponent implements OnInit {
  listePictures: Gallery[] = [];
  pageId: string = ""

  constructor(private apiService: ApiService, private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openLoadingOverlay();

    this.route.params.subscribe(params => {
      this.pageId = params['id']; // Access route parameters

      // Depending on the pageId, you can adjust behavior, load data, etc.
      this.apiService.getAlbum().subscribe((gallery) => {
        this.listePictures = gallery[this.pageId]
      })
    });

    setTimeout(() => {
      this.closeLoadingOverlay();
    }, 4000);
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



  // selectedImage: string = ""
  //
  // showModal = false;
  // toggleModal(imgUrl: string){
  //   this.selectedImage = imgUrl
  //   this.showModal = !this.showModal;
  // }
}

