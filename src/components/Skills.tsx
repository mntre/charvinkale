import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import TechBadge from "./TechBadge";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="02" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-surface-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
