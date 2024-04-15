import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdiminComponent } from './dashboard-adimin.component';

describe('DashboardAdiminComponent', () => {
  let component: DashboardAdiminComponent;
  let fixture: ComponentFixture<DashboardAdiminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdiminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdiminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
