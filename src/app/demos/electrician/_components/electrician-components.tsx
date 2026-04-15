import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

export const company = {
  name: 'VoltMark Instalacje',
  phone: '+48 600 123 456',
  email: 'kontakt@voltmark-demo.pl',
  area: 'Warszawa i okolice',
  hours: 'Pon.–Pt. 8:00–18:00',
};

export const navigation = [
  { label: 'Start', href: '/demos/electrician' },
  { label: 'Usługi', href: '/demos/electrician/uslugi' },
  { label: 'Realizacje', href: '/demos/electrician/realizacje' },
  { label: 'O nas', href: '/demos/electrician/o-nas' },
  { label: 'Blog', href: '/demos/electrician/blog' },
  { label: 'Kontakt', href: '/demos/electrician/kontakt' },
];

export const stats = [
  { value: '10+', label: 'lat doświadczenia przy instalacjach i modernizacjach' },
  { value: '350+', label: 'zrealizowanych prac dla domów, mieszkań i lokali' },
  { value: '48h', label: 'średni czas odpowiedzi na standardowe zapytania' },
  { value: '100%', label: 'skupienia na czytelnej komunikacji i porządku prac' },
];

export const trustPoints = [
  {
    title: 'Bezpieczeństwo i zgodność z dobrymi praktykami',
    description:
      'Instalacje planujemy i wykonujemy tak, aby były bezpieczne w użytkowaniu, logiczne w serwisie i gotowe na przyszłe potrzeby inwestycji.',
  },
  {
    title: 'Terminowość bez przeciągania prostych decyzji',
    description:
      'Pracujemy konkretnie. Ustalamy zakres, proponujemy rozsądne rozwiązania i pilnujemy, żeby współpraca nie zamieniała się w chaos organizacyjny.',
  },
  {
    title: 'Estetyka wykonania i porządek na inwestycji',
    description:
      'Dobra instalacja nie kończy się na tym, że działa. Liczy się także uporządkowany układ, czytelność i kultura pracy w danym obiekcie.',
  },
  {
    title: 'Jeden kontakt od wyceny do odbioru',
    description:
      'Klient wie, na czym stoi. Odpowiadamy na pytania, tłumaczymy decyzje techniczne i nie zostawiamy niedomówień na końcowym etapie prac.',
  },
];

export const services = [
  {
    slug: 'instalacje-elektryczne',
    title: 'Instalacje elektryczne od podstaw',
    short:
      'Kompleksowe wykonanie instalacji w nowych domach, mieszkaniach, lokalach usługowych i małych obiektach użytkowych.',
    bullets: [
      'planowanie układu punktów i obwodów',
      'wykonanie instalacji w nowych obiektach',
      'przygotowanie pod przyszłą rozbudowę',
    ],
    icon: '01',
  },
  {
    slug: 'modernizacje',
    title: 'Modernizacje i wymiany',
    short:
      'Dostosowanie starych instalacji do nowych potrzeb, remontów i większego obciążenia wynikającego ze współczesnego użytkowania.',
    bullets: [
      'wymiana zużytych elementów',
      'uporządkowanie istniejących obwodów',
      'dostosowanie do nowego układu pomieszczeń',
    ],
    icon: '02',
  },
  {
    slug: 'pomiary',
    title: 'Pomiary i sprawdzenia instalacji',
    short:
      'Kontrola stanu instalacji przy odbiorach, przeglądach, modernizacjach i weryfikacji bezpieczeństwa użytkowania.',
    bullets: ['ocena stanu instalacji', 'sprawdzenie bezpieczeństwa użytkowania', 'jasna informacja o dalszych krokach'],
    icon: '03',
  },
  {
    slug: 'awarie',
    title: 'Usuwanie awarii i usterek',
    short:
      'Szybka diagnoza problemu, identyfikacja przyczyny i ograniczenie ryzyka powrotu tej samej usterki w przyszłości.',
    bullets: ['zaniki napięcia', 'niesprawne obwody', 'przeciążenia i problemy eksploatacyjne'],
    icon: '04',
  },
  {
    slug: 'dla-firm',
    title: 'Usługi elektryczne dla firm',
    short:
      'Prace dla biur, lokali usługowych, gabinetów i małych obiektów komercyjnych, w których liczy się funkcjonalność i niezawodność.',
    bullets: ['lokale usługowe', 'małe biura i gabinety', 'przestrzenie przygotowywane pod działalność'],
    icon: '05',
  },
  {
    slug: 'doradztwo',
    title: 'Doradztwo techniczne',
    short:
      'Pomoc w wyborze rozwiązań uzasadnionych kosztowo i praktycznych na etapie budowy, remontu lub przebudowy obiektu.',
    bullets: ['dobór osprzętu', 'rozmieszczenie punktów', 'ograniczenie przyszłych przeróbek'],
    icon: '06',
  },
];

