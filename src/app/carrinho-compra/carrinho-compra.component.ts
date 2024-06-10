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

  ngOnInit(): void {

    this.carrinhoService.listar().subscribe(cart=>{
      console.log(cart);
      this.carrinho = cart;
    }); 
    
    this.livroService.listar().subscribe(livro=>{
      console.log(livro);
      this.livros = livro;
    }); 
    
  }
  

}
