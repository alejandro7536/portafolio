import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotografiaComponent } from './fotografia.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FotografiaComponent
  }
];


@NgModule({
  declarations: [FotografiaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FotografiaModule { }