export const realizations = [
  {
    title: 'Instalacja elektryczna w domu jednorodzinnym',
    category: 'Nowa inwestycja',
    description:
      'Kompleksowe wykonanie instalacji wraz z rozdzielnią, oświetleniem i przygotowaniem obiektu pod dalszą rozbudowę oraz codzienne wygodne użytkowanie.',
    image: '/demo-electrician/realization-house.jpg',
  },
  {
    title: 'Wymiana instalacji w mieszkaniu po remoncie',
    category: 'Modernizacja',
    description:
      'Uporządkowanie obwodów, nowe punkty elektryczne i dostosowanie instalacji do nowego układu pomieszczeń oraz większej liczby urządzeń.',
    image: '/demo-electrician/realization-apartment.jpg',
  },
  {
    title: 'Przygotowanie lokalu usługowego pod działalność',
    category: 'Lokal komercyjny',
    description:
      'Realizacja układu elektrycznego dla przestrzeni roboczej z naciskiem na bezpieczeństwo, funkcjonalność i estetykę wykonania.',
    image: '/demo-electrician/realization-office.jpg',
  },
];

export const testimonials = [
  {
    quote:
      'Zakres prac został dobrze omówiony już na początku. Realizacja przebiegła sprawnie, a instalacja została wykonana bardzo estetycznie.',
    author: 'Właścicielka mieszkania po generalnym remoncie',
  },
  {
    quote:
      'Potrzebowaliśmy firmy, która nie tylko wykona instalację, ale też pomoże ją dobrze zaplanować. Tutaj dostaliśmy konkret i dobrą organizację.',
    author: 'Inwestor budujący dom jednorodzinny',
  },
  {
    quote:
      'Prace w lokalu usługowym były wykonane bez chaosu i z jasną komunikacją. To szczególnie ważne, kiedy termin otwarcia działalności jest blisko.',
    author: 'Właściciel lokalu usługowego',
  },
];

export const processSteps = [
  {
    title: 'Kontakt i wstępna rozmowa',
    description: 'Na początku ustalamy, czego dotyczy zlecenie, na jakim etapie jest inwestycja i jaki zakres prac trzeba uporządkować.',
  },
  {
    title: 'Wycena oraz plan działania',
    description: 'Proponujemy rozwiązania adekwatne do obiektu i pomagamy podjąć rozsądne decyzje przed wejściem w realizację.',
  },
  {
    title: 'Wykonanie prac',
    description: 'Realizujemy ustalony zakres z dbałością o jakość, estetykę wykonania i przewidywalny przebieg współpracy.',
  },
  {
    title: 'Sprawdzenie i odbiór',
    description: 'Po zakończeniu omawiamy efekt końcowy, ważne kwestie użytkowe i dalsze zalecenia, jeśli są potrzebne.',
  },
];

