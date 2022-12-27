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

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private skillsList: Skill[] = [];
  private workExperienceList: WorkExperience[] = [];

  private skillsRef = collection(db, DB_COLLECTION.skills.toString());
  private experienceRef = collection(db, DB_COLLECTION.experience.toString());

  constructor(private http: HttpClient) {}

  getAllSkills = async (): Promise<Skill[]> => {
    if (this.skillsList.length === 0) {
      const querySnapshot = await getDocs(this.skillsRef);
      this.skillsList = querySnapshot.docs
        .map((e) => e.data() as Skill)
        .sort((s1, s2) => s1.order - s2.order);
    }
    return this.skillsList.slice();
  };

  getWorkExperience = async (): Promise<WorkExperience[]> => {
    if (this.workExperienceList.length === 0) {
      const querySnapshot = await getDocs(this.experienceRef);
      this.workExperienceList = querySnapshot.docs.map(
        (e) => e.data() as WorkExperience
      );
    }
    return this.workExperienceList.slice();
  };

  sendContactForm = (body: ContactForm) => {
    return this.http.post<ResContactDto>(
      environment.CONTACT_FORM_URL,
      body,
      { observe: 'response' }
    );
  };
}
