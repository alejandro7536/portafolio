import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FotografiaComponent } from './pages/fotografia/fotografia.component';
import { VideosComponent } from './pages/videos/videos.component';
import { SwiperModule } from 'swiper/angular';
import { InversionComponent } from './pages/inversion/inversion.component';
import { SanitazerPipe } from './pipes/sanitazer.pipe';
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EducacionComponent,
    ExperienciaComponent,
    FotografiaComponent,
    VideosComponent,
    InversionComponent,
    SanitazerPipe,
    Sidebar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [
    {provide: 'googleTagManagerId',  useValue: 'GTM-K8C9MPM'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
