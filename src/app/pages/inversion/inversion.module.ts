import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InversionComponent } from './inversion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InversionComponent
  }
];


@NgModule({
  declarations: [InversionComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class InversionModule { }
