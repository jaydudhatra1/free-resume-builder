import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceInputComponent } from './experience-input.component';

describe('ExperienceInputComponent', () => {
  let component: ExperienceInputComponent;
  let fixture: ComponentFixture<ExperienceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
