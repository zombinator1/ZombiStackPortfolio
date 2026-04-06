import Link from 'next/link';
import Image from 'next/image';

export default function PersonalTrainerDemo() {
  return (
    <div className="font-sans antialiased">
      <DemoBanner />
      <Nav />
      <Hero />
      <TrustStrip />
      <Philosophy />
      <Offer />
      <Pricing />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

/* ─── Demo Banner ─────────────────────────────────────────────────────────── */

function DemoBanner() {
  return (
    <div className="flex items-center justify-between gap-4 bg-stone-900 px-4 py-2.5 sm:px-6">
      <p className="text-xs text-stone-400">
        <span className="font-semibold text-stone-200">Tryb demo</span> — treści są fikcyjne. Przykład jak może wyglądać Twoja strona.
      </p>
      <Link
        href="/#kontakt"
        className="shrink-0 rounded-full bg-rose-400 px-3 py-1 text-xs font-bold text-white transition hover:bg-rose-300"
      >
        Chcę taką stronę →
      </Link>
    </div>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div>
          <span className="text-base font-bold tracking-tight text-stone-900">Marta Kowalska</span>
          <span className="ml-2 hidden text-xs font-medium text-stone-400 sm:inline">Personal Trainer</span>
        </div>
        <nav className="hidden items-center gap-7 md:flex">
          {[
            ['O mnie', '#o-mnie'],
            ['Trening', '#trening'],
            ['Cennik', '#cennik'],
            ['Opinie', '#opinie'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-stone-500 transition hover:text-stone-900">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(244,63,94,0.25)] transition hover:-translate-y-0.5 hover:bg-rose-400"
        >
          Umów konsultację
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-stone-950">
      <Image
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
        alt="Marta Kowalska — trenerka personalna"
        fill
        className="object-cover object-top opacity-40"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 pb-24 pt-10 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-rose-300/20 bg-rose-400/10 px-4 py-2 text-sm font-medium text-rose-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            Certyfikowana trenerka personalna · Warszawa
          </div>

          <h1 className="text-5xl font-bold leading-[1.07] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Trening, który zmienia
            <span className="block bg-gradient-to-r from-rose-300 to-rose-400 bg-clip-text text-transparent">
              więcej niż sylwetkę
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-300">
            Jestem Marta — pomagam kobietom osiągnąć trwałe rezultaty bez skrajnych diet i wyczerpujących planów. Skutecznie, mądrze i z przyjemnością.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(244,63,94,0.4)] transition hover:-translate-y-0.5 hover:bg-rose-400"
            >
              Bezpłatna konsultacja →
            </a>
            <a
              href="#cennik"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Zobacz cennik
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Strip ─────────────────────────────────────────────────────────── */

function TrustStrip() {
  return (
    <section className="border-b border-stone-100 bg-white py-10">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: '8 lat', label: 'doświadczenia' },
            { value: '300+', label: 'podopiecznych' },
            { value: '4.9★', label: 'średnia opinii' },
            { value: '2×', label: 'certyfikowana' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-stone-900 sm:text-3xl">{item.value}</div>
              <div className="mt-0.5 text-sm text-stone-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Philosophy ──────────────────────────────────────────────────────────── */

function Philosophy() {
  return (
    <section id="o-mnie" className="bg-stone-50 py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-rose-200/40 to-stone-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80"
                alt="Marta Kowalska"
                width={600}
                height={700}
                className="h-[480px] w-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-5 shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-rose-400">Certyfikaty</div>
              <div className="mt-1 text-sm font-medium text-stone-700">NASM · FPI · Dietetyka</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Moje podejście</p>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
              Efekty, które zostają na lata — nie na miesiąc
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-500">
              Wiem, że większość kobiet próbowała już wielu metod. Diety cud, morderczy cardio, plany z internetu. I większość się zatrzymała, bo brakowało spersonalizowanego podejścia i prawdziwego wsparcia.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-500">
              Moja praca opiera się na trzech filarach: treningu dopasowanym do Twojego ciała, edukacji żywieniowej bez wyrzeczeń i konsekwentnej motywacji — bez oceniania.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {[
                'Plan treningowy dopasowany do Twojego trybu życia',
                'Wsparcie dietetyczne bez skrajnych ograniczeń',
                'Stały kontakt między sesjami przez WhatsApp',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
                    <svg className="h-3 w-3 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed text-stone-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Offer ───────────────────────────────────────────────────────────────── */

const offerItems = [
  {
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    title: 'Trening personalny (1:1)',
    description: 'Pełna uwaga skupiona na Tobie. Prawidłowa technika, bieżące korekty i plan dostosowywany co 4 tygodnie. Idealne dla osób, które chcą szybkich i pewnych wyników.',
    tag: 'Najpopularniejszy',
  },
  {
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    title: 'Coaching online',
    description: 'Trening i wsparcie dietetyczne bez wychodzenia z domu. Cotygodniowe check-iny, plan na miesiąc z góry i nieograniczony kontakt przez aplikację.',
    tag: 'Elastyczny',
  },
  {
    image: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?auto=format&fit=crop&w=800&q=80',
    title: 'Trening w parach / duo',
    description: 'Przyjdź z przyjaciółką i trenujcie razem. Tańsza opcja, ta sama jakość i świetna motywacja wzajemna. Dostępne terminy wieczorne.',
    tag: 'Duo',
  },
];

function Offer() {
  return (
    <section id="trening" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Oferta</p>
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-stone-900 sm:text-5xl">Jak możemy współpracować</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-500">
            Wybieram formę pracy razem z Tobą — dopasowuję ją do Twojego stylu życia, nie odwrotnie.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {offerItems.map((item) => (
            <div key={item.title} className="group flex flex-col overflow-hidden rounded-3xl border border-stone-100 bg-stone-50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">
                  {item.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="flex-1 text-sm leading-7 text-stone-500">{item.description}</p>
                <a href="#cennik" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-500 transition hover:gap-3">
                  Zobacz cennik
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────────────────── */

const plans = [
  {
    name: 'Start',
    price: '600',
    unit: '4 treningi',
    perSession: '150 zł / trening',
    description: 'Idealne na poznanie się i sprawdzenie czy ta forma treningów jest dla Ciebie.',
    features: [
      'Plan treningowy na cały miesiąc',
      '4 sesje treningowe (60 min)',
      'Ocena postawy i ruchomości',
      'Wstępne wskazówki żywieniowe',
      'Kontakt mailowy',
    ],
    cta: 'Zacznij od startu',
    highlight: false,
  },
  {
    name: 'Transform',
    price: '1 080',
    unit: '8 treningów',
    perSession: '135 zł / trening',
    description: 'Najczęściej wybierany pakiet — wystarczający czas, żeby zobaczyć realne efekty.',
    features: [
      'Plan treningowy + aktualizacja co 4 tyg.',
      '8 sesji treningowych (60 min)',
      'Indywidualny plan żywieniowy',
      'Analiza składu ciała',
      'Kontakt WhatsApp w tygodniu',
      'Cotygodniowy check-in online',
    ],
    cta: 'Wybieram Transform',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '1 440',
    unit: '12 treningów',
    perSession: '120 zł / trening',
    description: 'Dla osób zmotywowanych i nastawionych na maksymalne rezultaty.',
    features: [
      'Plan treningowy + aktualizacja co 3 tyg.',
      '12 sesji treningowych (75 min)',
      'Pełny plan żywieniowy + jadłospis',
      'Analiza składu ciała 2×',
      'Kontakt WhatsApp 7 dni w tygodniu',
      'Cotygodniowy check-in online',
      'Nieograniczone konsultacje mailowe',
    ],
    cta: 'Wybieram Elite',
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="cennik" className="bg-stone-50 py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Cennik</p>
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-stone-900 sm:text-5xl">Pakiety treningowe</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-500">
            Każdy pakiet zaczyna się od bezpłatnej konsultacji — zero zobowiązań.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? 'bg-stone-900 text-white shadow-[0_24px_80px_rgba(0,0,0,0.25)]'
                  : 'border border-stone-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-rose-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    Najczęściej wybierany
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className={`mb-1 text-sm font-semibold uppercase tracking-widest ${plan.highlight ? 'text-rose-400' : 'text-rose-500'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1.5">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-stone-900'}`}>{plan.price}</span>
                  <span className={`mb-1 text-sm font-medium ${plan.highlight ? 'text-stone-400' : 'text-stone-400'}`}>zł</span>
                  <span className={`mb-1 text-sm ${plan.highlight ? 'text-stone-400' : 'text-stone-400'}`}>/ {plan.unit}</span>
                </div>
                <div className={`mt-1 text-xs ${plan.highlight ? 'text-stone-500' : 'text-stone-400'}`}>{plan.perSession}</div>
                <p className={`mt-3 text-sm leading-relaxed ${plan.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlight ? 'bg-rose-500/20' : 'bg-rose-50'}`}>
                      <svg className="h-3 w-3 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className={`text-sm leading-relaxed ${plan.highlight ? 'text-stone-300' : 'text-stone-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-8 block w-full rounded-full py-3.5 text-center text-sm font-bold transition hover:-translate-y-0.5 ${
                  plan.highlight
                    ? 'bg-rose-500 text-white shadow-[0_8px_30px_rgba(244,63,94,0.4)] hover:bg-rose-400'
                    : 'border border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-300 hover:bg-stone-100'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-400">
          Wolisz trening online? Coaching miesięczny od 499 zł.{' '}
          <a href="#kontakt" className="font-medium text-rose-400 hover:text-rose-500">Zapytaj o szczegóły.</a>
        </p>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────────── */

const reviews = [
  {
    initials: 'KW',
    name: 'Kasia Wiśniewska',
    context: 'Pakiet Transform, 6 miesięcy',
    rating: 5,
    text: 'Zaczęłam pracę z Martą po 3 miesiącach bezskutecznego trenowania na siłowni. W ciągu 4 miesięcy schudłam 11 kg i — co ważniejsze — nauczyłam się jeść i trenować dla siebie, nie dla wagi.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    initials: 'AN',
    name: 'Ania Nowak',
    context: 'Coaching online, 3 miesiące',
    rating: 5,
    text: 'Miałam dużo obaw, bo mieszkam poza Warszawą i nie mogłam trenować stacjonarnie. Okazało się, że coaching online z Martą działa świetnie. Cotygodniowe check-iny trzymają mnie w ryzach.',
    color: 'bg-stone-100 text-stone-600',
  },
  {
    initials: 'MJ',
    name: 'Magda Jabłońska',
    context: 'Trening personalny 1:1',
    rating: 5,
    text: 'Po ciąży bałam się wrócić na siłownię. Marta podeszła do mnie z cierpliwością i pełnym profesjonalizmem. Dziś czuję się lepiej niż przed ciążą. Serdecznie polecam każdej mamie.',
    color: 'bg-amber-100 text-amber-700',
  },
];

function Testimonials() {
  return (
    <section id="opinie" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Efekty</p>
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-stone-900 sm:text-5xl">Co mówią podopieczne</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col rounded-3xl border border-stone-100 bg-stone-50 p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${r.color}`}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">{r.name}</div>
                  <div className="text-xs text-stone-400">{r.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA / Contact ───────────────────────────────────────────────────────── */

function CtaSection() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-stone-900 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.07),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Zacznijmy</p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Pierwsza konsultacja jest bezpłatna
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-400">
              Porozmawiamy o Twoich celach, stylu życia i nawykach. Bez zobowiązań — po prostu sprawdzimy, czy dobrze się dogadamy.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {[
                { icon: '📍', label: 'Lokalizacja', value: 'Siłownia Wola, Warszawa (metro Rondo ONZ)' },
                { icon: '📱', label: 'Telefon', value: '+48 501 234 567' },
                { icon: '✉️', label: 'E-mail', value: 'marta@trenujzwolodystyka.pl' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-lg ring-1 ring-stone-700">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-stone-500">{c.label}</div>
                    <div className="text-sm font-medium text-stone-300">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-stone-800 bg-stone-900/80 p-8 ring-1 ring-white/5 backdrop-blur">
            <p className="mb-6 text-base font-semibold text-white">Napisz do mnie</p>
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactField label="Imię" placeholder="Kasia" type="text" />
                <ContactField label="Telefon" placeholder="+48 500 000 000" type="tel" />
              </div>
              <ContactField label="Cel treningowy" placeholder="np. Schudnięcie, wzmocnienie, powrót po ciąży..." type="text" />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-stone-400">Wiadomość (opcjonalnie)</label>
                <textarea
                  rows={3}
                  placeholder="Napisz cokolwiek — kiedy możesz, jaki masz tryb życia..."
                  className="w-full resize-none rounded-2xl border border-stone-700 bg-stone-800 px-4 py-3 text-sm text-white outline-none placeholder:text-stone-600 focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/20"
                />
              </div>
              <button className="w-full rounded-full bg-rose-500 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(244,63,94,0.4)] transition hover:-translate-y-0.5 hover:bg-rose-400">
                Wyślij — odezwę się w ciągu 24h
              </button>
              <p className="text-center text-xs text-stone-600">Zero spamu. Tylko jeden kontakt ode mnie.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-stone-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-stone-700 bg-stone-800 px-4 py-3 text-sm text-white outline-none placeholder:text-stone-600 focus:border-rose-400/50 focus:ring-1 focus:ring-rose-400/20"
      />
    </div>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:px-8">
        <div>
          <span className="text-sm font-semibold text-stone-300">Marta Kowalska</span>
          <span className="ml-2 text-xs text-stone-600">Personal Trainer · Warszawa</span>
        </div>
        <p className="text-xs text-stone-700">© 2025 Marta Kowalska. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
