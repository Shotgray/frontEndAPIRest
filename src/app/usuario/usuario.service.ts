import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuariointerface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 
  }

  public lista: Usuario[] = [];

  listarUsuario() {
    this.http.get<Usuario []>('http://127.0.0.1:8080/api/usuario')
    .subscribe( resp => {
      this.lista = resp;
    });
  }

  agregarUsuario(usuario: Usuario){
    this.http.post<any>('http://127.0.0.1:8080/api/usuario', usuario).subscribe();
  }
}
