import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacramentosComponent } from './sacramentos.component';

describe('SacramentosComponent', () => {
  let component: SacramentosComponent;
  let fixture: ComponentFixture<SacramentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacramentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SacramentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
