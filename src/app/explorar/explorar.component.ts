import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../criar-livro/service/livro.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessaoService } from '../Sessao/sessao.service';
import { Carrinho } from '../carrinho-compra/model/carrinho.model';
import { CarrinhoService } from '../carrinho-compra/service/carrinho.service';



@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})
export class ExplorarComponent implements OnInit {

  public livros: any;

  constructor(
    private livroService: LivroService, 
    private router: Router,
    private sessao: SessaoService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
      this.livroService.listar().subscribe(livros=>{
        console.log(livros);
        this.livros = livros;
      }); 
  }

  addToCart(nome: string): void{
    let cart = new Carrinho()
    cart.keyUser = this.sessao.getUsuario().email
    cart.keyLivro = nome
    cart.Quantidade = "1"
    this.carrinhoService.salvar(cart)
  }

}
