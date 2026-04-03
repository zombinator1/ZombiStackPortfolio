type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-zinc-500 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
