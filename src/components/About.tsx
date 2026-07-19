import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-10 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <p className="text-base leading-relaxed text-slate-300">
            I&apos;m a Jira and SAP SuccessFactors developer focused on building
            reliable business systems and modern web applications. My Jira
            work includes configuring and deploying Jira Software and Jira
            Service Management projects, writing JQL, and automating workflows
            with Atlassian Automation and Google Apps Script. Alongside my SAP
            SuccessFactors work, I build full stack applications with React,
            Next.js, Node.js, and PostgreSQL.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            I care about shipping tools that actually reduce friction for the
            teams using them, whether that&apos;s a service desk workflow or
            a customer-facing app.
          </p>
        </div>

        <div className="sm:col-span-2">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-slate-400">
            <GraduationCap size={16} className="text-accent" aria-hidden="true" />
            Education
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li
                key={item.school}
                className="rounded-lg border border-surface-border bg-surface p-4"
              >
                <p className="text-sm font-semibold text-slate-100">
                  {item.school}
                </p>
                <p className="mt-1 text-sm text-muted">{item.credential}</p>
                {item.period && (
                  <p className="mt-1 font-mono text-xs text-slate-500">
                    {item.period}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
