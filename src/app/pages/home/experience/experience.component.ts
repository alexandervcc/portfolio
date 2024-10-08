import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/model/WorkExperience';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: WorkExperience[] = [];
  constructor(private dataStorage: DataStorageService) {}

  async ngOnInit(): Promise<void> {
    this.experiences = await this.dataStorage.getAllWorkExperiences();
  }
}
