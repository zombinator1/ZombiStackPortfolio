import { Container } from '@/components/ui/container';

const reassurances = [
  'Odpowiadam w ciągu 24h',
  'Bez zobowiązań i zaliczek na starcie',
  'Proponuję konkretny szablon, nie ogólniki',
];

export function CtaBand() {
  return (
    <section id="kontakt" className="bg-zinc-950 py-28">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Zacznijmy rozmawiać
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Powiedz mi o swojej firmie.
              <br />
              <span className="text-zinc-500">Resztą się zajmę.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Wyślij 2–3 zdania o firmie → pokażę Ci najlepszy wariant.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {reassurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-500">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form (UI only) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Opisz firmę i czego potrzebujesz
                </label>
                <textarea
                  rows={5}
                  placeholder="Np. Jestem elektrykiem w Gdańsku, obsługuję klientów indywidualnych i firmy. Chcę mieć stronę żeby ludzie mogli mnie łatwo znaleźć i się ze mną skontaktować."
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Imię i adres e-mail
                </label>
                <input
                  type="text"
                  placeholder="Jan Kowalski, jan@firma.pl"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500"
                />
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Wyślij wiadomość
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-zinc-600">
              Nie sprzedaję danych. Nie wysyłam spamu.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
