import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ExperienceInfo } from 'src/app/helpers/types';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';

@Component({
  selector: 'app-experience-input',
  templateUrl: './experience-input.component.html',
  styleUrls: ['./experience-input.component.scss']
})
export class ExperienceInputComponent implements OnInit {
  public experiences: ExperienceInfo[] = this.resumeService.userData.experience;
  public form: FormGroup;

  constructor(
    private resumeService: ResumeInputsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.experiences = [
      {
        fromDate: "01/01/2020",
        isPresent: false,
        toDate: "02/02/2020",
        location: "unknown",
        organization: "Google",
        role: "Software Engg",
        rteContent: "<p><b>my experience desc</b></p>"
      },
      {
        fromDate: "01/01/2020",
        isPresent: false,
        toDate: "02/02/2020",
        location: "unknown",
        organization: "Simon",
        role: "Software Engg",
        rteContent: "<p><b>my experience desc</b></p>"
      },
      {
        fromDate: "01/01/2020",
        isPresent: false,
        toDate: "02/02/2020",
        location: "unknown",
        organization: "Facebook",
        role: "Software Engg",
        rteContent: "<p><b>my experience desc</b></p>"
      },
      {
        fromDate: "01/01/2020",
        isPresent: true,
        toDate: "02/02/2020",
        location: "unknown",
        organization: "Microsoft",
        role: "Software Engg",
        rteContent: "<p><b>my experience desc</b></p>"
      },
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.experiences, event.previousIndex, event.currentIndex);
  }

  addNewItem() {
    this.experiences.push({
      fromDate: "",
      toDate: "",
      isPresent: false,
      location: "",
      organization: "",
      role: "",
      rteContent: "",
      isNewItem: true,
    });
  }

  deleteItem(experience: ExperienceInfo): void {
    // code to delete Item
  }

  saveItem(experience: ExperienceInfo): void {
    experience.isNewItem = false;
  }
}
