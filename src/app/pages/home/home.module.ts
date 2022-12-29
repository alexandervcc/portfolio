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

import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactFormInfoComponent } from './contact/contact-form/contact-form-info/contact-form-info.component';
import { SocialIconComponent } from 'src/app/shared/components/social-icon/social-icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormInputComponent } from './contact/contact-form/contact-form-input/contact-form-input.component';
import { ProjectsCarrouselComponent } from './projects/carousel/projects-carrousel.component';
import { IndicatorsComponent } from './projects/carousel/indicators/indicators.component';
import { CarouselItemComponent } from './projects/carousel/carousel-item/carousel-item.component';
import { CarouselButtonsComponent } from './projects/carousel/carousel-buttons/carousel-buttons.component';
import { RouterModule } from '@angular/router';

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
    ProjectsCarrouselComponent,
    IndicatorsComponent,
    CarouselItemComponent,
    CarouselButtonsComponent
  ],
  imports: [SharedModule, ReactiveFormsModule,RouterModule],
  exports: [
    HomeComponent,
    FloatingButtonComponent,
  ],
})
export class HomeModule {}
