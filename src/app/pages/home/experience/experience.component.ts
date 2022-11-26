import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/model/WorkExperience';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: WorkExperience[] = [];
  constructor(private httpService: HttpServiceService) {}

  async ngOnInit(): Promise<void> {
    this.experience = await this.httpService.getWorkExperience();
    console.log(this.experience.length);
  }
}
