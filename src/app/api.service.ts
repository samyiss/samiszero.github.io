import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gallery } from '../interfaces/Gallery.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5034/api';

  constructor(private http: HttpClient) {}

  getAlbum(era: string): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${(this.baseUrl)}/Gallery/${era}`);
  }
}
