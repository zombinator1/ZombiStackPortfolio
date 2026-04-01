import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const props = [
  {
    title: 'Widzisz co kupujesz',
    description:
      'Demo to działająca strona, nie mockup w Figmie. Klikasz, scrollujesz, oceniasz. Zero niespodzianek po opłaceniu faktury.',
  },
  {
    title: 'Szybciej niż „od zera"',
    description:
      'Zamiast tygodni projektowania — zaczynamy od sprawdzonej bazy. Czas do startu liczymy w dniach, nie miesiącach.',
  },
  {
    title: 'Niższy koszt, wyższa jakość',
    description:
      'Nie płacisz za wymyślanie układu strony od nowa. Koszt szablonu rozkłada się na wielu klientów, jakość zostaje wysoka.',
  },
  {
    title: 'Łatwa rozbudowa',
    description:
      'Potrzebujesz za rok nowej podstrony albo sklepu? Kod jest czysty i gotowy do dalszego rozwoju. Bez przepisywania od zera.',
  },
];

export function ValueProps() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Dlaczego model oparty na szablonach"
          subtitle="To nie kompromis — to rozsądek."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {props.map((prop) => (
            <div key={prop.title} className="rounded-xl border border-zinc-100 p-6">
              <h3 className="mb-2 text-base font-semibold text-zinc-900">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{prop.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
