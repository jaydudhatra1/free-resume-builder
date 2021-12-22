import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';
import { Faker } from 'src/app/utils/faker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile-input',
  templateUrl: './user-profile-input.component.html',
  styleUrls: ['./user-profile-input.component.scss']
})
export class UserProfileInputComponent implements OnInit {
  public profileInfo = this.resumeService.userData.profile;
  public form: FormGroup;
  public showAutoPopulate = environment.showAutoPopulate;

  constructor(
    private resumeService: ResumeInputsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: [
          this.profileInfo.firstName,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        lastName: [
          this.profileInfo.firstName,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        designation: [
          this.profileInfo.firstName,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        address: [
          this.profileInfo.firstName,
          [
            Validators.required,
            Validators.maxLength(4096)
          ]
        ],
        summary: [
          this.profileInfo.firstName,
          [
            Validators.required,
            Validators.maxLength(4096)
          ]
        ],
        email: [
          this.profileInfo.firstName,
          [
            Validators.required,
            Validators.email,
            Validators.maxLength(256)
          ]
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.maxLength(18)
          ]
        ],
        altPhone: [
          '',
          [
            Validators.maxLength(18)
          ]
        ],
      },
    );
  }

  saveInputs(): void {
    console.log(this.resumeService.userData);
  }

  autoPopulateInputs(): void {
    this.profileInfo.firstName = Faker.firstName;
    this.profileInfo.lastName = Faker.lastName;
    this.profileInfo.designation = Faker.designation;
    this.profileInfo.summary = Faker.jobDescription;
    this.profileInfo.address = Faker.address;
    this.profileInfo.phone = Faker.phone;
    this.profileInfo.altPhone = Faker.phone;
    this.profileInfo.email = Faker.email;
  }
}
