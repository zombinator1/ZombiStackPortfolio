import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const plans = [
  {
    name: 'Wizytówka',
    tagline: 'Jestem w internecie',
    price: 'od 1 500 zł',
    timeline: 'ok. 2 tygodnie',
    description:
      'Profesjonalna one-page dla firmy, która chce być widoczna w Google i zrobić dobre pierwsze wrażenie.',
    highlights: [
      'One-page — wszystko w jednym miejscu',
      'Sekcje: usługi, o firmie, opinie, kontakt',
      'Formularz kontaktowy + Google Maps',
    ],
    accent: {
      glow: 'from-indigo-500/8 via-transparent to-transparent',
      orb: 'bg-indigo-300/20',
      line: 'via-indigo-400/50',
      checkBg: 'bg-indigo-600',
      badge: 'bg-indigo-50 text-indigo-700',
    },
    featured: false,
  },
  {
    name: 'Strona Firmowa',
    tagline: 'Buduję wiarygodność',
    price: 'od 2 500 zł',
    timeline: 'ok. 3–4 tygodnie',
    description:
      'Rozbudowana strona z wieloma podstronami, kontem e-mail na domenie i integracją z Google Analytics.',
    highlights: [
      'Do 6 podstron (usługi, blog, cennik…)',
      'Konto e-mail na domenie (ty@firma.pl)',
      'Blog / aktualności + Google Analytics',
    ],
    accent: {
      glow: 'from-sky-500/8 via-transparent to-transparent',
      orb: 'bg-sky-300/20',
      line: 'via-sky-400/50',
      checkBg: 'bg-sky-600',
      badge: 'bg-sky-50 text-sky-700',
    },
    featured: true,
  },
  {
    name: 'Strona Firmowa CMS',
    tagline: 'Zarządzam treścią sam',
    price: 'od 4 000 zł',
    timeline: 'ok. 4–6 tygodni',
    description:
      'Wszystko z Firmowej, plus panel CMS — edytujesz teksty i zdjęcia bez programisty.',
    highlights: [
      'Wszystko ze Strony Firmowej',
      'Panel CMS — zmieniasz treści sam',
      'Priorytetowa opieka po wdrożeniu',
    ],
    accent: {
      glow: 'from-violet-500/8 via-transparent to-transparent',
      orb: 'bg-violet-300/20',
      line: 'via-violet-400/50',
      checkBg: 'bg-violet-600',
      badge: 'bg-violet-50 text-violet-700',
    },
    featured: false,
  },
];

const tableRows = [
  { label: 'Liczba podstron', values: ['1 (one-page)', 'do 6', 'do 6'] },
  { label: 'Konto e-mail na domenie', values: [false, true, true] },
  { label: 'Blog / aktualności', values: [false, true, true] },
  { label: 'Google Analytics', values: [false, true, true] },
  { label: 'Panel CMS', values: [false, false, true] },
];

const checkColors = ['text-indigo-600', 'text-sky-600', 'text-violet-600'];
const colHighlight = [false, true, false];

function TableCell({ val, colIdx }: { val: boolean | string; colIdx: number }) {
  if (typeof val === 'string') {
    return (
      <div className={`flex items-center justify-center p-4 ${colHighlight[colIdx] ? 'bg-zinc-900/[0.03]' : ''}`}>
        <span className="text-sm font-medium text-zinc-700">{val}</span>
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center p-4 ${colHighlight[colIdx] ? 'bg-zinc-900/[0.03]' : ''}`}>
      {val ? (
        <svg className={`h-5 w-5 ${checkColors[colIdx]}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <span className="h-[2px] w-4 rounded-full bg-zinc-200" />
      )}
    </div>
  );
}

