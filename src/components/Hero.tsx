import Image from "next/image";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 sm:py-28 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-36"
    >
      <div className="min-w-0">
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
            download="Charvin-Kale-Penaverde-Resume.pdf"
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
      </div>

      <div className="relative mx-auto w-full max-w-64 sm:max-w-72 lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-[1.75rem] bg-accent/10 blur-2xl"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-accent/35 bg-surface shadow-2xl shadow-black/40">
          <Image
            src="/images/prof.png"
            alt="Portrait of Charvin Kale M. Peñaverde"
            fill
            preload
            sizes="(min-width: 1024px) 288px, (min-width: 640px) 288px, 256px"
            quality={88}
            className="object-cover object-[68%_center]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
