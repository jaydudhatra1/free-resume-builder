import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationInputComponent } from './education-input/education-input.component';
import { ExperienceInputComponent } from './experience-input/experience-input.component';
import { OtherInputComponent } from './other-input/other-input.component';
import { SkillsInputComponent } from './skills-input/skills-input.component';
import { UserProfileInputComponent } from './user-profile-input/user-profile-input.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { FilePondModule } from 'ngx-filepond';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    UserProfileInputComponent,
    ExperienceInputComponent,
    SkillsInputComponent,
    EducationInputComponent,
    OtherInputComponent,
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    FilePondModule,
    CKEditorModule
  ],
  exports: [
    UserProfileInputComponent,
    ExperienceInputComponent,
    SkillsInputComponent,
    EducationInputComponent,
    OtherInputComponent,
  ]
})
export class ResumeInputsModule { }
