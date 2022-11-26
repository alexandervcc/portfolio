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
  ],
  imports: [SharedModule],
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
