import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../criar-livro/service/livro.service';
import { ActivatedRoute } from '@angular/router';
import { SessaoService } from '../Sessao/sessao.service';
import { Carrinho } from '../carrinho-compra/model/carrinho.model';
import { CarrinhoService } from '../carrinho-compra/service/carrinho.service';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrl: './livro-detalhes.component.css'
})
export class LivroDetalhesComponent implements OnInit {
    public livro: any;
    public teste: any;
    public infoLivro: any;

    constructor(
      private livroService: LivroService, 
      private router: Router,
      private route: ActivatedRoute,
      private carrinhoService: CarrinhoService,
      private sessao: SessaoService,
    )
      { }   
      
  ngOnInit(): void {
    this.teste = this.route.queryParams
    console.log(this.teste._value.id);
    this.livroService.listar().subscribe(livro=>{
    this.livro = livro;
      for(let i = 0; i < this.livro.length; i++) {
        console.log((this.teste.value.id == this.livro[i].nome))
        if (this.teste._value.id == this.livro[i].nome) {
            this.infoLivro = this.livro[i]
            console.log(this.infoLivro);
            break
        } }
    }) 
  }  
  addToCart(nome: string): void{
    let cart = new Carrinho()
    cart.keyUser = this.sessao.getUsuario().email
    cart.keyLivro = nome
    cart.Quantidade = "1"
    this.carrinhoService.salvar(cart)
  } 
}
