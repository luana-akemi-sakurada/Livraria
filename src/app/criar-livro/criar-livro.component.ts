import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Livro } from './model/livro.model';
import { LivroService } from './service/livro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-livro',
  templateUrl: './criar-livro.component.html',
  styleUrl: './criar-livro.component.css'
})

export class CriarLivroComponent {

  formGroup = new FormGroup({
    nome: new FormControl('',
      [Validators.required]),
    autor: new FormControl('',
      [Validators.required]),
    editora: new FormControl('',
      [Validators.required]),
    sinopse: new FormControl('',
      [Validators.required]),
    categoria: new FormControl('',
      [Validators.required]),
    imagem: new FormControl('',
      [Validators.required]),
  });


  constructor(private livroService: LivroService, private router: ActivatedRoute) { }

  
  salvar(): void {
    console.log(this.formGroup.controls.nome.value);
    console.log(this.formGroup.controls.autor.value);
    console.log(this.formGroup.controls.editora.value);
    console.log(this.formGroup.controls.sinopse.value);
    console.log(this.formGroup.controls.categoria.value);
    

    console.log(this.formGroup.controls.imagem.value);

    var livro = new Livro();

    livro.nome = this.formGroup.controls.nome.value?.toString();
    livro.autor = this.formGroup.controls.autor.value?.toString();
    livro.editora = this.formGroup.controls.editora.value?.toString();
    livro.sinopse = this.formGroup.controls.sinopse.value?.toString();
    livro.categoria = this.formGroup.controls.categoria.value?.toString();
    livro.imagem = this.formGroup.controls.imagem.value?.toString();

    this.livroService.salvar(livro).then(() => {
      alert('Livro salvo com sucesso!');
    });
      
    }
}
