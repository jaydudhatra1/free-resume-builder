import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceInfo, SkillItem, SkillsInfo } from 'src/app/helpers/types';
import { ResumeInputsService } from 'src/app/services/resume-inputs.service';
import { Faker } from 'src/app/utils/faker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills-input',
  templateUrl: './skills-input.component.html',
  styleUrls: ['./skills-input.component.scss']
})
export class SkillsInputComponent implements OnInit {

  public skillsParent = this.resumeService.userData.skills;
  public form: FormGroup;
  public showAutoPopulate = environment.showAutoPopulate;

  constructor(
    private resumeService: ResumeInputsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(!this.skills.length) {
      this.addNewItem();
    }
  }

  public get skills(): SkillItem[] {
    return this.skillsParent.skillItems;
  }

  public set skills(skills) {
    this.skillsParent.skillItems = skills;
  }

  addNewItem() {
    const newSkillItem = {
      hasIcon: false,
      skillName: "Communication",
      rating: 7,
      isNewItem: true
    } as SkillItem;

    newSkillItem.form = this.getSkillForm(newSkillItem);
    this.skills.push(newSkillItem);
  }

  editItem(skill, index) {
    this.skills[index].isNewItem = true;
    this.skills[index].form = this.getSkillForm(this.skills[index]);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }

  deleteItem(skill, index) {
    this.skills.splice(index, 1);
  }

  saveItem(skill: SkillItem, index: number): void {
    if(skill.form.valid) {
      skill = {...skill.form.value};
      skill.isNewItem = false;
      this.skills[index] = skill;
    } else {
      skill.form.markAllAsTouched();
    }
  }

  autoPopulateInputs(skill: SkillItem): void {
    skill.form.reset();

    skill.form.get('skillName').patchValue(Faker.skill);
    skill.form.get('rating').patchValue(Faker.randomNumber);
  }

  private getSkillForm(skillItem): FormGroup {
    return this.formBuilder.group(
      {
        skillName: [
          skillItem.skillName,
          [
            Validators.required,
            Validators.maxLength(256)
          ]
        ],
        rating: [
          skillItem.rating,
          [
            Validators.required
          ]
        ],
        hasIcon: [
          skillItem.hasIcon
        ]
      }
    );
  }
}
