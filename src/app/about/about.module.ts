import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SocialInfoComponent } from './social-info/social-info.component';



@NgModule({
  declarations: [
    AboutComponent,
    SocialInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
