import { Injectable } from '@angular/core';
import { Usuario } from '../login/model/user.model';

@Injectable({
  providedIn: 'root'
})

export class SessaoService {
  private usuario: any = { nome: '', email: ''};

  constructor() { }

  setUsuario(usuario: Usuario): void {
    this.usuario = usuario;
  }

  getUsuario(): any{
    return this.usuario;
  }
  
  logOut(){
    this.usuario = undefined;
  }
}
