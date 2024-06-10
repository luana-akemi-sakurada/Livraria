import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './service/carrinho.service';
import { Livro } from '../criar-livro/model/livro.model';
import { LivroService } from '../criar-livro/service/livro.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../login/model/user.model';

@Component({
  selector: 'app-carrinho-compra',
  templateUrl: './carrinho-compra.component.html',
  styleUrl: './carrinho-compra.component.css'
})
export class CarrinhoCompraComponent implements OnInit{
  router: any;
  constructor(private carrinhoService: CarrinhoService, private livroService: LivroService, private db: AngularFireDatabase){

  }
  public livros: any;
  public livro: any;
  public carrinho: any = [];

  ngOnInit(): void {

    this.carrinhoService.listar().subscribe(cart=>{
      this.carrinho = [];
      for(let li of cart){
        this.carrinho.push(
          new FormGroup({
            keyLivro: new FormControl(li.keyLivro),
            keyUser: new FormControl(li.keyUser),
            Quantidade: new FormControl(li.Quantidade),
            key: new FormControl(li.key),
            isEditing: new FormControl(false)
          })
        )
        console.log(this.carrinho)
      }
    });
    
    this.livroService.listar().subscribe(livro=>{
      this.livros = livro;
    });

  }
  getInfoLivro(nome: string){
    for(let li in this.livros){
      if (this.livros[li].nome == nome){
        this.livro = this.livros[li];
      }
    }
  }

  deletarLivroDoCarrinho(key: string): void {
    this.db.list('carrinho').remove(key)
  }

  comprarLivroDoCarrinho(): void {
    this.db.list('carrinho').remove(this.carrinho.key)
    this.router.navigate(['/explorar']);
  }
   

  atualizarCarrinho(key: string, formCarrinho: FormGroup): void {
    formCarrinho.controls['isEditing'].setValue(!formCarrinho.controls['isEditing'].value)
    console.log(formCarrinho.controls['isEditing'].value)

    if(!formCarrinho.controls['isEditing'].value){
      formCarrinho.removeControl('isEditing')
      formCarrinho.removeControl('key')


      console.log(formCarrinho.controls)
      this.db.list('carrinho').update(key, formCarrinho.value);
      
      formCarrinho.addControl('isEditing' , new FormControl(false))
      formCarrinho.addControl('key' , new FormControl(key))
      
      //window.location.reload(); 
    }
  }
}
