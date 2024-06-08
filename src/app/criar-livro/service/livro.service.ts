import { Injectable } from "@angular/core";
import { Livro } from "../model/livro.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import {map} from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class LivroService {

    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

    uploadImagem(file: any) {  
        console.log(file);
        const path = "imagens/"+file.name;
        const ref = this.storage.ref(path);
        return ref.put(file);
    }
    
    salvar(livro: Livro){
        return this.db.list('livros').push(livro);
    }

    listar(){
        return this.db.list('livros').snapshotChanges().pipe(
            map(changes => {
                return changes.map(c => ({ 
                    key : c.payload.key,
                    ...c.payload.val() as Livro
                }))
            })
        )
    }
}