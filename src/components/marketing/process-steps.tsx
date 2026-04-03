import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    number: '01',
    title: 'Opisz swoją firmę',
    description:
      'Wyślij 2–3 zdania: czym się zajmujesz, dla kogo i gdzie działasz. Jeśli masz starą stronę albo Facebooka — podeślij link.',
  },
  {
    number: '02',
    title: 'Dostajesz gotowy kierunek',
    description:
    'Na podstawie tego co wyślesz, proponuję konkretny szablon dopasowany do Twojej branży. Widzisz od razu, jak będzie wyglądać Twoja strona — bez zgadywania i bez niespodzianek.',
  },
  {
    number: '03',
    title: 'Ja ogarniam resztę',
    description:
      'Dostosowuję stronę pod Twoją firmę, uzupełniam treści i publikuję ją online. Ty nie musisz ogarniać technikaliów ani brać udziału w dziesiątkach decyzji.',
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
            <div key={step.number} className="relative rounded-xl border border-zinc-100 bg-zinc-50 p-6">
              <p className="mb-3 text-4xl font-black text-zinc-200">{step.number}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
