import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectDataComponent } from './project-data/project-data.component';
import { SingleProjectComponent } from './single-project.component';

@NgModule({
  declarations: [ ProjectDataComponent,SingleProjectComponent],
  imports: [SharedModule, RouterModule],
  exports: [],
})
export class SingleProjectModule {}
