import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceInfo } from 'src/app/helpers/types';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as moment from 'moment';
import { Faker } from 'src/app/utils/faker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience-input',
  templateUrl: './experience-input.component.html',
  styleUrls: ['./experience-input.component.scss']
})
export class ExperienceInputComponent implements OnInit {
  public experiences: ExperienceInfo[] = this.resumeService.userData.experience;
  public form: FormGroup;
  public Editor = ClassicEditor;
  public showAutoPopulate = environment.showAutoPopulate;

  constructor(
    private resumeService: ResumeInputsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.experiences = [
    //   {
    //     fromDate: "01/01/2020",
    //     isPresent: false,
    //     toDate: "02/02/2020",
    //     location: "unknown",
    //     organization: "Google",
    //     role: "Software Engg",
    //     rteContent: "<p><b>my experience desc</b></p>"
    //   },
    //   {
    //     fromDate: "01/01/2020",
    //     isPresent: false,
    //     toDate: "02/02/2020",
    //     location: "unknown",
    //     organization: "Simon",
    //     role: "Software Engg",
    //     rteContent: "<p><b>my experience desc</b></p>"
    //   },
    //   {
    //     fromDate: "01/01/2020",
    //     isPresent: false,
    //     toDate: "02/02/2020",
    //     location: "unknown",
    //     organization: "Facebook",
    //     role: "Software Engg",
    //     rteContent: "<p><b>my experience desc</b></p>"
    //   },
    //   {
    //     fromDate: "01/01/2020",
    //     isPresent: true,
    //     toDate: "02/02/2020",
    //     location: "unknown",
    //     organization: "Microsoft",
    //     role: "Software Engg",
    //     rteContent: "<p><b>my experience desc</b></p>"
    //   },
    // ]
  }

  public onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.experiences, event.previousIndex, event.currentIndex);
  }

  addNewItem() {
    const newExperienceItem = {
      fromDate: "",
      toDate: "",
      isPresent: false,
      location: "",
      organization: "",
      role: "",
      rteContent: "",
      isNewItem: true,
    };


    newExperienceItem["form"] = this.getExperienceForm(newExperienceItem);
    this.experiences.push(newExperienceItem);
  }

  deleteItem(experience: ExperienceInfo, index: number): void {
    // code to delete Item
    this.experiences.splice(index, 1);
  }

  editItem(experience: ExperienceInfo, index: number): void {
    this.experiences[index].isNewItem = true;
    this.experiences[index].form = this.getExperienceForm(this.experiences[index]);
  }

  saveItem(experience: ExperienceInfo, index: number): void {
    experience = {...experience.form.value};
    experience.fromDate = moment(experience.fromDate).toISOString();
    experience.isNewItem = false;
    this.experiences[index] = experience;
  }

  autoPopulateInputs(experienceItem: ExperienceInfo): void {
    experienceItem.form.reset();

    experienceItem.form.get('fromDate').patchValue(Faker.pastdate);

    // Radomly set present or any other end date
    Faker.randomBool ?
      experienceItem.form.get('toDate').patchValue(Faker.recentDate):
      experienceItem.form.get('isPresent').patchValue(Faker.recentDate);

    experienceItem.form.get('organization').patchValue(Faker.companyNameWithSuffix);
    experienceItem.form.get('location').patchValue(Faker.cityCountry);
    experienceItem.form.get('role').patchValue(Faker.designation);
    experienceItem.form.get('rteContent').patchValue(Faker.paragraphs);
  }

  private getExperienceForm(experienceItem): FormGroup {
    return this.formBuilder.group(
      {
        fromDate: [
          experienceItem.fromDate,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        toDate: [
          experienceItem.toDate,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        isPresent: [
          experienceItem.isPresent
        ],
        organization: [
          experienceItem.organization,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        location: [
          experienceItem.location,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        role: [
          experienceItem.role,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        rteContent: [
          experienceItem.rteContent
        ],
      },
    );
  }
}
