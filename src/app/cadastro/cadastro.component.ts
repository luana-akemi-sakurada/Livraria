import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
        this.cadastroConcluido = true;
    }
    else {
      this.cadastroForm.markAsUntouched
    }
  }
} 