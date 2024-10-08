export interface WorkExperience {
  position: string;
  company: string;
  location: string;
  start: { seconds: number } & Date;
  end?: { seconds: number } & Date;
  desc: string[];
}
