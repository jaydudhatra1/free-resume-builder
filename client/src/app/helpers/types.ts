import { FormGroup } from "@angular/forms"

export type UserData = {
  profile: ProfileInfo;
  experience: ExperienceInfo[];
  skills: SkillsInfo;
  education: EducationInfo[];
}

export type ProfileInfo = {
  firstName: string;
  lastName: string;
  designation: string;
  address: string;
  email: string;
  summary: string;
  phone: string;
  altPhone: string;
  profilePic: string;
}

export type ExperienceInfo = {
  fromDate: string;
  isPresent: boolean;
  toDate?: string;
  role: string;
  organization: string;
  location: string;
  rteContent: string;
  isNewItem?: boolean;
  form?: FormGroup;
}

export type SkillsInfo = {
  isCategorywiseSkill: boolean;
  skillItems: SkillItem[];
}

export type CategorySkillItem = {
  categoryName: string;
  skills: SkillItem[];
}

export type SkillItem = {
  skillName: string;
  rating: number;
  hasIcon: boolean;
  isNewItem?: boolean;
  form?: FormGroup;
  // ratingLabel: string; // Excellent, Advance, intermidiate, beginner
}

export type EducationInfo = {
  degreeName: string;
  fromDate: string;
  toDate?: string;
  rteContent: string;
  location: string;
  isNewItem?: boolean;
  form?: FormGroup;
}