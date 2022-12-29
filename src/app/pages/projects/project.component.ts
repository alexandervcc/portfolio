import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectTypeEnum } from 'src/app/model/Project';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectType?: string;
  listProjects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe((params) => {
      this.projectType = params['type'] || undefined;
    });
    console.log(ProjectTypeEnum,this.projectType)
    
    if (this.projectType && !(this.projectType in ProjectTypeEnum)) {
      console.log("xd")
      this.projectType = undefined;
    }
    this.listProjects = await this.dataStorage.getFilteredProjects(
      this.projectType
    );
    console.log('projects: ', this.listProjects.length);
  }
}
