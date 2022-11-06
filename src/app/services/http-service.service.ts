import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { Skill } from '../model/Skill';
import { db } from '../firebase/config';
import { DB_COLLECTION } from '../constants/db_collections';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private skillsList: Skill[] = [];

  private skillsRef = collection(db, DB_COLLECTION.skills.toString());
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
}
