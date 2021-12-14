import { Injectable } from '@angular/core';
import { UserData } from '../helpers/types';

@Injectable({
  providedIn: 'root'
})
export class ResumeInputsService {
  private userData: UserData;

  constructor() {
    this.userData = {} as any;
  }
}
