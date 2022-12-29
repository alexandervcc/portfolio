import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  projectId: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.projectId = paramMap.get('projectId') || 'all';
    });
  }
}
