import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { PipesModule } from '../../pipes/pipes.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent
  }
];


@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild(routes)

  ]
})
export class VideosModule { }
