import { Link } from 'react-router';
import { Check, Clock, Image, Mail } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Sesje Ślubne',
      price: 'od 2500 zł',
      duration: '8-12 godzin',
      images: '300-500 zdjęć',
      features: [
        'Pełna obsługa fotograficzna ślubu i wesela',
        'Sesja narzeczeńska w prezencie',
        'Profesjonalna obróbka wszystkich zdjęć',
        'Galeria online z możliwością pobrania',
        'Pendrive z pełną rozdzielczością',
        'Album premium (opcjonalnie)',
        'Dodatkowy fotograf (opcjonalnie)',
      ],
      popular: true,
    },
    {
      title: 'Sesje Portretowe',
      price: 'od 400 zł',
      duration: '1-2 godziny',
      images: '30-50 zdjęć',
      features: [
        'Sesja w plenerze lub studio',
        'Pomoc w doborze lokalizacji',
        'Profesjonalny retusz zdjęć',
        'Galeria online',
        'Zdjęcia w pełnej rozdzielczości',
        'Konsultacja przed sesją',
      ],
      popular: false,
    },
    {
      title: 'Sesje Rodzinne',
      price: 'od 500 zł',
      duration: '1-2 godziny',
      images: '40-60 zdjęć',
      features: [
        'Sesja plenerowa lub w domu',
        'Naturalna, swobodna atmosfera',
        'Praca z dziećmi',
        'Profesjonalna obróbka zdjęć',
        'Galeria online',
        'Zdjęcia w pełnej rozdzielczości',
        'Możliwość druku wybranych zdjęć',
      ],
      popular: false,
    },
    {
      title: 'Sesje Biznesowe',
      price: 'od 600 zł',
      duration: '2-3 godziny',
      images: '50-80 zdjęć',
      features: [
        'Portrety biznesowe / headshots',
        'Zdjęcia eventów korporacyjnych',
        'Fotografia produktowa',
        'Ekspresowa obróbka (24-48h)',
        'Zdjęcia w kilku formatach',
        'Licencja komercyjna',
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    {
      title: 'Album Premium',
      description: 'Wysokiej jakości album z najlepszymi zdjęciami z sesji',
      price: 'od 800 zł',
    },
    {
      title: 'Wydruki Fine Art',
      description: 'Profesjonalne wydruki na papierze artystycznym',
      price: 'od 150 zł',
    },
    {
      title: 'Dodatkowy Fotograf',
      description: 'Drugi fotograf do obsługi ślubów i eventów',
      price: '500 zł',
    },
    {
      title: 'Sesja Poślubna',
      description: 'Romantyczna sesja zdjęciowa po ślubie',
      price: 'od 800 zł',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Kontakt',
      description: 'Skontaktuj się ze mną mailowo lub telefonicznie, aby omówić wstępne szczegóły',
    },
    {
      step: '02',
      title: 'Konsultacja',
      description: 'Spotykamy się (osobiście lub online) aby omówić Twoje potrzeby i oczekiwania',
    },
    {
      step: '03',
      title: 'Rezerwacja',
      description: 'Podpisujemy umowę i wpłacasz zaliczkę, która rezerwuje termin',
    },
    {
      step: '04',
      title: 'Sesja',
      description: 'W ustalonym terminie przeprowadzam sesję zdjęciową',
    },
    {
      step: '05',
      title: 'Selekcja',
      description: 'Wstępnie wybieram i obrabiamy najlepsze zdjęcia',
    },
    {
      step: '06',
      title: 'Odbiór',
      description: 'Otrzymujesz gotowe zdjęcia w galerii online i na pendrive',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-zinc-900 mb-6">
              Usługi i Cennik
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              Oferuję szeroki zakres usług fotograficznych dostosowanych do Twoich potrzeb. Każdy pakiet można indywidualnie rozszerzyć o dodatkowe opcje.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white border rounded-2xl p-8 ${
                  service.popular
                    ? 'border-amber-700 shadow-xl scale-105'
                    : 'border-zinc-200 shadow-sm hover:shadow-lg transition-shadow'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-700 text-white text-sm font-semibold rounded-full">
                    Najpopularniejsze
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  <div className="text-3xl font-bold text-amber-700 mb-4">{service.price}</div>
                  
                  <div className="space-y-2 text-sm text-zinc-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Image className="h-4 w-4" />
                      {service.images}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                      <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-colors ${
                    service.popular
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
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Usługi Dodatkowe
            </h2>
            <p className="text-lg text-zinc-600">
              Rozszerz swój pakiet o dodatkowe opcje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-amber-700">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Jak Wygląda Współpraca?
            </h2>
            <p className="text-lg text-zinc-600">
              Prosty proces od pierwszego kontaktu do odbioru zdjęć
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Najczęściej Zadawane Pytania
            </h2>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="Jak długo trwa oczekiwanie na zdjęcia?"
              answer="Standardowo zdjęcia są gotowe w ciągu 2-3 tygodni od sesji. W przypadku ślubów może to potrwać do 4 tygodni. Oferuję także opcję ekspresowej obróbki."
            />
            <FAQItem
              question="Czy dojeżdżasz poza miasto?"
              answer="Tak, obsługuję sesje w całej Polsce. Koszty dojazdu poza Warszawę i okolice są ustalane indywidualnie."
            />
            <FAQItem
              question="Czy mogę wybrać zdjęcia do obróbki?"
              answer="Wszystkie zdjęcia, które trafiają do galerii, są już profesjonalnie obrobione. Wykonuję wstępną selekcję, wybierając najlepsze ujęcia."
            />
            <FAQItem
              question="Jak wygląda rezerwacja terminu?"
              answer="Termin rezerwujesz wpłacając zaliczkę (zazwyczaj 30% wartości usługi) i podpisując umowę. Pozostałą kwotę płacisz przed lub w dniu sesji."
            />
            <FAQItem
              question="Co jeśli pogoda nie dopisze?"
              answer="W przypadku sesji plenerowych zawsze mamy plan B. Możemy przełożyć termin lub wybrać alternatywną lokalizację."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Mail className="h-12 w-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Potrzebujesz indywidualnej wyceny?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Skontaktuj się ze mną, aby omówić szczegóły i otrzymać spersonalizowaną ofertę
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
          >
            Zapytaj o Wycenę
          </Link>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-zinc-200">
      <h3 className="text-lg font-semibold text-zinc-900 mb-2">{question}</h3>
      <p className="text-zinc-600">{answer}</p>
    </div>
  );
}
