import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}

  async ngOnInit(): Promise<void> {
    const data = await this.httpService.getAllSkills();
    console.log('obtained data: ', data);
  }
}
