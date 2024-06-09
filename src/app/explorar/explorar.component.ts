import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../criar-livro/service/livro.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessaoService } from '../Sessao/sessao.service';



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
    private service: SessaoService ) { }

  ngOnInit(): void {
      this.livroService.listar().subscribe(livros=>{
        console.log(livros);
        this.livros = livros;
      }); 
  }

}
