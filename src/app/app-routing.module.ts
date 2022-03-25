import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FotografiaComponent } from './pages/fotografia/fotografia.component';
import { VideosComponent } from './pages/videos/videos.component';
import { InversionComponent } from './pages/inversion/inversion.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'formacion'
  },
  {
    path: 'formacion',
    loadChildren: () => import('./pages/educacion/educacion.module').then(m => m.EducacionModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./pages/experiencia/experiencia.module').then(m => m.ExperienciaModule)

  },
  {
    path: 'fotografia',
    loadChildren: () => import('./pages/fotografia/fotografia.module').then(m => m.FotografiaModule)

  },
  {
    path: 'video',
    loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosModule)

  },
  {
    path: 'inversion',
    loadChildren: () => import('./pages/inversion/inversion.module').then(m => m.InversionModule)

  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./pages/page404/page404.module').then(m => m.Page404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
