import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { Skill } from '../model/Skill';
import { DB_COLLECTION } from '../constants/db_collections';
import { db } from '../firebase/config';
import { WorkExperience } from '../model/WorkExperience';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private skillsList: Skill[] = [];
  private workExperienceList: WorkExperience[] = [];

  private skillsRef = collection(db, DB_COLLECTION.skills.toString());
  private experienceRef = collection(db, DB_COLLECTION.experience.toString());

  constructor() {}

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
}
