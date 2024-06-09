import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../criar-livro/service/livro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrl: './livro-detalhes.component.css'
})
export class LivroDetalhesComponent {
    public livro: any;
    constructor(
      private livroService: LivroService, 
      private router: Router) { }

    ngOnInit(): void {
      this.livroService.listar().subscribe(livro=>{
        console.log(livro);
        this.livro = livro;
      })
    }
    
}
