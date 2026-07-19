import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { personal } from "@/data/personal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="06" title="Contact" />

      <div className="rounded-lg border border-surface-border bg-surface p-8 text-center sm:p-12">
        <h3 className="text-2xl font-bold text-slate-100">
          Let&apos;s work together
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
          I&apos;m open to opportunities in Jira, SAP SuccessFactors, and full
          stack development. Feel free to reach out if you&apos;d like to connect.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-cyan-300"
          >
            <Mail size={16} aria-hidden="true" />
            {personal.email}
          </a>
          <a
            href="/resume/resume.pdf"
            download="Charvin-Kale-Penaverde-Resume.pdf"
            className="flex items-center gap-2 rounded-lg border border-surface-border px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent"
          >
            <FileDown size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </div>
      </div>

      <footer className="mt-10 text-center font-mono text-xs text-slate-500">
        &copy; {year} {personal.fullName}. All rights reserved.
      </footer>
    </section>
  );
}
