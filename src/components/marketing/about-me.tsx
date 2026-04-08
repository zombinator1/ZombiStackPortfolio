import Image from 'next/image';
import { Container } from '@/components/ui/container';

/* ─────────────────────────────────────────────────────────────────────────────
   Shared photo placeholder — swap src="/bartek.jpg" gdy masz zdjęcie
───────────────────────────────────────────────────────────────────────────── */

function PhotoPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-400">
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <span className="text-xs font-medium">Twoje zdjęcie</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WARIANT D — Honest & Direct (na podstawie gotowego copy)
───────────────────────────────────────────────────────────────────────────── */

const bullets = [
  '2 lata doświadczenia w programowaniu',
  'Strony zoptymalizowane pod szybkość i podstawowe SEO',
  'Brak WordPressa — pełna kontrola nad kodem',
  'Prosty proces: bez zbędnych spotkań i komplikacji',
];

export function AboutMeD() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50/60 via-white to-white py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr]">

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:sticky lg:top-28">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-100/50 to-slate-100/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 shadow-[0_24px_80px_rgba(15,23,42,0.09)]">
              <PhotoPlaceholder className="aspect-[3/4] w-full" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">O mnie</p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-4xl">
              Kto stworzy Twoją stronę
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-500">
              Nazywam się <span className="font-medium text-zinc-800">[Twoje imię]</span>, jestem backend developerem i tworzę proste, szybkie strony dla małych biznesów.
            </p>

            {/* Bullets */}
            <ul className="mt-7 space-y-3.5">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-indigo-700 text-[10px] font-bold text-white shadow-[0_4px_10px_rgba(15,23,42,0.18)]">
                    ✓
                  </span>
                  <span className="text-sm leading-7 text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust builder */}
            <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-6 py-5">
              <p className="text-sm font-semibold leading-7 text-indigo-900">
                Pracujesz bezpośrednio ze mną — bez agencji i pośredników.
              </p>
            </div>

            {/* Portfolio disclaimer */}
            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Jestem na etapie budowania pierwszych realizacji, dlatego stawiam na uczciwe podejście i realne efekty zamiast marketingowych obietnic.
            </p>

            {/* Micro CTA */}
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-950 via-slate-900 to-indigo-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.24)]"
              >
                Napisz kilka zdań o swojej firmie
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WARIANT E — Premium, bez "junior vibe"
───────────────────────────────────────────────────────────────────────────── */

const premiumBullets = [
  'Doświadczenie programistyczne (backend)',
  'Nacisk na wydajność i czytelność',
  'Brak gotowych motywów i przypadkowych rozwiązań',
  'Jasny proces współpracy',
];

export function AboutMeE() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/6 blur-3xl" />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Kto stworzy Twoją stronę
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Tworzę strony internetowe dla małych biznesów, które mają być proste, szybkie i skuteczne.
            </p>

            <ul className="mt-6 space-y-3">
              {premiumBullets.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="mt-0.5 h-px w-5 shrink-0 translate-y-3 bg-gradient-to-r from-indigo-500 to-indigo-400" />
                  <span className="text-sm leading-6 text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust builder */}
            <div className="mt-7 border-l-2 border-indigo-500 pl-5">
              <p className="text-base font-semibold text-white">
                Pracujesz bezpośrednio ze mną — bez agencji i pośredników.
              </p>
            </div>

            {/* Disclaimer */}
            <p className="mt-5 text-sm leading-6 text-zinc-500">
              Aktualnie buduję portfolio, dlatego możesz liczyć na pełne zaangażowanie i uczciwe podejście do projektu.
            </p>

            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800"
            >
              Porozmawiajmy o Twojej stronie
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <PhotoPlaceholder className="aspect-[3/4] w-full" />
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-4 left-6 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 shadow-xl ring-1 ring-white/5">
              <p className="text-xs text-zinc-500">Dostępny na nowe projekty</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="text-sm font-semibold text-zinc-200">Otwórz na zlecenia</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
