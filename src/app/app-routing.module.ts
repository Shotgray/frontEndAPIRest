import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlanckComponent } from './shared/blanck/blanck.component';
import { ListausuarioComponent } from './usuario/listausuario/listausuario.component';
import { NuevousuarioComponent } from './usuario/nuevousuario/nuevousuario.component';

const routes: Routes = [
  {
    path: '',
    component: BlanckComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: ListausuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/nuevo',
    component: NuevousuarioComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
