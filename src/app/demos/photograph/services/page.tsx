import Link from 'next/link';

const services = [
  {
    title: 'Sesje Ślubne',
    price: 'od 2500 zł',
    duration: '8–12 godzin',
    images: '300–500 zdjęć',
    popular: true,
    features: [
      'Pełna obsługa fotograficzna ślubu i wesela',
      'Sesja narzeczeńska w prezencie',
      'Profesjonalna obróbka wszystkich zdjęć',
      'Galeria online z możliwością pobrania',
      'Pendrive z pełną rozdzielczością',
      'Album premium (opcjonalnie)',
      'Dodatkowy fotograf (opcjonalnie)',
    ],
  },
  {
    title: 'Sesje Portretowe',
    price: 'od 400 zł',
    duration: '1–2 godziny',
    images: '30–50 zdjęć',
    popular: false,
    features: [
      'Sesja w plenerze lub studio',
      'Pomoc w doborze lokalizacji',
      'Profesjonalny retusz zdjęć',
      'Galeria online',
      'Zdjęcia w pełnej rozdzielczości',
      'Konsultacja przed sesją',
    ],
  },
  {
    title: 'Sesje Rodzinne',
    price: 'od 500 zł',
    duration: '1–2 godziny',
    images: '40–60 zdjęć',
    popular: false,
    features: [
      'Sesja plenerowa lub w domu',
      'Naturalna, swobodna atmosfera',
      'Praca z dziećmi',
      'Profesjonalna obróbka zdjęć',
      'Galeria online',
      'Zdjęcia w pełnej rozdzielczości',
    ],
  },
  {
    title: 'Sesje Biznesowe',
    price: 'od 600 zł',
    duration: '2–3 godziny',
    images: '50–80 zdjęć',
    popular: false,
    features: [
      'Portrety biznesowe / headshots',
      'Zdjęcia eventów korporacyjnych',
      'Fotografia produktowa',
      'Ekspresowa obróbka (24–48h)',
      'Zdjęcia w kilku formatach',
      'Licencja komercyjna',
    ],
  },
];

const additionalServices = [
  { title: 'Album Premium', description: 'Wysokiej jakości album z najlepszymi zdjęciami z sesji', price: 'od 800 zł' },
  { title: 'Wydruki Fine Art', description: 'Profesjonalne wydruki na papierze artystycznym', price: 'od 150 zł' },
  { title: 'Dodatkowy Fotograf', description: 'Drugi fotograf do obsługi ślubów i eventów', price: '500 zł' },
  { title: 'Sesja Poślubna', description: 'Romantyczna sesja zdjęciowa po ślubie', price: 'od 800 zł' },
];

const process = [
  { step: '01', title: 'Kontakt', description: 'Skontaktuj się ze mną mailowo lub telefonicznie, aby omówić wstępne szczegóły' },
  { step: '02', title: 'Konsultacja', description: 'Spotykamy się (osobiście lub online) aby omówić Twoje potrzeby i oczekiwania' },
  { step: '03', title: 'Rezerwacja', description: 'Podpisujemy umowę i wpłacasz zaliczkę, która rezerwuje termin' },
  { step: '04', title: 'Sesja', description: 'W ustalonym terminie przeprowadzam sesję zdjęciową' },
  { step: '05', title: 'Selekcja', description: 'Wstępnie wybieram i obrabiamy najlepsze zdjęcia' },
  { step: '06', title: 'Odbiór', description: 'Otrzymujesz gotowe zdjęcia w galerii online i na pendrive' },
];

const faq = [
  { q: 'Jak długo trwa oczekiwanie na zdjęcia?', a: 'Standardowo zdjęcia są gotowe w ciągu 2–3 tygodni od sesji. W przypadku ślubów może to potrwać do 4 tygodni. Oferuję także opcję ekspresowej obróbki.' },
  { q: 'Czy dojeżdżasz poza miasto?', a: 'Tak, obsługuję sesje w całej Polsce. Koszty dojazdu poza Warszawę i okolice są ustalane indywidualnie.' },
  { q: 'Jak wygląda rezerwacja terminu?', a: 'Termin rezerwujesz wpłacając zaliczkę (zazwyczaj 30% wartości usługi) i podpisując umowę. Pozostałą kwotę płacisz przed lub w dniu sesji.' },
  { q: 'Co jeśli pogoda nie dopisze?', a: 'W przypadku sesji plenerowych zawsze mamy plan B. Możemy przełożyć termin lub wybrać alternatywną lokalizację.' },
];

export default function ServicesPage() {
  return (
    <div className="font-sans antialiased">
      {/* Hero */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-serif text-4xl font-semibold text-zinc-900 md:text-5xl lg:text-6xl">
              Usługi i Cennik
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
              Oferuję szeroki zakres usług fotograficznych dostosowanych do Twoich potrzeb. Każdy pakiet można indywidualnie rozszerzyć o dodatkowe opcje.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-2xl bg-white p-8 ${
                  s.popular ? 'border-2 border-amber-700 shadow-xl lg:scale-105' : 'border border-zinc-200 shadow-sm'
                }`}
              >
                {s.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-700 px-4 py-1 text-sm font-semibold text-white">
                    Najpopularniejsze
                  </div>
                )}
                <h3 className="mb-2 font-serif text-xl font-semibold text-zinc-900">{s.title}</h3>
                <div className="mb-4 text-2xl font-bold text-amber-700">{s.price}</div>
                <div className="mb-6 space-y-1.5 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    {s.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" /></svg>
                    {s.images}
                  </div>
                </div>
                <ul className="mb-8 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demos/photograph/contact"
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                    s.popular
                      ? 'bg-amber-700 text-white hover:bg-amber-600'
                      : 'border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  Zapytaj o termin
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Usługi Dodatkowe</h2>
            <p className="text-lg text-zinc-600">Rozszerz swój pakiet o dodatkowe opcje</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map(({ title, description, price }) => (
              <div key={title} className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">{title}</h3>
                <p className="mb-4 text-sm text-zinc-600">{description}</p>
                <div className="text-2xl font-bold text-amber-700">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Jak Wygląda Współpraca?</h2>
            <p className="text-lg text-zinc-600">Prosty proces od pierwszego kontaktu do odbioru zdjęć</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map(({ step, title, description }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-700 text-lg font-bold text-white">{step}</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">{title}</h3>
                  <p className="text-zinc-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Najczęściej Zadawane Pytania</h2>
          <div className="space-y-6">
            {faq.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-zinc-900">{q}</h3>
                <p className="text-zinc-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-serif text-3xl font-semibold md:text-4xl">Potrzebujesz indywidualnej wyceny?</h2>
          <p className="mb-8 text-lg text-zinc-300">Skontaktuj się ze mną, aby omówić szczegóły i otrzymać spersonalizowaną ofertę</p>
          <Link href="/demos/photograph/contact" className="inline-flex items-center gap-2 rounded-full bg-amber-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-600">
            Zapytaj o Wycenę
          </Link>
        </div>
      </section>
    </div>
  );
}
