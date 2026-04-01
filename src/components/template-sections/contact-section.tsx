import type { ContactSectionData } from '@/types/template';

type Props = { data: ContactSectionData };

export function ContactSection({ data }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-10 text-3xl font-bold text-zinc-900">{data.heading}</h2>
        <div className="flex flex-col items-center gap-4">
          {data.phone && (
            <a
              href={`tel:${data.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-lg font-semibold text-zinc-900 hover:text-zinc-600"
            >
              <span>📞</span> {data.phone}
            </a>
          )}
          {data.email && (
            <a
              href={`mailto:${data.email}`}
              className="text-zinc-500 hover:text-zinc-700"
            >
              {data.email}
            </a>
          )}
          {data.address && (
            <p className="text-zinc-500">{data.address}</p>
          )}
        </div>
        <div className="mx-auto mt-12 max-w-md rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-left">
          <p className="mb-4 text-sm font-medium text-zinc-700">Wyślij wiadomość</p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-zinc-400"
            />
            <input
              type="tel"
              placeholder="Telefon"
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-zinc-400"
            />
            <textarea
              rows={3}
              placeholder="Opisz problem lub zakres pracy..."
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-zinc-400"
            />
            <button className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white hover:bg-zinc-700">
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
