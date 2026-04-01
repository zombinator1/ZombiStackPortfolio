import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    number: '01',
    title: 'Wybierasz szablon',
    description:
      'Przeglądasz demo i wskazujesz styl, który pasuje do Twojej firmy. Możesz też opisać słowami, czego potrzebujesz.',
  },
  {
    number: '02',
    title: 'Dostarczasz treści',
    description:
      'Wysyłasz mi logo, krótki opis usług, zdjęcia i dane kontaktowe. Nie musisz pisać elaboratów — pomogę zadając pytania.',
  },
  {
    number: '03',
    title: 'Strona jest gotowa',
    description:
      'W ciągu 7 dni dostajesz działającą stronę na swojej domenie. Szybka, responsywna, z podstawowym SEO.',
  },
];

export function ProcessSteps() {
  return (
    <section id="jak-to-dziala" className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Jak wygląda współpraca"
          subtitle="Trzy kroki dzielą Cię od nowej strony."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <p className="mb-3 text-4xl font-black text-zinc-100">{step.number}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
