import { Injectable } from "@angular/core";
import { Usuario } from "../model/user.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
    
    listar(){
        return this.db.list("usuarios").snapshotChanges().pipe(
            map(changes => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val() as Usuario
                }))
            })
        )
    }
    deletarUsuario(key: string): Promise<void> {
        return this.db.list('usuarios').remove(key);
      }
    
    atualizarUsuario(key: string, usuario: Partial<Usuario>): Promise<void> {
        return this.db.list('usuarios').update(key, usuario);
    }
}