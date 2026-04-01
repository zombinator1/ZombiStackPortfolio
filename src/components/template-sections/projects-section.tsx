import type { ProjectsSectionData } from '@/types/template';

type Props = { data: ProjectsSectionData };

export function ProjectsSection({ data }: Props) {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
          {data.heading}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 h-32 rounded-lg bg-zinc-100" />
              <h3 className="font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
