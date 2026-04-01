import type { HeroSectionData } from '@/types/template';

type Props = { data: HeroSectionData };

export function HeroSection({ data }: Props) {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {data.headline}
        </h1>
        <p className="mt-6 text-xl text-zinc-300">{data.subheadline}</p>
        <a
          href={data.ctaHref}
          className="mt-10 inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  );
}
