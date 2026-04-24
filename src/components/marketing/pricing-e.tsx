'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const plans = [
  {
    name: 'Landing Page',
    tagline: 'Jestem w internecie',
    price: 'od 1 500 zł',
    timeline: 'ok. 2 tygodnie',
    description:
      'One-page prowadzący Twojego klienta przez Twoją ofertę i do kontaktu.',
    highlights: [
      'One-page — wszystko w jednym miejscu',
      'Idealne dla małej firmy, JDG',
      'Nowa kampania reklamowa',
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
      'Pokaż swoją szeroką ofertę, i treści budujące Twój autorytet.',
    highlights: [
      'Wiele podstron',
      'Dla firmy z szerszą ofertą',
      'Prezentuj blog, galerie zdjęć itp.'
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
];


// WARIANT E — rozwijany accordion pod headingiem
export function PricingE() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="cennik"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white py-24 sm:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="pointer-events-none absolute left-[-120px] top-[80px] h-[320px] w-[320px] rounded-full bg-indigo-200/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-[200px] h-[280px] w-[280px] rounded-full bg-sky-200/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[60px] left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-violet-200/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Wystarczy Ci jednostronny Landing, czy Twoje potrzeby są szersze?"
          />

          {/* Accordion trigger */}
          <div className="mb-10">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/60 px-3 py-1.5 text-xs text-indigo-700 transition-colors hover:bg-indigo-100/60"
            >
              <span className="font-semibold uppercase tracking-widest text-[10px]">Oferta dla pierwszych klientów</span>
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {open && (
              <div className="mt-2 max-w-xl rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3">
                <p className="text-xs leading-relaxed text-zinc-600">
                  Buduję portfolio — pierwsze 3 strony tworzę{' '}
                  <strong className="text-zinc-800">bez opłaty za pracę</strong>.
                  Płacisz tylko za domenę i hosting (~100 zł/rok).
                  W zamian proszę o możliwość umieszczenia projektu w portfolio i krótką opinię.
                </p>
              </div>
            )}
          </div>

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white/95 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] ring-1 ring-zinc-950/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_100px_rgba(15,23,42,0.11)] ${
                  plan.featured
                    ? 'border-zinc-300/80 shadow-[0_24px_80px_rgba(15,23,42,0.09)]'
                    : 'border-zinc-200/70'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.accent.glow}`} />
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${plan.accent.line} to-transparent`} />
                <div className={`absolute right-0 top-0 h-32 w-32 rounded-full ${plan.accent.orb} blur-3xl transition duration-700 group-hover:scale-125`} />
                <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/50" />

                <div className="relative">
                  <span className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${plan.accent.badge}`}>
                    {plan.tagline}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">{plan.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold tracking-tight text-zinc-900">0 zł</span>
                    <span className="text-lg font-medium text-zinc-400 line-through decoration-zinc-400">{plan.price}</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Czas realizacji: {plan.timeline}</p>
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
                  <ul className="flex flex-col gap-2.5">
                    {plan.highlights.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.accent.checkBg} text-[9px] font-bold text-white shadow-sm`}>✓</span>
                        <span className="text-sm leading-snug text-zinc-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
