import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsWrapperComponent } from './inputs-wrapper.component';

describe('InputsWrapperComponent', () => {
  let component: InputsWrapperComponent;
  let fixture: ComponentFixture<InputsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
