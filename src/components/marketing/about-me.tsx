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
