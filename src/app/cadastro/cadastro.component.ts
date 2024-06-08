import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './model/cadastro.model';
import { CadastroService } from './service/cadastro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroConcluido: boolean = false;
  cadastroForm = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z]{4,}$')]),
    email: new FormControl('',[Validators.required, Validators.email]),
    nome: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z]{2,}$')]),
    senha: new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$')]),
    senhaConfirm: new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$')])
  });

  constructor(private cadastroService: CadastroService, private router: ActivatedRoute) { }


  confirmarSenha(control: AbstractControl): { [key: string]: boolean } | null {
    const senha = control.get('senha');
    const senhaConfirm = control.get('senhaConfirm');
    if (senha && senhaConfirm && senha.value !== senhaConfirm.value) {
      return { 'mismatch': true};
    }
    else {
      return null;
    }
  }

  cadastroUser() {
    if (this.cadastroForm.valid){
      
      var user = new Usuario();

      user.nickname = this.cadastroForm.controls.user.value?.toString();
      user.nome = this.cadastroForm.controls.nome.value?.toString();
      user.email = this.cadastroForm.controls.email.value?.toString();
      user.senha = this.cadastroForm.controls.senha.value?.toString();

      this.cadastroService.salvar(user)
      this.cadastroConcluido = true;
    }
    else {
      this.cadastroForm.markAsUntouched
    }
  }
} 