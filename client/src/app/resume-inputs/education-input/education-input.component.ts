import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducationInfo } from 'src/app/helpers/types';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';
import { Faker } from 'src/app/utils/faker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education-input',
  templateUrl: './education-input.component.html',
  styleUrls: ['./education-input.component.scss']
})
export class EducationInputComponent implements OnInit {

  public educationItems = this.resumeService.userData.education;
  public form: FormGroup;
  public showAutoPopulate = environment.showAutoPopulate;

  constructor(
    private resumeService: ResumeInputsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewItem() {
    const newEducationItem = {
      degreeName: "",
      fromDate: "",
      toDate: "",
      location: "",
      rteContent: "",
      isNewItem: true
    } as EducationInfo;

    newEducationItem.form = this.getEducationForm(newEducationItem);
    this.educationItems.push(newEducationItem);
  }

  editItem(education, index) {
    this.educationItems[index].isNewItem = true;
    this.educationItems[index].form = this.getEducationForm(this.educationItems[index]);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.educationItems, event.previousIndex, event.currentIndex);
  }

  deleteItem(education, index) {
    this.educationItems.splice(index, 1);
  }

  saveItem(education: EducationInfo, index: number): void {
    if(education.form.valid) {
      education = {...education.form.value};
      education.isNewItem = false;
      this.educationItems[index] = education;
    } else {
      education.form.markAllAsTouched();
    }
  }

  autoPopulateInputs(education: EducationInfo): void {
    education.form.reset();

    education.form.get('degreeName').patchValue(Faker.education);
    education.form.get('fromDate').patchValue(Faker.pastdate);
    education.form.get('toDate').patchValue(Faker.recentDate);
    education.form.get('location').patchValue(Faker.cityCountry);
    education.form.get('rteContent').patchValue(Faker.paragraphs);
  }

  private getEducationForm(education: EducationInfo): FormGroup {
    return this.formBuilder.group(
      {
        degreeName: [
          education.degreeName,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        fromDate: [
          education.fromDate,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        toDate: [
          education.toDate,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        location: [
          education.location,
          [
            Validators.maxLength(256)
          ]
        ],
        rteContent: [
          education.rteContent
        ],
      },
    );

  }
}
