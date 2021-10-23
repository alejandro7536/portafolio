import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FotografiaComponent } from './pages/fotografia/fotografia.component';
import { VideosComponent } from './pages/videos/videos.component';
import { InversionComponent } from './pages/inversion/inversion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'formacion'
  },
  {
    path: 'formacion',
    component: EducacionComponent
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent
  },
  {
    path: 'fotografia',
    component: FotografiaComponent
  },
  {
    path: 'video',
    component: VideosComponent
  },
  {
    path: 'inversion',
    component: InversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
