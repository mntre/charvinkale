export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Case studies (e.g. Jira admin work) aren't single repos — render without links. */
  isCaseStudy?: boolean;
};

export const projects: Project[] = [
  {
    title: "CV Screener",
    description:
      "An application that screens and parses CVs (resumes) to help evaluate candidates automatically.",
    tech: ["Next.js", "React", "Node.js"],
    liveUrl: undefined, // TODO: add Vercel URL
    repoUrl: undefined, // TODO: add GitHub repo URL
  },
  {
    title: "Own Your Career",
    description:
      "An organization-wide OKR grading platform used to manage and assess employee objectives and key results, deployed on Converge Cloud.",
    tech: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Converge Cloud"],
  },
  {
    title: "Jira Service Management Projects",
    description:
      "Configured and deployed 22 JSM projects for internal and client service desk workflows, including request types, SLAs, automation rules, and permission schemes.",
    tech: ["Jira Service Management", "JQL", "Atlassian Automation", "Google Apps Script"],
    isCaseStudy: true,
  },
  {
    title: "Jira Software Projects",
    description:
      "Set up and maintained 50+ Jira Software projects covering agile boards, workflows, custom fields, and reporting for software teams.",
    tech: ["Jira Software", "JQL", "Atlassian Automation"],
    isCaseStudy: true,
  },
];
