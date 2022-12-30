import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/Project';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent implements OnInit {
  projectId: string = 'all';
  project?: Project;
  message?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((paramMap) => {
      this.projectId = paramMap.get('projectId') || 'all';
    });

    if (this.projectId==='all') {
      this.router.navigate(['projects'])
    }

    this.project = await this.dataStorage.getProjectById(this.projectId);
    if (!this.project) {
      this.message = 'No project found for provided id.';
      return;
    }
  }
}
