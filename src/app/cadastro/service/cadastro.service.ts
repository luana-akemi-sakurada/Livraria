import { Injectable } from "@angular/core";
import { Usuario } from "../model/cadastro.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Injectable({
    providedIn: 'root'
})
export class CadastroService {

    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
    /*
    uploadImagem(file: any) {  
        console.log(file);
        const path = "imagens/"+file.name;
        const ref = this.storage.ref(path);
        return ref.put(file);
    }
    */
    
    salvar(user: Usuario){
        return this.db.list('usuarios').push(user);
    }
}