import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SwiperModule } from 'swiper/angular';
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Sidebar2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'googleTagManagerId',  useValue: 'GTM-K8C9MPM'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