export const blogPosts = [
  {
    slug: 'kiedy-wymienic-instalacje-elektryczna',
    title: 'Kiedy warto wymienić starą instalację elektryczną?',
    excerpt:
      'Sprawdź, które sygnały mogą oznaczać, że dalsze odkładanie modernizacji przestaje być rozsądną decyzją.',
    category: 'Modernizacja',
    content: [
      {
        heading: 'Wiek instalacji to tylko jeden z sygnałów',
        body: 'Instalacje wykonane przed 1990 rokiem często nie spełniają dzisiejszych norm — zarówno pod kątem bezpieczeństwa, jak i obciążenia. Współczesne gospodarstwo domowe pobiera kilkakrotnie więcej energii niż kilkadziesiąt lat temu. Samo to powinno skłonić do przeglądu.',
      },
      {
        heading: 'Na co zwrócić uwagę w codziennym użytkowaniu',
        body: 'Częste wypadanie bezpieczników, ciepłe gniazdka, widoczne uszkodzenia przewodów, trzaskające włączniki — to nie są drobne usterki. To sygnały, że instalacja pracuje na granicy swojej wydolności lub poza nią. Ignorowanie ich nie zmniejsza ryzyka, tylko przesuwa problem w czasie.',
      },
      {
        heading: 'Modernizacja a remont — różnica w podejściu',
        body: 'Wymiana instalacji w starym budynku nie zawsze wymaga generalnego remontu. W wielu przypadkach da się poprowadzić nowe obwody w sposób mało inwazyjny. Kluczem jest dobra wycena i plan prac przed wejściem na budowę, a nie improvizacja na etapie realizacji.',
      },
    ],
  },
  {
    slug: 'jak-zaplanowac-elektryke-w-nowym-domu',
    title: 'Jak zaplanować elektrykę w nowym domu?',
    excerpt:
      'Dobrze rozpisana instalacja na starcie ogranicza liczbę późniejszych przeróbek i niepotrzebnych kosztów.',
    category: 'Nowa inwestycja',
    content: [
      {
        heading: 'Zacznij od projektu, nie od zakupu materiałów',
        body: 'Największy błąd przy nowej inwestycji to zlecanie elektryki bez projektu. Dobry schemat instalacji pozwala przewidzieć rozłożenie obwodów, moc przyłączeniową i liczbę punktów. Bez tego każda zmiana na etapie budowy kosztuje więcej czasu i pieniędzy.',
      },
      {
        heading: 'Ile obwodów to wystarczająco?',
        body: 'Kuchnia, łazienka, pralnia, piece i klimatyzacja wymagają osobnych obwodów. Do tego gniazda ogólne i oświetlenie w każdym pomieszczeniu. Skąpienie na obwodach na etapie projektu to prosta droga do przeciążeń i kłopotów kilka lat po przeprowadzce.',
      },
      {
        heading: 'Myśl z wyprzedzeniem — infrastruktura na przyszłość',
        body: 'Warto już teraz zaplanować miejsce na ładowarkę do samochodu elektrycznego, instalację fotowoltaiczną albo inteligentny dom. Przeprowadzenie pustej rury kablowej podczas budowy kosztuje ułamek tego, co jej późniejsze wkuwanie w gotowe ściany.',
      },
    ],
  },
  {
    slug: 'najczestsze-bledy-przy-remoncie-mieszkania',
    title: 'Najczęstsze błędy przy remoncie mieszkania',
    excerpt:
      'Zobacz, o czym warto pamiętać, zanim ściany zostaną zamknięte i wykończone.',
    category: 'Remont',
    content: [
      {
        heading: 'Elektryka na końcu zamiast na początku',
        body: 'Jednym z najczęstszych błędów jest traktowanie elektryki jako ostatniego etapu remontu. Tymczasem zmiana układu gniazdek, przesunięcie punktów świetlnych czy modernizacja rozdzielnicy musi odbyć się zanim powstaną tynki i wylewki. Poprawki po zamknięciu ścian są kosztowne.',
      },
      {
        heading: 'Oszczędzanie na przekrojach przewodów',
        body: 'Przewody o za małym przekroju nagrzewają się pod obciążeniem. To nie tylko problem z bezpiecznikami — to realne ryzyko pożaru. Koszt grubszego kabla na etapie remontu jest pomijalny w porównaniu z konsekwencjami oszczędzania na nim.',
      },
      {
        heading: 'Brak dokumentacji powykonawczej',
        body: 'Po zakończonym remoncie warto mieć schemat instalacji z zaznaczonymi trasami przewodów. Przy każdej późniejszej przeróbce — wierceniu, wykuwaniu, instalowaniu klimatyzacji — taki rysunek pozwala uniknąć kosztownej wpadki. Dobra firma zostawia dokumentację bez dodatkowego pytania.',
      },
    ],
  },
];

export function DemoNotice() {
  return (
    <div className="border-b border-amber-500/20 bg-zinc-950 text-zinc-300">
      <Container className="flex flex-col gap-3 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-white">Tryb demo.</span> Treści i dane firmy są fikcyjne. To przykład serwisu dla pakietu
          <span className="font-semibold text-amber-300"> Strona Firmowa</span>.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/#demo" className="text-zinc-400 transition hover:text-white">
            ← Powrót do oferty
          </Link>
          <Link
            href="/#kontakt"
            className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            Chcę podobną stronę
          </Link>
        </div>
      </Container>
    </div>
  );
}

export function ElectricianHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-6 py-4">
        <Link href="/demos/electrician" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 font-bold text-zinc-950">V</span>
          <div>
            <p className="text-base font-bold text-zinc-950">{company.name}</p>
            <p className="text-xs text-zinc-500">Instalacje elektryczne · {company.area}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demos/electrician/kontakt"
          className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Umów wycenę
        </Link>
      </Container>
    </header>
  );
}

