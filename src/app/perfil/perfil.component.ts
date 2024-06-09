import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SessaoService } from '../Sessao/sessao.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private sessaoService: SessaoService, private db: AngularFireDatabase) {}
  private userInfo: any = null
  public infoForm: any = null;
  isEditing: boolean = false;

  ngOnInit() {
    this.userInfo = this.sessaoService.getUsuario();

    this.infoForm = new FormGroup({
      nome: new FormControl(this.userInfo.nome),
      email: new FormControl(this.userInfo.email),
      nickname: new FormControl(this.userInfo.nickname),
    });

    this.infoForm.disable();
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
      this.infoForm.enable();
    } else {
      this.infoForm.disable();
      console.log(this.userInfo)
      this.AtualizarUsuario(this.userInfo.key);
    }
  }

  deletarUsuario(): void {
    this.db.list('usuarios').remove(this.userInfo.key);
  }

  AtualizarUsuario(key: string): void {
    this.db.list('usuarios').update(key, this.infoForm.value);
  }
}
