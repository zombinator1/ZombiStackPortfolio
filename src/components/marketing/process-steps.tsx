import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    number: '01',
    title: 'Wysłanie zapytania',
    description:
      'Skontaktuj się z nami telefonicznie lub poprzez e-mail i opisz swoje potrzeby.',
  },
  {
    number: '02',
    title: 'Kontakt z naszej strony',
    description:
      'Skontaktujemy się z Tobą w możliwie najkrótszym terminie. Dopytamy o szczegóły, które pozwolą zaproponować wersje demonstracyjną.',
  },
  {
    number: '03',
    title: 'Prezentacja wersji demo',
    description:
      'Prezentujemy wersję demonstracyjną Twojej strony, dogrywamy szczegóły i nanosimy poprawki. Dopiero po Twojej akceptacji przechodzimy do realizacji.',
  },
  {
    number: '04',
    title: 'Dostawa strony',
    description:
      'W ciągu 7 dni dostajesz działającą stronę na swojej domenie. Szybka, responsywna, z podstawowym SEO.',
  },
  {
    number: '05',
    title: 'Wsparcie techniczne i darmowe modyfikacje.',
    description:
      'Jesteśmy w kontakcie i oferujemy wsparcie techniczne oraz darmowe modyfikacje przez 90 dni.',
  },
];

export function ProcessSteps() {
  return (
    <section id="jak-to-dziala" className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Jak wygląda współpraca"
          subtitle="Te kroki dzielą Cię od nowej strony."
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
