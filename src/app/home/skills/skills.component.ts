import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/model/Skill';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  private skillList: Skill[] = [];

  constructor(private httpService: HttpServiceService) {}

  async ngOnInit(): Promise<void> {
    this.skillList = await this.httpService.getAllSkills();
    console.log('list skills: ', this.skillList);
  }
}
