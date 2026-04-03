import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const groups = [
  {
    title: 'Gotowa strona, która działa',
    items: [
      'Strona dopasowana do Twojej firmy i oferty',
      'Działa płynnie na telefonie i komputerze',
      'Szybkie ładowanie (klient nie ucieka po 2 sekundach)',
      'Czytelna prezentacja usług + jasny kontakt',
    ],
  },
  {
    title: 'Wszystko ogarnięte za Ciebie',
    items: [
      'Hosting i domena skonfigurowane od A do Z',
      'Certyfikat bezpieczeństwa (https)',
      'Formularz kontaktowy gotowy do użycia',
      'Podstawowe SEO (żeby można było Cię znaleźć w Google)',
    ],
  },
  {
    title: 'Bezpieczny start i brak stresu',
    items: [
      '30 dni darmowych poprawek po wdrożeniu',
      'Pomoc w przygotowaniu treści (nie zostajesz z tym sam)',
      'Strona gotowa do dalszej rozbudowy',
      'Pełna kontrola — strona należy do Ciebie',
    ],
  },
];

export function OfferIncludes() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          title="Nasza oferta — tworzenie stron WWW"
          subtitle="Wszystko czego potrzebujesz."
        />
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-xl border border-zinc-200 bg-white p-7 shadow-sm">
              <h3 className="mb-5 border-b border-zinc-100 pb-4 text-[15px] font-semibold text-zinc-900">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm leading-snug text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
