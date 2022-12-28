import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/model/WorkExperience';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: WorkExperience[] = [];
  constructor(private dataStorage: DataStorageService) {}

  async ngOnInit(): Promise<void> {
    this.experience = await this.dataStorage.getAllWorkExperiences();
  }
}
