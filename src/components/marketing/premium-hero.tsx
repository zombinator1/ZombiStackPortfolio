import Image from 'next/image';
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
      Profesjonalne strony WWW dla firm
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="space-y-6">
      <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-zinc-900 sm:text-5xl lg:text-6xl">
        Gotowa strona sprzedażowa dla Twojego{' '}
        <span className="block bg-gradient-to-r from-zinc-900 via-indigo-700 to-indigo-500 bg-clip-text pb-1 text-transparent">
          biznesu w 7 dni
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
        Wybierasz styl, ja dopasowuję treść, wdrażam i konfiguruję wszystko od A do Z.
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
      {['Gotowa do wysyłania klientom', 'Pełna konfiguracja'].map((item) => (
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

        <div className="relative aspect-[4/3]">
          <Image
            src="/mockup3.png"
            alt="Podgląd strony"
            fill
            className="object-cover"
          />
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