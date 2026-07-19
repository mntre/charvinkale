export type Certificate = {
  title: string;
  issuer: string;
  /** Path relative to /public, e.g. "/certificates/aws-cert.png" */
  image: string;
  date: string;
};

export const certificates: Certificate[] = [
  {
    title: "Atlassian IT Service Management (ITSM) Professional Certificate",
    issuer: "LinkedIn Learning + Atlassian",
    image: "/certificates/cert1.jpg",
    date: "July 29, 2025",
  },
  {
    title:
      "Complete Guide to Jira Administration: Configuration, Management, and Automation",
    issuer: "LinkedIn Learning",
    image: "/certificates/cert2.jpg",
    date: "July 25, 2025",
  },
  {
    title: "Atlassian Credentialed in Forge Fundamentals",
    issuer: "Atlassian",
    image: "/certificates/cert3.jpg",
    date: "March 11, 2026",
  },
  {
    title: "Atlassian Credentialed in Rovo Fundamentals",
    issuer: "Atlassian",
    image: "/certificates/cert4.jpg",
    date: "March 13, 2026",
  },
  {
    title: "Atlassian Credentialed in Loom Fundamentals",
    issuer: "Atlassian",
    image: "/certificates/cert5.jpg",
    date: "March 18, 2026",
  },
  {
    title: "Agile Foundations",
    issuer: "LinkedIn Learning",
    image: "/certificates/cert6.jpg",
    date: "March 10, 2026",
  },
  {
    title: "Atlassian Agile Project Management Professional Certificate",
    issuer: "LinkedIn Learning + Atlassian",
    image: "/certificates/cert7.jpg",
    date: "March 26, 2026",
  },
];
