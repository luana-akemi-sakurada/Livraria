import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginConcluido: boolean = false;
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z]{4,}$')]),
    senha: new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$')])
  });

  loginUser() {
    if (this.loginForm.valid){
        this.loginConcluido = true;
    }
    else {
      this.loginForm.markAsUntouched
    }
  }
}
