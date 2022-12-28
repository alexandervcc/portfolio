import { Injectable } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { Skill } from 'src/app/model/Skill';
import { HttpServiceService } from '../http/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  listProjects: Project[] = [];
  listSkills: Skill[] = [];
  constructor(private http: HttpServiceService) {}

  getAllProjects = (): Project[] => {
    if (this.listProjects.length === 0) {
      //http call
    }
    return this.listProjects.slice();
  };
}
