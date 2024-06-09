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
    public teste: any = {
      "closed": false,
      "currentObservers": null,
      "observers": [],
      "isStopped": false,
      "hasError": false,
      "thrownError": null,
      "_value": {
          "id": "Harry Poter e a Pedra Filosofal"
      }
  };

    constructor(
      private livroService: LivroService, 
      private router: Router,
      private route: ActivatedRoute) { }
      
      

    ngOnInit(): void {
      this.teste = this.route.queryParams
      
      console.log(this.teste._value.id);
      this.livroService.listar().subscribe(livro=>{
        console.log(livro);
        this.livro = livro;
      })
    }
    
}
