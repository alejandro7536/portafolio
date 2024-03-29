import { Component, OnInit } from '@angular/core';

import { UnsplashService } from '../../services/unsplash.service';
import { combineLatest } from 'rxjs';
import { Image } from '../../interfaces';
import { tap } from 'rxjs/operators';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  stats: any;
  user: any;
  lastestPhotos!: Image[];
  populartPhotos!: Image[];
  loading: boolean = false;

  constructor(
    private unsplash: UnsplashService,
    private gtm: GoogleTagManagerService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    combineLatest([this.unsplash.getUser(), this.unsplash.getStats(), this.unsplash.getlastestImages(), this.unsplash.getPopularImages()]).pipe(tap(console.log)).subscribe(
      ([user, stats, lastestPhotos, populartPhotos]) => {
        this.user = user;
        this.stats = stats
        this.lastestPhotos = lastestPhotos;
        this.populartPhotos = populartPhotos
        this.loading = false;
      });
  }


  sendTag(image: any) {
    this.gtm.pushTag({
      event: 'viewImage',
      content: {
        description: 'Imagen vista',
        url: image.urls.regular
      }
    });

  }
}
