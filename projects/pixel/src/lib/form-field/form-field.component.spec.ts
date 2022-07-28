import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelFormFieldComponent } from './form-field.component';

describe('PixelFormFieldComponent', () => {
  let component: PixelFormFieldComponent;
  let fixture: ComponentFixture<PixelFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
