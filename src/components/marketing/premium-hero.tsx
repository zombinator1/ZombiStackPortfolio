import Link from 'next/link';

export function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-zinc-50/70">
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

function BackgroundDecor() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute right-[-80px] top-[120px] h-[260px] w-[260px] rounded-full bg-sky-100/40 blur-3xl" />
      <div className="absolute left-[-80px] bottom-[40px] h-[220px] w-[220px] rounded-full bg-violet-100/30 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
    </>
  );
}

function HeroBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur">
      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
      Strony WWW dla firm, które mają wyglądać profesjonalnie
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="space-y-6">
      <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-zinc-900 sm:text-6xl lg:text-7xl">
        Nowoczesna strona, która
        <span className="block bg-gradient-to-r from-zinc-900 via-zinc-700 to-indigo-600 bg-clip-text text-transparent">
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
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
      >
        Zobacz demo
      </Link>

      <Link
        href="#kontakt"
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-400"
      >
        Umów bezpłatną wycenę
      </Link>
    </div>
  );
}

function HeroProof() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        Nowoczesny design
      </div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        Responsywność mobile-first
      </div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        Szybkie wdrożenie
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-gradient-to-br from-indigo-200/40 via-sky-100/30 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          <div className="ml-4 rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs text-zinc-500">
            twoja-strona.pl
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:p-8">
          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 text-white">
            <div className="mb-4 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">
              Premium website
            </div>
            <div className="max-w-sm text-2xl font-semibold leading-tight">
              Strona usługowa, która buduje zaufanie od pierwszego ekranu
            </div>
            <div className="mt-6 h-10 w-32 rounded-full bg-white/90" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="mb-3 h-24 rounded-xl bg-white shadow-sm" />
              <div className="h-3 w-20 rounded bg-zinc-200" />
              <div className="mt-2 h-3 w-28 rounded bg-zinc-100" />
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="mb-3 h-24 rounded-xl bg-white shadow-sm" />
              <div className="h-3 w-24 rounded bg-zinc-200" />
              <div className="mt-2 h-3 w-16 rounded bg-zinc-100" />
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="mb-3 h-24 rounded-xl bg-white shadow-sm" />
              <div className="h-3 w-16 rounded bg-zinc-200" />
              <div className="mt-2 h-3 w-24 rounded bg-zinc-100" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="mb-3 h-4 w-40 rounded bg-zinc-200" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-zinc-100" />
                <div className="h-3 w-[92%] rounded bg-zinc-100" />
                <div className="h-3 w-[80%] rounded bg-zinc-100" />
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="mb-3 h-4 w-24 rounded bg-zinc-200" />
              <div className="space-y-3">
                <div className="h-10 rounded-xl bg-white shadow-sm" />
                <div className="h-10 rounded-xl bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-xl backdrop-blur md:block">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
          Efekt
        </div>
        <div className="mt-1 text-sm font-semibold text-zinc-900">
          Estetyka + czytelna oferta + mocniejsze CTA
        </div>
      </div>
    </div>
  );
}