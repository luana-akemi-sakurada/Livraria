import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

salvar(carrinho: Carrinho){
    return this.db.list('carrinho').push(carrinho);
}

listar(){
    return this.db.list('carrinho').snapshotChanges().pipe(
        map(changes => {
            return changes.map(c => ({ 
                key : c.payload.key,
                ...c.payload.val() as Carrinho
            }))
        })
    )
}

}
