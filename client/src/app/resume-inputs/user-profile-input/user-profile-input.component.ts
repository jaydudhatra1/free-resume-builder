import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilePondComponent } from 'ngx-filepond/filepond.component';
import { registerPlugin } from 'ngx-filepond';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';
import { Faker } from 'src/app/utils/faker';
import { environment } from 'src/environments/environment';
import * as FilePondPluginImagePreview from 'filepond-plugin-image-preview';

@Component({
  selector: 'app-user-profile-input',
  templateUrl: './user-profile-input.component.html',
  styleUrls: ['./user-profile-input.component.scss']
})
export class UserProfileInputComponent implements OnInit {
  public profileInfo = this.resumeService.userData.profile;
  public form: FormGroup;
  public showAutoPopulate = environment.showAutoPopulate;
  @ViewChild('myPond') myPond: FilePondComponent
  public pondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here',
    allowImagePreview: true,
    imagePreviewMaxFileSize: '2MB',
    acceptedFileTypes: 'image/jpeg, image/png',
  };
  public pondFiles: any["files"] = []

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
    registerPlugin(FilePondPluginImagePreview);
  }

  saveInputs(): void {
    // console.log(this.resumeService.userData);
  }

  autoPopulateInputs(): void {
    this.form.get('firstName').setValue(Faker.firstName);
    this.form.get('lastName').setValue(Faker.lastName);
    this.form.get('designation').setValue(Faker.designation);
    this.form.get('summary').setValue(Faker.jobDescription);
    this.form.get('address').setValue(Faker.address);
    this.form.get('phone').setValue(Faker.phone);
    this.form.get('altPhone').setValue(Faker.phone);
    this.form.get('email').setValue(Faker.email);
  }

  pondHandleInit() {
    // console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log('A file was added', event);
  }

  pondHandleActivateFile(event: any) {
    // console.log('A file was activated', event)
  }
}
