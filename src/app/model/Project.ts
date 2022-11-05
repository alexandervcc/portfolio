export interface Project {
  id: number;
  name: string;
  desc: string;
  type: ProjectType;
}

enum ProjectType {
  frontEnd = 'Front-End',
  backEnd = 'Back-End',
  fullstack = 'Full-Stack',
  mobile = 'Mobile',
}
