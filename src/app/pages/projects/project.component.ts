import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  projectType: string = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectType = params['type'] || null;
    });
  }
}
