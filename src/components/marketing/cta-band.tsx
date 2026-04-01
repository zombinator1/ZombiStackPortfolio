import { Container } from '@/components/ui/container';

const stats = [
  { value: '15+', label: 'stron uruchomionych' },
  { value: '7 dni', label: 'średni czas realizacji' },
  { value: '30 dni', label: 'darmowych poprawek' },
];

export function CtaBand() {
  return (
    <section id="kontakt" className="bg-zinc-950 py-28">
      <Container>
        <div className="mx-auto max-w-3xl">

          {/* Label */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Zacznijmy rozmawiać
          </p>

          {/* Headline */}
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Powiedz, jakiej strony potrzebujesz.
            <br />
            {/* <span className="text-zinc-400">w 7 dni.</span> */}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Powiedz mi czym się zajmujesz — dobiorę szablon i przygotuję wycenę.
            Zero formalności, zero zaliczki przed zobaczeniem projektu.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden h-8 w-px bg-zinc-800 sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* Input row */}
          <div className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="twoj@email.pl"
                className="h-13 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500 sm:max-w-sm"
              />
              <button
                type="button"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Napisz do mnie
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              Bez umów. Bez zaliczki. Odpowiadam tego samego dnia.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
