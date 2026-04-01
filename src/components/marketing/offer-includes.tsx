import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const items = [
  'Responsywna strona (mobile + desktop)',
  'Wykonanie projektu',
  'Hosting',
  'Konfiguracja domeny',
  'SEO',
  'Formularz kontaktowy',
  'SSL (https)',
  'Kod źródłowy na GitHub',
  'Dokumentacja',
  '30 dni darmowych poprawek',
];

export function OfferIncludes() {
  return (
    <section className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          title="Nasza oferta - tworzenie stron www"
          subtitle="Wszystko czego potrzebujesz."
        />
        <div className="mx-auto max-w-3xl">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
