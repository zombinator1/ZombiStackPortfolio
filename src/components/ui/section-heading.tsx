type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <>
          <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-500">{subtitle}</p>
        </>
      )}
    </div>
  );
}
