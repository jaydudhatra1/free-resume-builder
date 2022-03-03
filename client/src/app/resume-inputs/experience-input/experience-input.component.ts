import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceInfo } from 'src/app/helpers/types';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as moment from 'moment';

@Component({
  selector: 'app-experience-input',
  templateUrl: './experience-input.component.html',
  styleUrls: ['./experience-input.component.scss']
})
export class ExperienceInputComponent implements OnInit {
  public experiences: ExperienceInfo[] = this.resumeService.userData.experience;
  public form: FormGroup;
  public Editor = ClassicEditor;

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

    const form = this.formBuilder.group(
      {
        fromDate: [
          newExperienceItem.fromDate,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        toDate: [
          newExperienceItem.toDate,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        isPresent: [
          newExperienceItem.isPresent
        ],
        organization: [
          newExperienceItem.organization,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        location: [
          newExperienceItem.location,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        role: [
          newExperienceItem.role,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        rteContent: [
          newExperienceItem.rteContent
        ],
      },
    );
    newExperienceItem["form"] = form;
    this.experiences.push(newExperienceItem);
  }

  deleteItem(experience: ExperienceInfo): void {
    // code to delete Item
  }

  saveItem(experience: ExperienceInfo, index: number): void {
    experience = {...experience.form.value};
    experience.fromDate = moment(experience.fromDate).toISOString();
    experience.isNewItem = false;
    this.experiences[index] = experience;
  }
}
