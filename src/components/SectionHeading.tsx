type SectionHeadingProps = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">// {index}</span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
