import { FormGroup } from "@angular/forms"

export type UserData = {
  profile: ProfileInfo;
  experience: ExperienceInfo[];
  skills: SkillsInfo;

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
  skillItems: CategorySkillItem[] | SkillItem[];
}

export type CategorySkillItem = {
  categoryName: string;
  skills: SkillItem[];
}

export type SkillItem = {
  skillName: string;
  rating: number;
  hasIcon: boolean;
  ratingLabel: string; // Excellent, Advance, intermidiate, beginner
}
