import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const groups = [
  {
    title: 'Gotowa strona, która działa',
    items: [
      'Strona dopasowana do Twojej firmy i oferty',
      'Działa płynnie na telefonie i komputerze',
      'Szybkie ładowanie (klient nie ucieka po 2 sekundach)',
      'Czytelna prezentacja usług + jasny kontakt',
    ],
  },
  {
    title: 'Wszystko ogarnięte za Ciebie',
    items: [
      'Hosting i domena skonfigurowane od A do Z',
      'Certyfikat bezpieczeństwa (https)',
      'Formularz kontaktowy gotowy do użycia',
      'Podstawowe SEO (żeby można było Cię znaleźć w Google)',
    ],
  },
  {
    title: 'Bezpieczny start i brak stresu',
    items: [
      '30 dni darmowych poprawek po wdrożeniu',
      'Pomoc w przygotowaniu treści (nie zostajesz z tym sam)',
      'Strona gotowa do dalszej rozbudowy',
      'Pełna kontrola — strona należy do Ciebie',
    ],
  },
];

export function PremiumOfferIncludes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50/70 via-white to-white py-24 sm:py-28">
      <BackgroundDecor />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Nasza oferta — tworzenie stron WWW"
            subtitle="Wszystko czego potrzebujesz."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {groups.map((group, index) => (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_100px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-100/40 blur-3xl transition duration-500 group-hover:bg-indigo-100/60" />

                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-700">
                      0{index + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent" />
                  </div>

                  <h3 className="max-w-xs text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                    {group.title}
                  </h3>

                  <ul className="mt-8 space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-900 text-[11px] font-bold text-white shadow-sm">
                          ✓
                        </span>

                        <span className="text-sm leading-7 text-zinc-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute left-[-80px] top-[80px] h-[220px] w-[220px] rounded-full bg-violet-100/30 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[40px] h-[240px] w-[240px] rounded-full bg-sky-100/30 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
    </>
  );
}