import type { ComponentType, CSSProperties } from "react";
import { CloudCog, Code2, Database } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import {
  SiAtlassian,
  SiCss,
  SiGoogleappsscript,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSap,
} from "react-icons/si";

type TechIconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
}>;

type TechVisual = {
  icon: TechIconComponent;
  color: string;
};

const TECH_VISUALS: Record<string, TechVisual> = {
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  Python: { icon: SiPython, color: "#4b8bbe" },
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#8b5cf6" },
  JQL: { icon: SiJira, color: "#2684ff" },
  PostgreSQL: { icon: SiPostgresql, color: "#669acb" },
  SQL: { icon: Database, color: "#22d3ee" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#f8fafc" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  AWS: { icon: FaAws, color: "#ff9900" },
  "Converge Cloud": { icon: CloudCog, color: "#22d3ee" },
  "SAP SuccessFactors": { icon: SiSap, color: "#0faaff" },
  "Jira Software": { icon: SiJira, color: "#2684ff" },
  "Jira Service Management": { icon: SiJira, color: "#2684ff" },
  "Atlassian Automation": { icon: SiAtlassian, color: "#1868db" },
  "Google Apps Script": { icon: SiGoogleappsscript, color: "#4285f4" },
};

const FALLBACK_VISUAL: TechVisual = {
  icon: Code2,
  color: "#22d3ee",
};

type TechBadgeProps = {
  name: string;
  compact?: boolean;
};

export default function TechBadge({ name, compact = false }: TechBadgeProps) {
  const visual = TECH_VISUALS[name] ?? FALLBACK_VISUAL;
  const Icon = visual.icon;

  return (
    <span
      className={`inline-flex max-w-full items-center rounded-md border border-surface-border bg-background font-mono text-slate-200 transition-colors duration-200 hover:border-accent/60 hover:text-white ${
        compact ? "gap-1.5 px-2 py-1 text-[11px]" : "gap-1.5 px-2.5 py-1 text-xs"
      }`}
    >
      <Icon
        aria-hidden={true}
        className={compact ? "h-3 w-3 shrink-0" : "h-3.5 w-3.5 shrink-0"}
        style={{ color: visual.color }}
      />
      <span className="min-w-0">{name}</span>
    </span>
  );
}
