import { Component, Input } from '@angular/core';
import { Project, ProjectTypeEnum } from 'src/app/model/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input('project-item') project: Project = {
    description: '',
    details: [],
    extra_img: [],
    id: '',
    links: {},
    main_img: '',
    proj_image: '',
    name: '',
    technologies: [],
    type: ProjectTypeEnum.backEnd,
  };
}
