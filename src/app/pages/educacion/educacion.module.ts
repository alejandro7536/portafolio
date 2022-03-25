import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EducacionComponent
  }
];

@NgModule({
  declarations: [EducacionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class EducacionModule { }
