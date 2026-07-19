import { CheckCircle2 } from "lucide-react";
import { stats, experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="04" title="Experience & Achievements" />

      <div className="grid gap-6 sm:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-surface-border bg-surface p-6 text-center"
          >
            <p className="font-mono text-4xl font-bold text-accent sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {experience.map((item) => (
          <div
            key={item.role}
            className="rounded-lg border border-surface-border bg-surface p-6"
          >
            <h3 className="text-lg font-semibold text-slate-100">
              {item.role}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {item.summary}
            </p>
            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
