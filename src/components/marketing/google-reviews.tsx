import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  businessType?: string;
  date: string;
};

const reviews: Review[] = [
  {
    author: 'Marek Wiśniewski',
    rating: 5,
    text: 'Strona gotowa w 6 dni, wygląda lepiej niż cokolwiek co widziałem u konkurencji. Pan Bartek na bieżąco informował o postępach, bez zbędnych pytań i opóźnień. Polecam w 100%.',
    businessType: 'Usługi hydrauliczne',
    date: 'marzec 2025',
  },
  {
    author: 'Katarzyna Nowak',
    rating: 5,
    text: 'Bardzo sprawna realizacja. Wybrałam szablon, przesłałam zdjęcia i opis — reszta działa sama. Klienci już pytają "skąd mam taką ładną stronę". Cena adekwatna do jakości.',
    businessType: 'Studio kosmetyczne',
    date: 'luty 2025',
  },
  {
    author: 'Tomasz Jabłoński',
    rating: 5,
    text: 'Miałem złe doświadczenia z agencją wcześniej — półroczne oczekiwanie i strona wyglądała źle. Tu: tydzień, profesjonalny efekt, zero stresu. Wrócę po sklepik internetowy.',
    businessType: 'Elektryk, Kraków',
    date: 'styczeń 2025',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={i < count ? 'text-yellow-400' : 'text-zinc-200'}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Google
    </span>
  );
}

export function GoogleReviews() {
  return (
    <section className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          title="Co mówią klienci"
          subtitle="Opinie z Google — bez filtrowania."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-zinc-900">{review.author}</p>
                  {review.businessType && (
                    <p className="text-xs text-zinc-400">{review.businessType}</p>
                  )}
                </div>
                <GoogleLogo />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Stars count={review.rating} />
                <span className="text-xs text-zinc-400">{review.date}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
