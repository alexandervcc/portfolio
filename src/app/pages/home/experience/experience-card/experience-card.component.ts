import { Component, Input } from '@angular/core';
import { WorkExperience } from 'src/app/model/WorkExperience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
})
export class ExperienceCardComponent {
  @Input('exp') workExperienceItem!: WorkExperience;
  @Input('index') index: number = -1;

  constructor() {}
}
