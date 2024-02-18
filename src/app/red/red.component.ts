import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Gallery} from '../../interfaces/Gallery.interface'
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-red',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgOptimizedImage,
    HttpClientModule
  ],
  templateUrl: './red.component.html',
  styleUrl: './red.component.css'
})

export class RedComponent implements OnInit {
  listePictures: Gallery[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRedAlbum().subscribe((gallery) => {
      this.listePictures = gallery
    })
  }

    // Method to chunk the array into smaller arrays
    chunkArray(array: any[], size: number): any[][] {
        const chunkedArray = [];
        let index = 0;
        while (index < array.length) {
            chunkedArray.push(array.slice(index, size + index));
            index += size;
        }
        return chunkedArray;
    }


}

