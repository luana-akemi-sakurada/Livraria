import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeContatoComponent } from './pagina-de-contato.component';

describe('PaginaDeContatoComponent', () => {
  let component: PaginaDeContatoComponent;
  let fixture: ComponentFixture<PaginaDeContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaDeContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaDeContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
