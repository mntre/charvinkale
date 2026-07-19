import { ExternalLink, Github, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="03" title="Projects" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-lg border border-surface-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-100">
                {project.title}
              </h3>
              {project.isCaseStudy && (
                <span
                  title="Case study"
                  className="flex items-center gap-1 rounded-md border border-surface-border px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  <Layers size={12} aria-hidden="true" />
                  Case study
                </span>
              )}
            </div>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-surface-border bg-background px-2 py-1 font-mono text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-5 flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-cyan-300"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                  >
                    <Github size={14} aria-hidden="true" />
                    Repo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
