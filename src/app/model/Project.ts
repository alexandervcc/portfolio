import { DropdownItem } from './DropdownItem';

export interface Project {
  id: string;
  description: string;
  details: string[];
  extra_img: string[];
  main_img: string;
  proj_image: string;
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
  all = 'all',
}

export const ListProjectTypeEnum = Object.values(ProjectTypeEnum) as string[];

export const ProjectsDropdownFilter: DropdownItem[] = [
  {
    label: ProjectTypeEnum.all,
    value: ProjectTypeEnum.all,
  },
  {
    label: ProjectTypeEnum.frontEnd,
    value: ProjectTypeEnum.frontEnd,
  },
  {
    label: ProjectTypeEnum.backEnd,
    value: ProjectTypeEnum.backEnd,
  },
  {
    label: ProjectTypeEnum.fullstack,
    value: ProjectTypeEnum.fullstack,
  },
  {
    label: ProjectTypeEnum.mobile,
    value: ProjectTypeEnum.mobile,
  },
  {
    label: ProjectTypeEnum.cloud,
    value: ProjectTypeEnum.cloud,
  },
];
