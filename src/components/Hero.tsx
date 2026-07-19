import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col justify-center px-6 py-28 sm:py-36"
    >
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
        {personal.fullName}
      </h1>
      <h2 className="mt-3 text-xl font-semibold text-slate-300 sm:text-2xl">
        {personal.title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {personal.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-cyan-300"
        >
          View Projects
        </a>
        <a
          href="/resume/resume.pdf"
          className="flex items-center gap-2 rounded-lg border border-surface-border px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent"
        >
          <FileDown size={16} aria-hidden="true" />
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-surface-border px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent"
        >
          Contact
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-slate-400 transition-colors hover:text-accent"
        >
          <Github size={22} aria-hidden="true" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-slate-400 transition-colors hover:text-accent"
        >
          <Linkedin size={22} aria-hidden="true" />
        </a>
        <a
          href={`mailto:${personal.email}`}
          aria-label="Send an email"
          className="text-slate-400 transition-colors hover:text-accent"
        >
          <Mail size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
