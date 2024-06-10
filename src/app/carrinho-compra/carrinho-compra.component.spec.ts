import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCompraComponent } from './carrinho-compra.component';

describe('CarrinhoCompraComponent', () => {
  let component: CarrinhoCompraComponent;
  let fixture: ComponentFixture<CarrinhoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrinhoCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
