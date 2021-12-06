import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuariointerface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  crearUsuario(inputLogin: string, inputPassword: string){
    const nuevoUsuario: Usuario = {
      id: 0,
      login: inputLogin,
      contrasena: inputPassword,
    };

    this.usuarioService.agregarUsuario(nuevoUsuario);
  }
}
