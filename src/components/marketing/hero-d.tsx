import Link from 'next/link';

const proofItems = ['Projekt indywidualny', 'Pomoc w treściach i copy', 'Pełne wdrożenie'];

export function HeroD() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-900/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] h-[400px] w-[500px] rounded-full bg-violet-950/50 blur-[100px]" />

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:pb-36 lg:pt-40">
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
          <span className="h-px w-8 bg-indigo-700" />
          Strony WWW dla firm
        </p>

        <h1 className="text-[clamp(2.2rem,5vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
          Strona, która podnosi<br />
          <span className="bg-gradient-to-br from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
            wiarygodność Twojej firmy
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-base leading-7 text-zinc-400 lg:text-lg">
            Projektuję i wdrażam nowoczesne strony dla małych biznesów oraz pomagam uporządkować
            treści i copywriting, żeby Twoja oferta była jasna, profesjonalna i gotowa do pokazania
            klientom.
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              Umów bezpłatną konsultację
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
            >
              Zobacz przykładowe strony
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/8 pt-8">
          {proofItems.map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-500">
              <span className="h-px w-4 bg-indigo-600" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