export function Pricing() {
  return (
    <section
      id="cennik"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white py-24 sm:py-32"
    >
      {/* Separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute left-[-120px] top-[80px] h-[320px] w-[320px] rounded-full bg-indigo-200/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-[200px] h-[280px] w-[280px] rounded-full bg-sky-200/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[60px] left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-violet-200/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Przejrzyste ceny, bez niespodzianek"
            subtitle="Każdy projekt wyceniam indywidualnie po bezpłatnej konsultacji. Poniżej znajdziesz orientacyjne widełki, żebyś wiedział czego się spodziewać."
          />

          {/* Portfolio offer callout */}
          <div className="mb-12 overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-r from-indigo-50/80 via-white to-sky-50/80 p-6 shadow-sm ring-1 ring-indigo-100/40">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-indigo-700">
                  Oferta dla pierwszych klientów
                </span>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  Buduję portfolio — pierwsze 3 strony tworzę{' '}
                  <strong className="text-zinc-800">bez opłaty za pracę</strong>.
                  Płacisz tylko za domenę i hosting (~250 zł/rok).
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

          {/* Pricing cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white/95 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] ring-1 ring-zinc-950/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_100px_rgba(15,23,42,0.11)] ${
                  plan.featured
                    ? 'border-zinc-300/80 shadow-[0_24px_80px_rgba(15,23,42,0.09)]'
                    : 'border-zinc-200/70'
                }`}
              >
                {/* Glow overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.accent.glow}`} />
                {/* Top accent line */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${plan.accent.line} to-transparent`} />
                {/* Orb */}
                <div className={`absolute right-0 top-0 h-32 w-32 rounded-full ${plan.accent.orb} blur-3xl transition duration-700 group-hover:scale-125`} />
                {/* Inner gradient */}
                <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/50" />

                {/* Content */}
                <div className="relative">
                  {plan.featured && (
                    <span className="mb-4 inline-block rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                      Najpopularniejszy
                    </span>
                  )}

                  <span className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${plan.accent.badge}`}>
                    {plan.tagline}
                  </span>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight text-zinc-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Czas realizacji: {plan.timeline}
                  </p>

                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

                  {/* Key highlights — only differentiators */}
                  <ul className="flex flex-col gap-2.5">
                    {plan.highlights.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.accent.checkBg} text-[9px] font-bold text-white shadow-sm`}>
                          ✓
                        </span>
                        <span className="text-sm leading-snug text-zinc-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Standard inclusions note */}
                  <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                    + projekt graficzny, responsywność, SSL, SEO, Google Maps, pomoc z tekstami, szkolenie, 30 dni darmowych poprawek
                  </p>

                  <a
                    href="/#kontakt"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.featured
                        ? 'bg-zinc-900 text-white shadow-md hover:bg-zinc-700 hover:shadow-lg'
                        : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                    }`}
                  >
                    Zapytaj o wycenę
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table — differentiators only */}
          <div className="mt-16">
            <h3 className="mb-6 text-center text-lg font-semibold tracking-tight text-zinc-700">
              Co różni pakiety?
            </h3>
            <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)]">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-zinc-100">
                <div className="p-4" />
                {plans.map((plan, i) => (
                  <div
                    key={plan.name}
                    className={`p-4 text-center ${colHighlight[i] ? 'bg-zinc-900' : 'bg-zinc-50/80'}`}
                  >
                    <span className={`text-sm font-bold ${colHighlight[i] ? 'text-white' : 'text-zinc-800'}`}>
                      {plan.name}
                    </span>
                    <p className={`mt-0.5 text-xs ${colHighlight[i] ? 'text-zinc-300' : 'text-zinc-400'}`}>
                      {plan.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {tableRows.map((row, rowIdx) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 border-b border-zinc-100 last:border-0 ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/40'}`}
                >
                  <div className="flex items-center p-4 text-sm text-zinc-600">
                    {row.label}
                  </div>
                  {row.values.map((val, colIdx) => (
                    <TableCell key={colIdx} val={val} colIdx={colIdx} />
                  ))}
                </div>
              ))}
            </div>

            {/* Standard inclusions note */}
            <p className="mt-5 text-center text-xs text-zinc-400">
              Wszystkie pakiety zawierają:{' '}
              <span className="text-zinc-500">
                indywidualny projekt graficzny, responsywność, SSL, szybkie ładowanie, SEO, Google Maps, pomoc z tekstami i zdjęciami, szkolenie z obsługi (30 min), kopia zapasowa oraz 30 dni darmowych poprawek po wdrożeniu.
              </span>
            </p>
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
