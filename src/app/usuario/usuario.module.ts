import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListausuarioComponent } from './listausuario/listausuario.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';



@NgModule({
  declarations: [
    ListausuarioComponent,
    NuevousuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
