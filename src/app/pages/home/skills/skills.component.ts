import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Skill';
import { init } from 'aos';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillList: Skill[] = [];

  constructor(private dataStorage: DataStorageService) {}

  async ngOnInit(): Promise<void> {
    this.skillList = await this.dataStorage.getAllSkills();
    init();
  }
}
