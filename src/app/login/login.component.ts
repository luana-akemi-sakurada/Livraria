import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './service/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SessaoService } from '../Sessao/sessao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  public usuarios: any;
  
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$')])
  });

  constructor(private usuarioService: UsuarioService, private router: ActivatedRoute, private sessaoService: SessaoService){ }

  
  ngOnInit(): void {
    this.usuarioService.listar().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }
  
  loginConcluido: boolean = false;
  

  loginUser() {
    
    if (this.loginForm.valid){
      for(let usr of this.usuarios){
        if(usr.email == this.loginForm.controls.user.value?.toString() && usr.senha == this.loginForm.controls.senha.value?.toString()){
          this.sessaoService.setUsuario(usr)
        }
        else{
          alert("Email ou senha incorretos")
        }
      }
    }
    else {
      this.loginForm.markAsUntouched
    }
  }
}
