import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {Gallery} from '../../interfaces/Gallery.interface'
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../api.service";

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

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Access route parameters
      this.pageId = params['id'];

      // Depending on the pageId, you can adjust behavior, load data, etc.
      this.apiService.getAlbum(this.pageId).subscribe((gallery) => {
        this.listePictures = gallery
      })
    });


  }
}