export function ElectricianFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold text-white">{company.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
            Nowoczesna strona firmowa dla małej firmy elektrycznej powinna budować zaufanie, porządkować ofertę i skracać drogę do kontaktu.
            Ten projekt pokazuje właśnie taki kierunek wdrożenia.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Nawigacja</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Kontakt</p>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>{company.area}</p>
            <p>{company.hours}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-zinc-950">
      <DemoNotice />
      <ElectricianHeader />
      <main>{children}</main>
      <ElectricianFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = '/demos/electrician/kontakt',
  primaryLabel = 'Umów wycenę',
  secondaryHref,
  secondaryLabel,
  image = '/demo-electrician/hero-reference.jpg',
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.88)_0%,rgba(9,9,11,0.76)_46%,rgba(9,9,11,0.68)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/20 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-[3px] sm:p-10 lg:p-12">
          {eyebrow && <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            {eyebrow}
          </p>}
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-zinc-600">{description}</p> : null}
    </div>
  );
}

export function StatStrip() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <Container className="grid gap-6 py-10 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-4xl font-bold tracking-[-0.04em] text-zinc-950">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{item.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-[#f6f7f8] py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Oferta"
          title="Usługi dopasowane do realnych potrzeb inwestycji"
          description="Obsługujemy nowe instalacje, modernizacje, pomiary oraz prace dla klientów prywatnych i małych firm. Zamiast ogólników pokazujemy konkretny zakres, który klient może szybko odnieść do swojej sytuacji."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{service.icon}</span>
                <span className="h-px flex-1 bg-zinc-200" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-950">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{service.short}</p>
              <div className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm text-zinc-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Dlaczego warto"
          title="Rzetelna firma elektryczna nie sprzedaje chaosu, tylko przewidywalny efekt"
          description="To demo ma cel sprzedażowy, więc najmocniej akcentuje to, co naprawdę obniża obawy klienta: bezpieczeństwo, klarowny proces, porządek wykonania i normalny kontakt bez technicznego bełkotu."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {trustPoints.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-7">
              <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function RealizationsPreview() {
  return (
    <section className="bg-zinc-950 py-20 text-white sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Realizacje"
          title="Przykłady prac, które budują wiarygodność dużo lepiej niż same obietnice"
          description="Dla małej firmy usługowej galeria realizacji robi ogromną robotę sprzedażową. Pokazuje, że za estetyczną stroną stoi też realna usługa i faktycznie wykonane prace."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {realizations.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[16/11]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{item.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/demos/electrician/realizacje" className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Zobacz wszystkie realizacje
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Opinie"
          title="Klienci najczęściej zapamiętują jakość pracy i spokój współpracy"
          description="W branżach lokalnych to właśnie ten fragment często decyduje, czy ktoś wykona telefon. Dlatego opinie są krótkie, konkretne i oparte na realnych obawach klienta."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-7">
              <p className="text-base leading-8 text-zinc-700">“{item.quote}”</p>
              <footer className="mt-6 text-sm font-semibold text-zinc-950">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-[#f6f7f8] py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Proces"
          title="Prosty przebieg współpracy zmniejsza opór przed pierwszym kontaktem"
          description="To ważne szczególnie w droższym pakiecie. Klient ma widzieć nie tylko ładny wygląd strony, ale także to, że cały serwis jest zaprojektowany sprzedażowo i porządkuje decyzję zakupową."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] border border-zinc-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">0{index + 1}</p>
              <h3 className="mt-5 text-lg font-semibold text-zinc-950">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BlogPreviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Blog"
          title="Treści eksperckie pomagają w SEO i budują poczucie, że firma zna swoją pracę"
          description="To jest dokładnie ten element, którego nie opłaca się wrzucać do pakietu wizytówkowego. W przykładzie strony firmowej ma on sens, bo pokazuje wyższą wartość usługi."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/demos/electrician/blog/${post.slug}`}
              className="group flex flex-col rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-7 transition hover:border-amber-400/50 hover:bg-amber-50/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{post.category}</p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950 transition group-hover:text-amber-700">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{post.excerpt}</p>
              <p className="mt-auto pt-6 text-sm font-semibold text-amber-600">Czytaj dalej →</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/demos/electrician/blog" className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white">
            Zobacz wpisy
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="bg-zinc-950 py-20 text-white sm:py-24">
      <Container className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Kontakt</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            Szukasz sprawdzonej firmy elektrycznej do domu, mieszkania albo lokalu?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            Opisz, czego potrzebujesz. W odpowiedzi można szybko uporządkować zakres, ocenić priorytety i przejść do sensownej rozmowy o realizacji.
          </p>
        </div>
        <div className="space-y-4">
          <Link href="/demos/electrician/kontakt" className="flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">
            Wyślij zapytanie
          </Link>
          <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
            Zadzwoń: {company.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
