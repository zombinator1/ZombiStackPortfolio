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
        Strona internetowa dla Twojego{' '}
        <span className="block bg-gradient-to-r from-zinc-900 via-indigo-700 to-indigo-500 bg-clip-text pb-1 text-transparent">
          biznesu
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
        Prowadzisz jednoosobowy, mały lub średni biznes? Jeśli potrzebujesz pokazać się w internecie, na google maps to dobrze trafiłeś.
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
    <div className="relative mx-auto w-full max-w-[640px]">
      {/* Ambient glow behind the card */}
      <div className="absolute inset-0 translate-y-8 scale-95 rounded-[2rem] bg-gradient-to-br from-rose-300/20 via-indigo-300/15 to-transparent blur-3xl" />

      {/* Browser chrome frame */}
      <div className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-white shadow-[0_32px_100px_rgba(15,23,42,0.14)] ring-1 ring-zinc-950/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50/95 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-400">
            <svg className="h-3 w-3 shrink-0 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0 0V7m0 4v4" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            twoja-firma.pl
          </div>
        </div>

        {/* Screenshot — natural 16:9-ish ratio, no cropping issues */}
        <div className="relative w-full">
          <Image
            src="/mockup-personal-trainer.jpg"
            alt="Przykładowa strona — trenerka personalna"
            width={1280}
            height={820}
            className="w-full object-cover object-top"
            priority
          />
          {/* Subtle bottom fade so it blends into the page */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
        </div>
      </div>

      {/* Floating badge — bottom left */}
      <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-sm md:block">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Przykład</p>
        <p className="mt-0.5 bg-gradient-to-r from-zinc-900 to-rose-600 bg-clip-text text-sm font-semibold text-transparent">
          Trenerka personalna
        </p>
      </div>

      {/* Floating badge — top right */}
      <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-sm md:block">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Czas realizacji</p>
        <p className="mt-0.5 bg-gradient-to-r from-zinc-900 to-indigo-700 bg-clip-text text-sm font-semibold text-transparent">
          2–4 tygodnie
        </p>
      </div>
    </div>
  );
}