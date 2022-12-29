export interface Project {
  id: string;
  description: string;
  details: string[];
  extra_img: string[];
  main_img: string;
  links: { [k: string]: string };
  name: string;
  technologies: string[];
  type: ProjectTypeEnum;
}

export enum ProjectTypeEnum {
  none = 'none',
  frontEnd = 'front',
  backEnd = 'back',
  fullstack = 'full',
  mobile = 'mobile',
  cloud = 'cloud',
}

export const ListProjectTypeEnum = Object.values(ProjectTypeEnum) as string[];
