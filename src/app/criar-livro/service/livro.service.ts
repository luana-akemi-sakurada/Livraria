import { Injectable } from "@angular/core";
import { Livro } from "../model/livro.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
    providedIn: 'root'
})
export class LivroService {

    constructor(private db: AngularFireDatabase) { }

    salvar(livro: Livro){
        return this.db.list('livros').push(livro);
    }
}