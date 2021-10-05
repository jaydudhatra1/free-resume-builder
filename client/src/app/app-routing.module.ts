import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './resume-inputs/home/home.component';

// TODO: Make separate modules and use lazy loading

/// -----------------------------------------------
// Modules
/// -----------------------------------------------
// 1. Core
// 2. Preview
// 3. Template/Theming
// 4. Tutorial
// 5. ResumeInputs
// 6. Shared

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
