import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/marketing/contact-form';

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

          {/* Right */}
          <ContactForm />

        </div>
      </Container>
    </section>
  );
}
