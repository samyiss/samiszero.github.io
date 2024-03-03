import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gallery } from '../interfaces/Gallery.interface';
import {GalleryJson} from "../interfaces/GalleryJson.interface";
import {ProjectJson} from "../interfaces/ProjectJson.interface";
import {Project} from "../interfaces/Project.interface";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAlbum(): Observable<GalleryJson> {
    return this.http.get<GalleryJson>('assets/json/GalleryData.json');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/json/ProjectsData.json');
  }

}
