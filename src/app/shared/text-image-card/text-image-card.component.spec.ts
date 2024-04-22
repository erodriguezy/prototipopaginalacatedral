import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageCardComponent } from './text-image-card.component';

describe('TextImageCardComponent', () => {
  let component: TextImageCardComponent;
  let fixture: ComponentFixture<TextImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
