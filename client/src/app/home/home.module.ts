import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { ResumeInputsModule } from '../resume-inputs/resume-inputs.module';
import { InputsWrapperComponent } from './inputs-wrapper/inputs-wrapper.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    InputsWrapperComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatStepperModule,
    ResumeInputsModule
  ]
})
export class HomeModule { }
