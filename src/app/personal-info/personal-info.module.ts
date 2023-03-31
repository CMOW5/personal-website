import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';



@NgModule({
  declarations: [
    PersonalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalInfoComponent
  ]
})
export class PersonalInfoModule { }
