import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { FloatingButtonComponent } from 'src/app/shared/components/floating-button/floating-button.component';
import { SharedModule } from 'src/app/shared.module';
import { ExperienceCardComponent } from './experience/experience-card/experience-card.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactFormInfoComponent } from './contact/contact-form/contact-form-info/contact-form-info.component';
import { SocialIconComponent } from 'src/app/shared/components/social-icon/social-icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormInputComponent } from './contact/contact-form/contact-form-input/contact-form-input.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillCardComponent,
    SkillsComponent,
    ContactComponent,
    MainComponent,
    FloatingButtonComponent,
    ExperienceCardComponent,
    ContactFormComponent,
    ContactFormInfoComponent,
    SocialIconComponent,
    ContactFormInputComponent,
  ],
  imports: [SharedModule, MatGridListModule, ReactiveFormsModule],
  exports: [
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillCardComponent,
    SkillsComponent,
    ContactComponent,
    MainComponent,
    FloatingButtonComponent,
  ],
})
export class HomeModule {}
