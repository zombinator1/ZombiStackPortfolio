import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const plans = [
  {
    name: 'Strona Wizytówka',
    price: 'od 1 500 zł',
    timeline: 'ok. 2 tygodnie',
    description:
      'Profesjonalna one-page dla firmy, która chce być widoczna w Google i zrobić dobre pierwsze wrażenie.',
    features: [
      'Indywidualny projekt graficzny',
      'Sekcje: usługi, o firmie, opinie, kontakt',
      'Responsywna na telefon i tablet',
      'Szybkie ładowanie i podstawowe SEO',
      'Formularz kontaktowy',
      '30 dni poprawek po wdrożeniu',
    ],
    accent: {
      glow: 'from-indigo-500/10 via-transparent to-transparent',
      orb: 'bg-indigo-300/16',
      line: 'via-indigo-400/60',
      badge: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
    },
    featured: false,
  },
  {
    name: 'Strona Firmowa',
    price: 'od 2 500 zł',
    timeline: 'ok. 3–4 tygodnie',
    description:
      'Rozbudowana strona z wieloma podstronami i systemem zarządzania treścią. Idealna dla firm, które chcą prezentować swoje nowe projekty.',
    features: [
      'Do 6 podstron (usługi, blog, cennik…)',
      'Panel CMS — edytujesz treści sam',
      'Indywidualny projekt graficzny',
      'Optymalizacja SEO on-page',
      'Integracja z Google Analytics',
      'Hosting i domena skonfigurowane',
      '30 dni poprawek po wdrożeniu',
    ],
    accent: {
      glow: 'from-sky-500/10 via-transparent to-transparent',
      orb: 'bg-sky-300/16',
      line: 'via-sky-400/60',
      badge: 'bg-sky-50 text-sky-700 ring-sky-200',
    },
    featured: true,
  },
  {
    name: 'Sklep Internetowy',
    price: 'od 6 000 zł',
    timeline: 'ok. 6–8 tygodni',
    description:
      'Kompletna platforma e-commerce gotowa do sprzedaży. Od projektu po integrację z płatnościami i kurierami.',
    features: [
      'Nieograniczona liczba produktów',
      'Integracja z Przelewy24 / Stripe',
      'Integracja z kurierami (InPost, DPD)',
      'Panel zarządzania zamówieniami',
      'Optymalizacja SEO dla sklepu',
      'Szkolenie z obsługi panelu',
      '30 dni poprawek po wdrożeniu',
    ],
    accent: {
      glow: 'from-violet-500/10 via-transparent to-transparent',
      orb: 'bg-violet-300/16',
      line: 'via-violet-400/60',
      badge: 'bg-violet-50 text-violet-700 ring-violet-200',
    },
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="cennik"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-24 sm:py-28"
    >
      {/* Subtle top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Ambient blobs */}
      <div className="absolute left-[-80px] top-[60px] h-[260px] w-[260px] rounded-full bg-indigo-200/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[40px] h-[240px] w-[240px] rounded-full bg-sky-200/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Przejrzyste ceny, bez niespodzianek"
            subtitle="Każdy projekt wyceniam indywidualnie po bezpłatnej konsultacji. Poniżej znajdziesz orientacyjne widełki, żebyś wiedział czego się spodziewać."
          />

          {/* Portfolio offer callout */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-r from-indigo-50 via-white to-sky-50 p-6 shadow-sm">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-indigo-700">
                  Oferta dla pierwszych klientów
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  Strona bez opłaty za pracę — płacisz tylko za domenę i hosting
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-500">
                  Buduję portfolio, dlatego pierwsze <span className="font-semibold text-zinc-700">3 strony</span> tworzę bez wynagrodzenia.
                  Płacisz wyłącznie za domenę i hosting — łącznie ok.{' '}
                  <span className="font-semibold text-zinc-700">250 zł/rok</span>.
                  W zamian proszę o możliwość umieszczenia projektu w portfolio i krótką opinię.
                </p>
              </div>
              <a
                href="/#kontakt"
                className="shrink-0 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
              >
                Bądź pierwszym klientem
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white/95 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] ring-1 ring-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(15,23,42,0.10)] ${
                  plan.featured
                    ? 'border-zinc-300/80 shadow-[0_20px_80px_rgba(15,23,42,0.10)]'
                    : 'border-zinc-200/80'
                }`}
              >
                {/* Glow overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.accent.glow} opacity-90`}
                />
                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${plan.accent.line} to-transparent`}
                />
                {/* Orb */}
                <div
                  className={`absolute right-0 top-0 h-28 w-28 rounded-full ${plan.accent.orb} blur-3xl transition duration-500 group-hover:scale-110`}
                />
                {/* Inner gradient */}
                <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/40" />

                {/* Content */}
                <div className="relative">
                  {/* Popular badge */}
                  {/* {plan.featured && (
                    <span className="mb-4 inline-block rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                      Najpopularniejszy
                    </span>
                  )} */}

                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {plan.name}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Czas realizacji: {plan.timeline}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-zinc-100" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white">
                          ✓
                        </span>
                        <span className="text-sm leading-snug text-zinc-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/#kontakt"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                        : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                    }`}
                  >
                    Zapytaj o wycenę
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-10 text-center text-sm text-zinc-400">
            Potrzebujesz czegoś innego?{' '}
            <a href="/#kontakt" className="font-medium text-zinc-700 underline underline-offset-2 hover:text-zinc-900">
              Napisz do mnie
            </a>{' '}
            — każdy projekt wyceniam indywidualnie.
          </p>
        </div>
      </Container>
    </section>
  );
}
