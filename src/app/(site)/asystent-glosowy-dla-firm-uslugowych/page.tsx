import type { Metadata } from 'next';
import Link from 'next/link';
import { TradesAiAbout } from '@/components/marketing/trades-ai-about';
import { TradesAiContactForm } from '@/components/marketing/trades-ai-contact-form';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Nie trać zleceń przez nieodebrane telefony — asystent dla firm usługowych',
  description:
    'Telefoniczny backup dla hydraulików, firm od klimatyzacji i ogrzewania, elektryków oraz wykonawców. Odbiera, kwalifikuje zgłoszenia i zbiera dane, gdy prowadzisz zlecenie albo jesteś po godzinach pracy.',
};

const tradeSegments = ['Hydraulicy', 'Klimatyzacja i ogrzewanie', 'Elektrycy', 'Wykonawcy'];

const painPoints = [
  'Klient dzwoni, gdy prowadzisz zlecenie, jesteś w trasie albo obsługujesz innego klienta.',
  'Nie zostawia wiadomości głosowej, tylko wybiera kolejną firmę z Google lub Map.',
  'Płacisz za widoczność, ale część telefonów przepada, zanim ktokolwiek zdąży zebrać adres i problem.',
];

const benefits = [
  {
    title: 'Więcej zgłoszeń z telefonów, które już masz',
    description:
      'Nie obiecuję magicznie większego ruchu. Chodzi o to, żeby nie tracić osób, które już zadzwoniły, bo potrzebują hydraulika, elektryka, serwisu klimatyzacji lub ogrzewania albo wykonawcy.',
  },
  {
    title: 'Szybka kwalifikacja bez przerywania pracy',
    description:
      'Asystent zbiera typ usterki, adres, pilność, preferowany termin i dane kontaktowe. Ty wracasz do klienta z kontekstem, a nie z pustym numerem w historii połączeń.',
  },
  {
    title: 'Backup 24/7 i w czasie pracy w terenie',
    description:
      'Może działać na osobnym numerze albo jako przekierowanie, gdy nie odbierzesz po kilku sekundach. Recepcja lub Ty nadal odbieracie, gdy możecie.',
  },
  {
    title: 'Mniej chaosu z powtarzalnymi pytaniami',
    description:
      'Godziny pracy, obszar dojazdu, typy usług, tryb awaryjny, orientacyjne widełki i informacja, kiedy oddzwonisz — to wszystko może być obsłużone bez przerywania pracy.',
  },
];

const process = [
  {
    step: '01',
    title: 'Rozmawiamy o Twojej firmie i telefonach',
    description:
      'Krótko ustalamy, jakie usługi robisz, jakie zgłoszenia są najlepsze, kiedy najczęściej nie odbierasz i jakie informacje trzeba zebrać od klienta, żeby oddzwonić sensownie.',
  },
  {
    step: '02',
    title: 'Uruchamiam asystenta i jestem przy Tobie na stałe',
    description:
      'Tworzę asystenta na nowym numerze telefonu lub jako przekierowanie po kilku sekundach bez odpowiedzi. Po wdrożeniu poprawiamy scenariusz rozmowy i masz mój stały support.',
  },
];

