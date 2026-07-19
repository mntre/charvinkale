import Image from "next/image";
import { Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="05" title="Certificates" />

      {certificates.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-surface-border bg-surface p-10 text-center">
          <Award size={28} className="text-muted" aria-hidden="true" />
          <p className="text-sm text-muted">
            Certificates will appear here once added to{" "}
            <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs text-slate-300">
              public/certificates
            </code>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group overflow-hidden rounded-lg border border-surface-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent/50"
            >
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cert.title} certificate at full size`}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100"
              >
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate issued by ${cert.issuer}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-contain p-2 transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </a>
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-100">
                  {cert.title}
                </p>
                <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-1 font-mono text-xs text-slate-500">
                    {cert.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
