import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/marketing/contact-form';

const reassurances = [
  'Odpowiadam w ciągu 24h',
  'Bez zobowiązań i zaliczek na starcie',
  'Proponuję projekt, nie ogólniki',
];

export function CtaBand() {
  return (
    <section id="kontakt" className="bg-zinc-950 py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left */}
          <div className="lg:pt-2">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Zacznijmy rozmawiać
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Opisz swój biznes 
              <br />
              <span className="text-zinc-500">zaproponuję Ci stronę.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              Napisz 2–3 zdania o swojej firmie i wymaganiach.
              Zaproponuję Ci gotową stronę dopasowaną do Twojego biznesu.
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {reassurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-indigo-800 text-[10px] font-bold text-white shadow-[0_4px_12px_rgba(15,23,42,0.3)]">
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
