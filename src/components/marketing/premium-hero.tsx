import Link from 'next/link';
import { BackgroundDecor } from '../background-decor';

export function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white">
      <BackgroundDecor />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-2xl">
            <HeroBadge />
            <HeroHeading />
            <HeroDescription />
            <HeroActions />
            <HeroProof />
          </div>

          <div className="relative z-10">
            <HeroPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600" />
      Strony WWW dla firm, które mają wyglądać profesjonalnie
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="space-y-6">
      <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-zinc-900 sm:text-6xl lg:text-7xl">
        Nowoczesna strona, która
        <span className="block bg-gradient-to-r from-zinc-950 via-slate-900 to-indigo-800 bg-clip-text text-transparent">
          wygląda premium i sprzedaje usługi
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
        Bez przeładowania, bez przypadkowego designu i bez „tanich” sekcji.
        Tworzę estetyczne strony usługowe, które jasno pokazują ofertę i prowadzą klienta do kontaktu.
      </p>
    </div>
  );
}

function HeroDescription() {
  return null;
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link
        href="#demo"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zinc-950 via-slate-900 to-indigo-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)]"
      >
        Zobacz demo
      </Link>

      <Link
        href="#kontakt"
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-zinc-400"
      >
        Umów bezpłatną wycenę
      </Link>
    </div>
  );
}

function HeroProof() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
      {['Nowoczesny design', 'Responsywność mobile-first', 'Szybkie wdrożenie'].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-slate-700 to-indigo-700" />
          {item}
        </div>
      ))}
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-gradient-to-br from-indigo-300/18 via-slate-300/10 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 ring-1 ring-indigo-500/5 shadow-[0_24px_90px_rgba(15,23,42,0.10)]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/6 via-transparent to-transparent" />
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50/90 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          <div className="ml-4 rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs text-zinc-500">
            twoja-strona.pl
          </div>
        </div>

        <div className="relative grid gap-6 p-6 sm:p-8">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-slate-900 to-indigo-900 p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.22)]">
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              Premium website
            </div>
            <div className="max-w-sm text-2xl font-semibold leading-tight">
              Strona usługowa, która buduje zaufanie od pierwszego ekranu
            </div>
            <div className="mt-6 h-10 w-32 rounded-full bg-white/90" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[20, 24, 16].map((w, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4">
                <div className="mb-3 h-24 rounded-xl bg-white shadow-sm" />
                <div className={`h-3 rounded bg-zinc-200 ${w === 20 ? 'w-20' : w === 24 ? 'w-24' : 'w-16'}`} />
                <div className={`mt-2 h-3 rounded bg-zinc-100 ${w === 20 ? 'w-28' : w === 24 ? 'w-16' : 'w-24'}`} />
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="mb-3 h-4 w-40 rounded bg-zinc-200" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-zinc-100" />
                <div className="h-3 w-[92%] rounded bg-zinc-100" />
                <div className="h-3 w-[80%] rounded bg-zinc-100" />
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
              <div className="mb-3 h-4 w-24 rounded bg-zinc-200" />
              <div className="space-y-3">
                <div className="h-10 rounded-xl bg-white shadow-sm" />
                <div className="h-10 rounded-xl bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-4 ring-1 ring-indigo-500/5 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur md:block">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
          Efekt
        </div>
        <div className="mt-1 bg-gradient-to-r from-zinc-950 to-indigo-800 bg-clip-text text-sm font-semibold text-transparent">
          Estetyka + czytelna oferta + mocniejsze CTA
        </div>
      </div>
    </div>
  );
}