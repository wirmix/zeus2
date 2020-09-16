import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
