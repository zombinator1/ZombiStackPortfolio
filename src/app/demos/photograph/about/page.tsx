import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { value: '15+', label: 'Lat Doświadczenia' },
  { value: '500+', label: 'Sesji Zrealizowanych' },
  { value: '10+', label: 'Nagród i Wyróżnień' },
  { value: '100%', label: 'Zaangażowania' },
];

const values = [
  { title: 'Autentyczność', description: 'Wierzę, że najpiękniejsze zdjęcia powstają w naturalnych, spontanicznych momentach. Nie tworzę sztucznych póz, tylko uchwytam prawdziwe emocje.' },
  { title: 'Profesjonalizm', description: 'Wieloletnie doświadczenie, nowoczesny sprzęt i ciągłe doskonalenie warsztatu to fundamenty mojej pracy.' },
  { title: 'Indywidualne Podejście', description: 'Każda sesja jest inna, każdy klient wyjątkowy. Dostosowuję styl i sposób pracy do Twoich potrzeb.' },
  { title: 'Pasja', description: 'Fotografia to nie tylko mój zawód, ale przede wszystkim pasja, którą chcę się dzielić z innymi.' },
];

const equipment = [
  'Canon EOS R5 / R6',
  'Obiektywy Canon serii L',
  'Profesjonalne oświetlenie studyjne',
  'System backup (podwójne zabezpieczenie zdjęć)',
  'Zaawansowane oprogramowanie do obróbki',
];

const awards = [
  { title: 'Wedding Photographer of the Year 2023', org: 'Polish Wedding Awards' },
  { title: 'Top 10 Portrait Photographers', org: 'Photography Masters 2022' },
  { title: 'Best Family Photography', org: 'National Photography Contest 2021' },
];

export default function AboutPage() {
  return (
    <div className="font-sans antialiased">
      {/* Hero */}
      <section className="overflow-hidden bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 font-serif text-4xl font-semibold text-zinc-900 md:text-5xl lg:text-6xl">
                Cześć, jestem Anna
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-zinc-600 md:text-xl">
                Fotograf z pasją, która zamienia chwile w ponadczasowe wspomnienia.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-zinc-600">
                Od ponad 15 lat uwieczniam najważniejsze momenty w życiu ludzi — od wzruszających ceremonii ślubnych, przez radosne sesje rodzinne, po profesjonalne portrety biznesowe. Każde zdjęcie to dla mnie opowieść, którą chcę opowiedzieć z sercem i wyczuciem.
              </p>
              <Link
                href="/demos/photograph/contact"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700"
              >
                Porozmawiajmy o Twojej Sesji
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?auto=format&fit=crop&w=1080&q=80"
                  alt="Anna Kowalska — Photographer"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-amber-700/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="mb-2 font-serif text-4xl font-bold text-zinc-900">{value}</div>
                <div className="text-sm text-zinc-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Moja Historia</h2>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
            <p>Moją przygodę z fotografią rozpoczęłam przypadkowo podczas podróży do Włoch, gdzie po raz pierwszy trzymałam w rękach aparat lustrzanki. To była miłość od pierwszego kliknięcia migawki. Fascynacja światłem, kompozycją i możliwością zatrzymania czasu w jednym kadrze sprawiła, że fotografia stała się moją największą pasją.</p>
            <p>Przez lata rozwijałam swoje umiejętności, uczestnicząc w licznych warsztatach, kursach i zdobywając doświadczenie przy setkach sesji. Specjalizuję się w fotografii ślubnej, portretowej i rodzinnej — tych dziedzinach, gdzie liczy się przede wszystkim umiejętność uchwycenia prawdziwych emocji.</p>
            <p>Dziś, po ponad 15 latach kariery, wciąż z tym samym entuzjazmem podchodzę do każdego projektu. Nie ma dla mnie nic piękniejszego niż widzieć radość w oczach klientów, gdy oglądają swoje zdjęcia.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Moje Podejście do Fotografii</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600">Wartości, którymi kieruję się w pracy</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:border-amber-700">
                <h3 className="mb-4 font-serif text-2xl font-semibold text-zinc-900">{title}</h3>
                <p className="leading-relaxed text-zinc-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-semibold md:text-4xl">Profesjonalny Sprzęt</h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                Pracuję na najwyższej klasy sprzęcie fotograficznym, który gwarantuje doskonałą jakość zdjęć w każdych warunkach. Posiadam pełne backupy — zarówno aparatów, obiektywów jak i kart pamięci.
              </p>
              <ul className="space-y-3">
                {equipment.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?auto=format&fit=crop&w=600&q=80" alt="Camera" fill className="object-cover" unoptimized />
              </div>
              <div className="relative mt-8 aspect-square overflow-hidden rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1770896686915-140095250023?auto=format&fit=crop&w=600&q=80" alt="Photography" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Nagrody i Wyróżnienia</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {awards.map(({ title, org }) => (
              <div key={title} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-700/10">
                  <svg className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">{title}</h3>
                <p className="text-zinc-600">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">Chcesz mnie poznać osobiście?</h2>
          <p className="mb-8 text-lg text-zinc-600">Zapraszam na kawę i rozmowę o Twoich planach na sesję</p>
          <Link href="/demos/photograph/contact" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700">
            Skontaktuj się ze mną
          </Link>
        </div>
      </section>
    </div>
  );
}
