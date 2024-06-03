import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLivroComponent } from './criar-livro.component';

describe('CriarLivroComponent', () => {
  let component: CriarLivroComponent;
  let fixture: ComponentFixture<CriarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
