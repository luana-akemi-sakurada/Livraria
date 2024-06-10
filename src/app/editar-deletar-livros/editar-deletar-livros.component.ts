import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../criar-livro/service/livro.service';

@Component({
  selector: 'app-editar-deletar-livros',
  templateUrl: './editar-deletar-livros.component.html',
  styleUrl: './editar-deletar-livros.component.css'
})
export class EditarDeletarLivrosComponent implements OnInit{

  public livros: any;

  constructor(
    private livroService: LivroService, 
    private router: Router) { }

  ngOnInit(): void {
      this.livroService.listar().subscribe(livros=>{
        console.log(livros);
        this.livros = livros;
      }); 
  }
}
