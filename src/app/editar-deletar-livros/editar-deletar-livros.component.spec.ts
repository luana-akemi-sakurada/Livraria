import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeletarLivrosComponent } from './editar-deletar-livros.component';

describe('EditarDeletarLivrosComponent', () => {
  let component: EditarDeletarLivrosComponent;
  let fixture: ComponentFixture<EditarDeletarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarDeletarLivrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarDeletarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