const faqItems = [
  {
    question: 'Czy klient zorientuje się, że rozmawia z automatem?',
    answer:
      'Nie udajemy człowieka na siłę. Asystent ma brzmieć profesjonalnie, jasno powiedzieć, że pomaga zebrać zgłoszenie, i szybko przejść do konkretów: co się stało, gdzie, jak pilne i kiedy można oddzwonić.',
  },
  {
    question: 'Czy to zastępuje mnie albo moją recepcję?',
    answer:
      'Nie. To backup wtedy, gdy Ty albo recepcja nie możecie odebrać: prowadzisz zlecenie, jesteś w trasie, obsługujesz innego klienta, jest po godzinach albo linia jest zajęta. Jeśli odbierasz normalnie, nic się nie zmienia.',
  },
  {
    question: 'Co jeśli klient ma pilną awarię?',
    answer:
      'Scenariusz rozmowy może rozpoznawać pilne zgłoszenia, zebrać adres i typ problemu, a potem przekazać Ci pełny kontekst. Dla awarii możesz mieć osobne zasady, np. priorytetowy callback.',
  },
  {
    question: 'Czy asystent będzie obiecywał terminy albo ceny?',
    answer:
      'Tylko jeśli jasno to ustalimy. Bezpieczniejsza wersja na start zbiera informacje, wyjaśnia ogólne zasady i mówi, że finalny termin lub wycena zostaną potwierdzone przez Ciebie.',
  },
  {
    question: 'Czy muszę zmieniać obecny numer telefonu?',
    answer:
      'Nie. Możemy użyć nowego numeru do kampanii i testów albo ustawić przekierowanie po kilku sekundach bez odpowiedzi. Dzięki temu nie musisz przebudowywać całej komunikacji firmy.',
  },
  {
    question: 'Czy to ma sens, jeśli nie mam dużo telefonów?',
    answer:
      'Może nie mieć. Dlatego zaczynamy od rozmowy i prostego sprawdzenia, kiedy telefony wpadają oraz ile warte są typowe zlecenia. Jeśli problem jest marginalny, powiem wprost, że szkoda czasu.',
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-orange-900/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[5%] h-[520px] w-[520px] rounded-full bg-indigo-950/60 blur-[110px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />

      <Container className="relative pb-24 pt-28 sm:pb-32 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              <span className="h-px w-8 bg-orange-600" />
              Telefoniczny backup dla firm w terenie
            </p>
            <h1 className="max-w-4xl text-[clamp(2.35rem,5vw,5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-white">
              Nie trać zleceń, kiedy jesteś{' '}
              <span className="bg-gradient-to-br from-orange-200 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                w trakcie zlecenia.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Klient z pilnym problemem nie zawsze poczeka, aż skończysz montaż, dojedziesz na miejsce albo oddzwonisz po godzinie. Ustawiam asystenta, który odbiera, zbiera dane zgłoszenia i daje Ci drugą szansę na kontakt z potencjalnym klientem.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100"
              >
                Umów krótką rozmowę
              </Link>
              <Link
                href="#jak-dziala"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
              >
                Zobacz jak to działa
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {tradeSegments.map((segment) => (
                <span key={segment} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
                  {segment}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-2xl bg-zinc-950/80 p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Nowe zgłoszenie</p>
                  <p className="mt-1 text-lg font-semibold text-white">Awaria instalacji</p>
                </div>
                <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-200">Pilne</span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ['Problem', 'Brak ciepłej wody / piec zgłasza błąd'],
                  ['Adres', 'Kraków, Podgórze'],
                  ['Termin', 'Dziś po 16:00 lub jutro rano'],
                  ['Kontakt', 'Oddzwonić po zakończeniu obecnego zlecenia'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-200">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                    Zamiast samego nieodebranego połączenia masz gotowy kontekst do oddzwonienia.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-zinc-950 py-18 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Problem</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              To nie jest problem „technologii”. To problem zleceń, które uciekają.
            </h2>
          </div>
          <div className="grid gap-4">
            {painPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-base leading-7 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="korzysci" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Korzyści</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-900 sm:text-4xl">
            Asystent ma robić jedną rzecz: pilnować, żeby telefon od potencjalnego klienta nie zniknął.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Komunikacja jest ustawiona pod firmy usługowe, które pracują w terenie, a nie pod biurowe rozwiązania SaaS. Liczy się adres, zakres zgłoszenia, pilność i szybki powrót do klienta.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white">
                ✓
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">{benefit.title}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="jak-dziala" className="bg-zinc-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Proces</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-900 sm:text-4xl">
              Bez wielkiego projektu. Dwa proste kroki.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Najpierw rozumiemy Twoją firmę i sposób odbierania telefonów. Dopiero potem ustawiamy asystenta tak, żeby pasował do Twoich usług, klientów i godzin pracy.
            </p>
          </div>

          <div className="grid gap-5">
            {process.map((item) => (
              <div key={item.step} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-zinc-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="cena" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Cena</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-900 sm:text-4xl">
            7 dni okresu próbnego, potem od 249 zł miesięcznie.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Cena jest ustawiona tak, żeby łatwo przetestować, czy przechwytywanie zgłoszeń ma sens w Twojej firmie. Jeżeli jedno dodatkowe zlecenie pokrywa koszt, rozmowa robi się konkretna.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/20">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Plan startowy</p>
              <h3 className="mt-3 text-2xl font-bold">Telefoniczny backup</h3>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold tracking-tight">249 zł</p>
              <p className="mt-1 text-sm text-zinc-400">miesięcznie</p>
            </div>
          </div>

          <div className="mt-8 h-px bg-white/10" />

          <ul className="mt-8 space-y-4 text-sm leading-6 text-zinc-300">
            {[
              'Asystent ustawiony pod Twoje usługi, obszar działania i typowe zgłoszenia.',
              'Nowy numer telefonu lub przekierowanie po kilku sekundach bez odpowiedzi.',
              'Zbieranie danych: problem, adres, pilność, termin i kontakt.',
              'Nagrania rozmów są dostępne do odsłuchu; klient jest informowany o nagrywaniu, a materiał pomaga poprawiać obsługę i szybciej wracać do kontekstu zgłoszenia.',
              'Stały support i poprawki scenariusza rozmowy po realnych telefonach.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 text-orange-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#kontakt"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            Sprawdźmy, czy to ma sens u Ciebie
          </Link>
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-zinc-50 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-900 sm:text-4xl">
            Wątpliwości są normalne. Dlatego asystent ma być bezpiecznym backupem, nie sztuczką.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-zinc-200 rounded-3xl border border-zinc-200 bg-white shadow-sm">
          {faqItems.map((item) => (
            <details key={item.question} className="group p-6 open:bg-zinc-50 first:rounded-t-3xl last:rounded-b-3xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-zinc-900">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-lg text-zinc-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CtaSection() {
  const reassurances = [
    'Najpierw rozmowa o Twoich realnych telefonach',
    'Demo dopasowane do hydraulika, firmy od klimatyzacji i ogrzewania, elektryka lub wykonawcy',
    'Jeśli problem jest zbyt mały, powiem to wprost',
  ];

  return (
    <section id="kontakt" className="bg-zinc-950 py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:pt-2">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Zacznijmy od konkretów
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Opisz, kiedy uciekają telefony
              <br />
              <span className="text-zinc-500">pokażę Ci prosty plan.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              Napisz 2–3 zdania o firmie, usługach i sytuacjach, w których nie możesz odebrać. Wrócę z krótką propozycją, jak ustawić asystenta jako backup dla Twoich zgłoszeń.
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {reassurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-orange-800 text-[10px] font-bold text-white shadow-[0_4px_12px_rgba(15,23,42,0.3)]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <TradesAiContactForm />
        </div>
      </Container>
    </section>
  );
}

export default function TradesAiReceptionistPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <TradesAiAbout />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
