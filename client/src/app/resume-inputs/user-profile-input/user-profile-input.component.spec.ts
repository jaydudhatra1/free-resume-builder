import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileInputComponent } from './user-profile-input.component';

describe('UserProfileInputComponent', () => {
  let component: UserProfileInputComponent;
  let fixture: ComponentFixture<UserProfileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
