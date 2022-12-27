import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Skill';
import { init } from 'aos';
import { HttpServiceService } from 'src/app/services/http/http-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillList: Skill[] = [];

  constructor(private httpService: HttpServiceService) {}

  async ngOnInit(): Promise<void> {
    
    this.skillList = await this.httpService.getAllSkills();
    init();
  }
}
