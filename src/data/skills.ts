export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "HTML", "CSS", "JQL"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js"],
  },
  {
    category: "Cloud & Platforms",
    skills: [
      "AWS",
      "Converge Cloud",
      "SAP SuccessFactors",
      "Jira Software",
      "Jira Service Management",
      "Google Apps Script",
    ],
  },
];
