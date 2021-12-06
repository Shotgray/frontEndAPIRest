import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlanckComponent } from './blanck/blanck.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BlanckComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
