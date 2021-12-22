import { Injectable } from '@angular/core';
import { UserData } from '../helpers/types';

@Injectable({
  providedIn: 'root'
})
export class ResumeInputsService {
  public userData: UserData;

  constructor() {
    this.userData = {
      profile: {} as any,
      experience: {} as any,
      skills: {} as any
    };
  }
}
