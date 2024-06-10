import { Component, OnInit } from '@angular/core';
import { LivroService } from '../criar-livro/service/livro.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrl: './listar-livros.component.css'
})
export class ListarLivrosComponent implements OnInit{
  
    router: any;
    constructor(private livroService: LivroService, private db: AngularFireDatabase){
  
    }
    public livros: any;
    public livro: any;
    public forms: any;
  
    ngOnInit(): void {
      
      this.livroService.listar().subscribe(livro=>{
        this.livros = livro;
        console.log(this.livros)
        this.forms = [];
        for(let li of livro){
          this.forms.push(
            new FormGroup({
              autor: new FormControl(li.autor),
              categoria: new FormControl(li.categoria),
              editora: new FormControl(li.editora),
              imagem: new FormControl(li.imagem),
              nome: new FormControl(li.nome),
              preco: new FormControl(li.preco),
              sinopse: new FormControl(li.sinopse),
              key: new FormControl(li.key),
              isEditing: new FormControl(false)
            })
          )
        }
        
        console.log(this.forms)
      })      
    }
  
    deletarLivro(key: string): void {
      this.db.list('livros').remove(key)
    }

    atualizarLivro(key: string, formLivro: FormGroup): void {
      formLivro.controls['isEditing'].setValue(!formLivro.controls['isEditing'].value)
      console.log(formLivro.controls['isEditing'].value)

      if(!formLivro.controls['isEditing'].value){
        formLivro.removeControl('isEditing')
        formLivro.removeControl('key')


        console.log(formLivro.controls)
        this.db.list('livros').update(key, formLivro.value);
        
        formLivro.addControl('isEditing' , new FormControl(false))
        formLivro.addControl('key' , new FormControl(key))
      }
      

    }
     
  }
  
