export type StatItem = {
  value: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: "22", label: "Jira Service Management projects deployed" },
  { value: "50+", label: "Jira Software projects deployed" },
];

export type ExperienceItem = {
  role: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Jira & SAP SuccessFactors Developer",
    summary:
      "Currently working across Jira and SAP SuccessFactors development, alongside full stack web application projects.",
    highlights: [
      "Deployed 22 Jira Service Management projects",
      "Deployed 50+ Jira Software projects",
      "Heavy use of JQL, Jira automation, and Google Apps Script for workflow tooling across the Atlassian suite",
    ],
  },
];
