import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
})
export class SkillCardComponent implements OnInit {
  @Input() skill?: Skill;
  constructor() {}

  ngOnInit(): void {
    console.log("s: ",this.skill?.name)
  }
}
