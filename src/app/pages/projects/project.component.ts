import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { ListProjectTypeEnum, Project } from 'src/app/model/Project';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, OnDestroy {
  projectType: string = 'all';
  filterType?: string;
  listProjects: Project[] = [];
  routerSubscription?: Subscription;
  invalidType: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataStorage: DataStorageService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.scrollToTop();

    this.routerSubscription = this.route.queryParams.subscribe(
      async (params) => {
        this.projectType = params['type'] || 'all';

        this.filterType = !ListProjectTypeEnum.includes(this.projectType)
          ? undefined
          : this.projectType;

        this.invalidType = !ListProjectTypeEnum.includes(this.projectType);

        this.listProjects = await this.dataStorage.getFilteredProjects(
          this.filterType
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  private scrollToTop = () => {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  };
}
