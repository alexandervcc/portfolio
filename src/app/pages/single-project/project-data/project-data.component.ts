import { Component, Input } from '@angular/core';
import { Project } from 'src/app/model/Project';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css'],
})
export class ProjectDataComponent {
  @Input('project') project?: Project;
}
