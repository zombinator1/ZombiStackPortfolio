import { BackgroundDecor } from '@/components/background-decor';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { sectionAccents } from '@/config/accents';

const groups = [
  {
    title: 'Gotowa strona, która działa',
    items: [
      'Strona dopasowana do Twojej firmy i oferty',
      'Pomoc w przygotowaniu treści (nie zostajesz z tym sam)',
      'Czytelna prezentacja usług + jasny kontakt',
    ],
  },
  {
    title: 'Konfiguracja od A do Z',
    items: [
      'Hosting, domena i https',
      'Formularz kontaktowy gotowy do użycia',
      'Podstawowe SEO (żeby można było Cię znaleźć w Google)',
      'Działa płynnie na telefonie i komputerze',
    ],
  },
  {
    title: 'Bezpieczny start i brak stresu',
    items: [
      'Za robociznę płacisz dopiero po wdrożeniu strony',
      'Coś nie gra? Chcesz zmienić tekst, zdjęcie, kolor? Dodać nową sekcję? Przez 30 dni po uruchomieniu poprawiam wszystko bez dodatkowych opłat',
      'Pełna kontrola — strona należy do Ciebie',
    ],
  },
];

const accents = sectionAccents;

export function OfferIncludes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white py-24 sm:py-28">
      <BackgroundDecor />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Moja oferta — tworzenie stron WWW"
            subtitle="Wszystko czego potrzebujesz."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {groups.map((group, index) => {
              const accent = accents[index];

              return (
                <article
                  key={group.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 p-8 ring-1 ${accent.ring} shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(15,23,42,0.10)]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-90`} />
                  <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/40" />
                  <div className={`absolute right-0 top-0 h-28 w-28 rounded-full ${accent.orb} blur-3xl transition duration-500 group-hover:scale-110`} />
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.badge} text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]`}
                      >
                        0{index + 1}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 via-zinc-200/80 to-transparent" />
                    </div>

                    <h3 className="max-w-xs text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                      {group.title}
                    </h3>

                    <ul className="mt-8 space-y-4">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3.5">
                          <span
                            className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent.check} text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(15,23,42,0.16)]`}
                          >
                            ✓
                          </span>

                          <span className="text-sm leading-7 text-zinc-600">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
