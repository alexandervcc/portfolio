import { Injectable } from '@angular/core';
import { Project, ProjectTypeEnum } from 'src/app/model/Project';
import { Skill } from 'src/app/model/Skill';
import { WorkExperience } from 'src/app/model/WorkExperience';
import { HttpServiceService } from '../http/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private skillsList: Skill[] = [];
  private workExperienceList: WorkExperience[] = [];
  private projectsList: Project[] = [];

  constructor(private http: HttpServiceService) {}

  getAllSkills = async (): Promise<Skill[]> => {
    if (this.skillsList.length === 0) {
      this.skillsList = await this.http.getSkills();
    }
    return this.skillsList.slice();
  };

  getAllWorkExperiences = async (): Promise<WorkExperience[]> => {
    if (this.workExperienceList.length === 0) {
      const experiences = await this.http.getWorkExperiences();
      this.workExperienceList = experiences.sort(
        (exp1, exp2) => exp1.start.seconds - exp2.start.seconds
      );
    }
    return this.workExperienceList.slice();
  };

  getAllProjects = async (): Promise<Project[]> => {
    if (this.projectsList.length === 0) {
      this.projectsList = await this.http.getProjects();
    }
    return this.projectsList.slice();
  };

  getFilteredProjects = async (filterType: string) => {
    if (filterType === ProjectTypeEnum.all) {
      return this.getAllProjects();
    }
    return (await this.getAllProjects()).filter((p) => p.type === filterType);
  };

  getProjectById = async (projectId: string): Promise<Project | undefined> => {
    return (await this.getAllProjects()).find((p) => p.id === projectId);
  };
}
