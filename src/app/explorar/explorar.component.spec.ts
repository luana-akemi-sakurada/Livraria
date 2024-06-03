import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarComponent } from './explorar.component';

describe('ExplorarComponent', () => {
  let component: ExplorarComponent;
  let fixture: ComponentFixture<ExplorarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
