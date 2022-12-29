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
  frontEnd = 'Front-End',
  backEnd = 'Back-End',
  fullstack = 'Full-Stack',
  mobile = 'Mobile',
}
