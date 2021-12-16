import { Component } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor (
    private gtmService: GoogleTagManagerService,
    public sidebarService: SidebarService
    ) {
    gtmService.addGtmToDom();
  }


}
