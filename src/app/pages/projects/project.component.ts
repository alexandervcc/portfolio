import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ListProjectTypeEnum, Project } from 'src/app/model/Project';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, OnDestroy {
  projectType?: string;
  filterType?: string;
  listProjects?: Project[];

  constructor(
    private route: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe((params) => {
      this.projectType = params['type'] || undefined;
    });

    this.filterType =
      this.projectType && !ListProjectTypeEnum.includes(this.projectType)
        ? undefined
        : this.projectType;
    console.log(this.filterType);
    this.listProjects = await this.dataStorage.getFilteredProjects(
      this.filterType
    );

    console.log("len: ",this.listProjects.length)
  }

  ngOnDestroy(): void {}
}
