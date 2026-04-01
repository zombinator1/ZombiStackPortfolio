import type { ServicesSectionData } from '@/types/template';

type Props = { data: ServicesSectionData };

export function ServicesSection({ data }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
          {data.heading}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-100 bg-zinc-50 p-5"
            >
              <h3 className="mb-2 font-semibold text-zinc-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
