import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const reasons = [
  {
    title: 'Widzisz co kupujesz',
    description:
      'Demo to działająca strona, nie mockup w Figmie. Klikasz, scrollujesz, oceniasz. Zero niespodzianek po opłaceniu faktury.',
  },
  {
    title: 'Gotowe w 7 dni, nie 7 tygodni',
    description:
      'Zamiast tygodni projektowania — zaczynamy od sprawdzonej bazy. Czas do startu liczymy w dniach, nie miesiącach.',
  },
];

export function ValueProps() {
  return (
    <section className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          title="Dlaczego klienci to wybierają"
          subtitle="Szybciej, taniej i bez niespodzianek — nie dlatego że tak twierdzę, ale dlatego że tak działa ten model."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-zinc-900">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
