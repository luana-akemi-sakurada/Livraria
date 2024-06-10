import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../criar-livro/service/livro.service';
import { ActivatedRoute } from '@angular/router';

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
      private route: ActivatedRoute) { }   
      
  ngOnInit(): void {
    this.teste = this.route.queryParams
    console.log(this.teste._value.id);
    this.livroService.listar().subscribe(livro=>{
    this.livro = livro;
      for(let i = 0; 1 < this.livro.length; i++) {
        console.log((this.teste.value.id == this.livro[i].nome))
        if (this.teste.value.id == this.livro[i].nome) {
            this.infoLivro = this.livro[i]
            console.log(this.infoLivro);
            break
        } }
    }) 
  }   
}
