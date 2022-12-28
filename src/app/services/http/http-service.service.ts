import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Skill } from 'src/app/model/Skill';
import { WorkExperience } from 'src/app/model/WorkExperience';
import { db } from 'src/app/firebase/config';
import { DB_COLLECTION } from 'src/app/constants/db_collections';
import { ContactForm } from 'src/app/model/ContactForm';
import { ResContactDto } from 'src/app/model/ResContactDto';
import { Project } from 'src/app/model/Project';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private skillsRef = collection(db, DB_COLLECTION.skills.toString());
  private experienceRef = collection(db, DB_COLLECTION.experience.toString());
  private projectsRef = collection(db, DB_COLLECTION.projects.toString());

  constructor(private http: HttpClient) {}

  getSkills = async (): Promise<Skill[]> => {
    const querySnapshot = await getDocs(this.skillsRef);
    return querySnapshot.docs
      .map((e) => e.data() as Skill)
      .sort((s1, s2) => s1.order - s2.order);
  };

  getWorkExperiences = async (): Promise<WorkExperience[]> => {
    const querySnapshot = await getDocs(this.experienceRef);
    return querySnapshot.docs.map((e) => e.data() as WorkExperience);
  };

  getProjects = async (): Promise<Project[]> => {
    const querySnapshot = await getDocs(this.projectsRef);
    return querySnapshot.docs.map((d) => d.data() as Project);
  };

  sendContactForm = (body: ContactForm) => {
    return this.http.post<ResContactDto>(environment.CONTACT_FORM_URL, body, {
      observe: 'response',
    });
  };
}
