import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent,ProjectCardComponent],
  imports: [SharedModule],
  exports: [ProjectComponent,ProjectCardComponent],
})
export class ProjectsModule {}
