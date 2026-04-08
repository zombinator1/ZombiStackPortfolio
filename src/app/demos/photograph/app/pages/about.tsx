import { Link } from 'react-router';
import { Award, Camera, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Camera, value: '15+', label: 'Lat Doświadczenia' },
    { icon: Users, value: '500+', label: 'Sesji Zrealizowanych' },
    { icon: Award, value: '10+', label: 'Nagród i Wyróżnień' },
    { icon: Heart, value: '100%', label: 'Zaangażowania' },
  ];

  const values = [
    {
      title: 'Autentyczność',
      description: 'Wierzę, że najpiękniejsze zdjęcia powstają w naturalnych, spontanicznych momentach. Nie tworzę sztucznych póz, tylko uchwytam prawdziwe emocje.',
    },
    {
      title: 'Profesjonalizm',
      description: 'Wieloletnie doświadczenie, nowoczesny sprzęt i ciągłe doskonalenie warsztatu to fundamenty mojej pracy.',
    },
    {
      title: 'Indywidualne Podejście',
      description: 'Każda sesja jest inna, każdy klient wyjątkowy. Dostosowuję styl i sposób pracy do Twoich potrzeb.',
    },
    {
      title: 'Pasja',
      description: 'Fotografia to nie tylko mój zawód, ale przede wszystkim pasja, którą chcę się dzielić z innymi.',
    },
  ];

  const equipment = [
    'Canon EOS R5 / R6',
    'Obiektywy Canon serii L',
    'Profesjonalne oświetlenie studyjne',
    'System backup (podwójne zabezpieczenie zdjęć)',
    'Zaawansowane oprogramowanie do obróbki',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-zinc-900 mb-6">
                Cześć, jestem Anna
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                Fotograf z pasją, która zamienia chwile w ponadczasowe wspomnienia.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Od ponad 15 lat uwieczniam najważniejsze momenty w życiu ludzi - od wzruszających ceremonii ślubnych, przez radosne sesje rodzinne, po profesjonalne portrety biznesowe. Każde zdjęcie to dla mnie opowieść, którą chcę opowiedzieć z sercem i wyczuciem.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
              >
                Porozmawiajmy o Twojej Sesji
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGNhbWVyYXxlbnwxfHx8fDE3NzU2NjEzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Anna Kowalska - Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-700/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-amber-700" />
                </div>
                <div className="text-4xl font-serif font-bold text-zinc-900 mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-8 text-center">
            Moja Historia
          </h2>
          <div className="prose prose-lg max-w-none text-zinc-700 leading-relaxed space-y-6">
            <p>
              Moją przygodę z fotografią rozpoczęłam przypadkowo podczas podróży do Włoch, gdzie po raz pierwszy trzymałam w rękach aparat lustrzanki. To była miłość od pierwszego kliknięcia migawki. Fascynacja światłem, kompozycją i możliwością zatrzymania czasu w jednym kadrze sprawiła, że fotografia stała się moją największą pasją.
            </p>
            <p>
              Przez lata rozwijałam swoje umiejętności, uczestnicząc w licznych warsztatach, kursach i zdobywając doświadczenie przy setkach sesji. Specjalizuję się w fotografii ślubnej, portretowej i rodzinnej - tych dziedzinach, gdzie liczy się przede wszystkim umiejętność uchwycenia prawdziwych emocji i budowania relacji z ludźmi.
            </p>
            <p>
              Dziś, po ponad 15 latach kariery, wciąż z tym samym entuzjazmem podchodzę do każdego projektu. Nie ma dla mnie nic piękniejszego niż widzieć radość w oczach klientów, gdy oglądają swoje zdjęcia. To właśnie ta reakcja motywuje mnie do ciągłego doskonalenia i poszukiwania nowych, kreatywnych rozwiązań.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Moje Podejście do Fotografii
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Wartości, którymi kieruję się w pracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 hover:border-amber-700 transition-colors"
              >
                <h3 className="text-2xl font-serif font-semibold text-zinc-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Profesjonalny Sprzęt
              </h2>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                Pracuję na najwyższej klasy sprzęcie fotograficznym, który gwarantuje doskonałą jakość zdjęć w każdych warunkach. Posiadam pełne backup'y - zarówno aparatów, obiektywów jak i kart pamięci, aby zabezpieczyć każdą sesję.
              </p>
              <ul className="space-y-3">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-zinc-200">
                    <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGNhbWVyYXxlbnwxfHx8fDE3NzU2NjEzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Camera equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770896686915-140095250023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzU2NjEzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Photography work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Nagrody i Wyróżnienia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                Wedding Photographer of the Year 2023
              </h3>
              <p className="text-zinc-600">Polish Wedding Awards</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                Top 10 Portrait Photographers
              </h3>
              <p className="text-zinc-600">Photography Masters 2022</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                Best Family Photography
              </h3>
              <p className="text-zinc-600">National Photography Contest 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-6">
            Chcesz mnie poznać osobiście?
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Zapraszam na kawę i rozmowę o Twoich planach na sesję
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
          >
            Skontaktuj się ze mną
          </Link>
        </div>
      </section>
    </div>
  );
}
