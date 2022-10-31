export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}

enum SkillLevel {
  beginner = 'beginner',
  proficient = 'proficient',
  expert = 'expert',
}
