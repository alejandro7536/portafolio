import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia.component';
import { SwiperModule } from 'swiper/angular';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaComponent
  }
];


@NgModule({
  declarations: [ExperienciaComponent],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule.forChild(routes)
  ]
})
export class ExperienciaModule { }
