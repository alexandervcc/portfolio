import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { Skill } from '../model/Skill';
import { db } from '../firebase/config';
import { DB_COLLECTION } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private skillsRef = collection(db, DB_COLLECTION.skills.toString());
  constructor() {}

  getAllSkills = async (): Promise<Skill[]> => {
    const querySnapshot = await getDocs(this.skillsRef);
    const data = querySnapshot.docs.map((e) => e.data() as Skill);
    return data;
  };
}
