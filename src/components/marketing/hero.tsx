import Image from 'next/image';
import Link from 'next/link';
import { BackgroundDecor } from '../background-decor';

const proofItems = [
  'Projekt indywidualny',
  'Pomoc w treściach i copy',
  'Pełne wdrożenie',
];

export function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white">
      <BackgroundDecor />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="pointer-events-none absolute left-[-120px] top-[72px] h-[320px] w-[320px] rounded-full bg-indigo-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-[36px] h-[280px] w-[280px] rounded-full bg-violet-100/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="relative z-10 max-w-2xl">
            <HeroHeading />
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

function HeroHeading() {
  return (
    <div>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl">
        Strona internetowa,
        <span className="mt-2 block text-indigo-700">która podnosi wiarygodność Twojej firmy</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
        Projektuję i wdrażam nowoczesne strony dla małych biznesów oraz pomagam uporządkować
        treści i copywriting, żeby Twoja oferta była jasna, profesjonalna i gotowa do pokazania
        klientom.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link
        href="#kontakt"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zinc-950 via-slate-900 to-indigo-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)]"
      >
        Umów bezpłatną konsultację
      </Link>

      <Link
        href="#demo"
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white"
      >
        Zobacz przykładowe strony
      </Link>
    </div>
  );
}

function HeroProof() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
      {proofItems.map((item) => (
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
      <div className="pointer-events-none absolute inset-0 translate-y-8 scale-[0.96] rounded-[2rem] bg-gradient-to-br from-indigo-200/35 via-white to-transparent blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white/95 shadow-[0_32px_100px_rgba(15,23,42,0.12)] ring-1 ring-zinc-950/5 backdrop-blur-sm">
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

        <div className="relative w-full bg-white">
          <Image
            src="/personal-trainer/personal-trainer-dem-preview2.jpg"
            alt="Przykładowa nowoczesna strona internetowa dla firmy usługowej"
            width={1280}
            height={820}
            className="w-full object-cover object-top"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-sm md:block">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Komunikacja</p>
        <p className="mt-0.5 text-sm font-semibold text-zinc-900">Jasna oferta i treści</p>
      </div>

      <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-sm md:block">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Zakres</p>
        <p className="mt-0.5 bg-gradient-to-r from-zinc-900 to-indigo-700 bg-clip-text text-sm font-semibold text-transparent">
          Projekt + treści + wdrożenie
        </p>
      </div>
    </div>
  );
}
