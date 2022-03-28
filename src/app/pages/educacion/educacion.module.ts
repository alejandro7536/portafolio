import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
})
export class EducacionModule { }
