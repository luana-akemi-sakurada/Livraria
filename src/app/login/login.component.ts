import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './service/user.service';
import { Router } from '@angular/router';
import { SessaoService } from '../Sessao/sessao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuarios: any;

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$')])
  });

  constructor(private usuarioService: UsuarioService, private router: Router, private sessaoService: SessaoService) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      let loginSuccess = false;
      for (let usr of this.usuarios) {
        if (usr.email === this.loginForm.controls.user.value && usr.senha === this.loginForm.controls.senha.value) {
          this.sessaoService.setUsuario(usr);
          loginSuccess = true;
          break; // Saia do loop após encontrar o usuário
        }
      }
      if (loginSuccess) {
        this.router.navigate(['/home']);
      } else {
        alert("Email ou senha incorretos");
      }
    } else {
      this.loginForm.markAsUntouched();
    }
  }
}
