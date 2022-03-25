import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitazerPipe } from './sanitazer.pipe';



@NgModule({
  declarations: [SanitazerPipe],
  imports: [
    CommonModule
  ],
  exports:[SanitazerPipe]
})
export class PipesModule { }
