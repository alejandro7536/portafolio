import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap } from 'rxjs/operators'
import { Image } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  clientID = 'GACWV1JRPpKco1mJPda14oFf4AfpfNx4gTLuI9mjiLA';
  baseUrl = 'https://api.unsplash.com/users/alejandroalas7536'

  constructor(
    private http: HttpClient
  ) {
   }


  getUser() {
    let params = new HttpParams().append('client_id', this.clientID);
    return this.http.get(this.baseUrl, {params});
  }

  getStats() {
    let params = new HttpParams().append('client_id', this.clientID);
    return this.http.get(`${this.baseUrl}/statistics`, {params});
  }

  getlastestImages(): Observable<Image[]> {
    let params = new HttpParams().append('client_id', this.clientID).append('per_page', 8).append('stats', true).append('order_by', 'latest');
    return this.http.get<Image[]>(`${this.baseUrl}/photos`, {params});
  }

  getPopularImages(): Observable<Image[]> {
    let params = new HttpParams().append('client_id', this.clientID).append('per_page', 24).append('stats', true).append('order_by', 'popular');
    return this.http.get<Image[]>(`${this.baseUrl}/photos`, {params});
  }
}
