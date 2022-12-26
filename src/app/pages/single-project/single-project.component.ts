import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  projectId: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.projectId = paramMap.get('projectId') || 'all';
    });
  }
}
