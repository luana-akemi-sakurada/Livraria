import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './service/carrinho.service';
import { Livro } from '../criar-livro/model/livro.model';
import { LivroService } from '../criar-livro/service/livro.service';

@Component({
  selector: 'app-carrinho-compra',
  templateUrl: './carrinho-compra.component.html',
  styleUrl: './carrinho-compra.component.css'
})
export class CarrinhoCompraComponent implements OnInit{
  constructor(private carrinhoService: CarrinhoService, private livroService: LivroService){

  }
  public carrinho: any;
  public livros: any;
  public livro: any;

  ngOnInit(): void {

    this.carrinhoService.listar().subscribe(cart=>{
      this.carrinho = cart;
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
   

}
