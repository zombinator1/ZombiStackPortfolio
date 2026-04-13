/*
 * Design note for this file:
 * Neo-constructivist athletic modernism.
 * Ink navy, chalk white, burnt red and warm gold accents.
 * Strong editorial typography, asymmetry, technical panels, premium sports atmosphere.
 * Every section should reinforce sportowy profesjonalizm, mierzalny progres i DNA sportów walki.
 */
import Link from 'next/link';
import { Bebas_Neue, Manrope } from 'next/font/google';

const displayFont = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const heroImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-hero-combat-athletic-mF4o3dvFfSLZG9GPf7Erp2.webp';
const serviceImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-service-strength-session-hAKHmUmkBQyLcrkN6RAfwj.webp';
const portraitImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-language-contact-portrait-abSzVKFqhJYBzL83fXJ4Uy.webp';
const abstractImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-abstract-performance-grid-iaQfrUD7bKpJfjruAJvGXB.webp';

const stats = [
  { value: '10+', label: 'lat treningu i startów' },
  { value: '3', label: 'języki współpracy' },
  { value: '1:1', label: 'indywidualne prowadzenie' },
  { value: '100%', label: 'skupienia na celu' },
];

const offer = [
  {
    title: 'Trening personalny',
    description:
      'Budowanie siły, poprawa sylwetki i regularny trening dopasowany do Twojego poziomu, celu i tempa życia.',
  },
  {
    title: 'Przygotowanie do testów sprawności fizycznej na studia i w wojsku',
    description:
      'Ukierunkowany trening dla osób, które chcą dobrze przygotować się do testów sprawnościowych na studia, do służby lub do wymagań wojskowych.',
  },
  {
    title: 'Trening sportów walki',
    description:
      'Trening oparty na technice, kontroli ruchu, dynamice i charakterze sportów walki. Dla osób, które chcą rozwijać sprawność, refleks i pewność siebie.',
  },
  {
    title: 'Opieka online',
    description:
      'Plan treningowy, prowadzenie i regularne wsparcie dla osób, które chcą trenować skutecznie także poza spotkaniami stacjonarnymi.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Konsultacja i cel',
    description:
      'Zaczynamy od rozmowy o Twoim celu, poziomie, ograniczeniach i kierunku pracy.',
  },
  {
    step: '02',
    title: 'Plan działania',
    description:
      'Dobieram formę współpracy i system treningowy dopasowany do Twoich potrzeb.',
  },
  {
    step: '03',
    title: 'Realny progres',
    description:
      'Trenujesz konkretnie, z jasnym planem i naciskiem na technikę, dyscyplinę oraz wynik.',
  },
];

const effects = [
  {
    title: 'Więcej siły',
    description: 'Mocniejsze ciało, które lepiej radzi sobie w treningu i na co dzień.',
  },
  {
    title: 'Lepsza sylwetka',
    description: 'Efekt regularnej, dobrze zaplanowanej pracy.',
  },
  {
    title: 'Większa sprawność',
    description: 'Lepsza kondycja, dynamika, koordynacja i kontrola ruchu.',
  },
  {
    title: 'Pewność siebie',
    description: 'Większe poczucie kontroli nad ciałem i własnym progresem.',
  },
];

const testimonials = [
  'W końcu trenuję według planu, który ma sens. Wszystko jest jasne, konkretne i dopasowane do mojego celu.',
  'To nie jest zwykły trening. Czuję się silniejszy, sprawniejszy i dużo pewniejszy siebie.',
  'Profesjonalne podejście, dobra energia i realne efekty. Wiem, po co trenuję i widzę postęp.',
];

const faqs = [
  {
    question: 'Czy muszę mieć doświadczenie treningowe?',
    answer: 'Nie. Współpraca może zaczynać się od poziomu początkującego.',
  },
  {
    question: 'Czy to oferta tylko dla osób trenujących sporty walki?',
    answer:
      'Nie. Sporty walki są ważnym elementem podejścia, ale oferta jest skierowana do wszystkich, którzy chcą być silniejsi, sprawniejsi i pewniejsi siebie.',
  },
  {
    question: 'Czy mogę trenować z celem sylwetkowym?',
    answer:
      'Tak. Poprawa sylwetki jest jednym z naturalnych efektów dobrze poprowadzonego treningu.',
  },
  {
    question: 'Czy jest możliwość współpracy online?',
    answer: 'Tak. Możesz pracować także zdalnie, w oparciu o plan, prowadzenie i regularne wsparcie.',
  },
  {
    question: 'W jakich językach może odbywać się współpraca?',
    answer: 'W języku polskim, angielskim i hiszpańskim.',
  },
];

export default function PersonalTrainerDemo() {
  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} bg-[#09111d] text-white [font-family:var(--font-body)]`}
    >
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <Audience />
        <AboutSection />
        <OfferSection />
        <ProcessSection />
        <WhyItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function DemoBanner() {
  return (
    <div className="border-b border-white/10 bg-[#050a12] px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-white/60 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Demo sprzedażowe • wszystkie dane i treści są fikcyjne</p>
        <div className="flex items-center gap-3 text-white/80">
          <Link href="/#demo" className="transition hover:text-[#f3b24f]">
            Wróć do oferty
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Link href="/#kontakt" className="transition hover:text-[#f3b24f]">
            Chcę takie demo
          </Link>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const navItems = [
    ['Oferta', '#oferta'],
    ['Proces', '#proces'],
    ['Efekty', '#efekty'],
    ['FAQ', '#faq'],
    ['Kontakt', '#kontakt'],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09111d]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex min-w-0 flex-col">
          <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#f3b24f]">Trener personalny</span>
          <span className="text-lg font-extrabold tracking-[0.08em] text-white">Karolina Wrona</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold tracking-[0.06em] text-white/74 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="inline-flex items-center rounded-full border border-[#f3b24f]/60 bg-[#f3b24f] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#09111d] transition hover:-translate-y-0.5 hover:bg-[#ffbf5f]"
        >
          Umów konsultację
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Trenerka sportów walki w dynamicznej pozie" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,29,0.96)_0%,rgba(9,17,29,0.92)_38%,rgba(9,17,29,0.58)_66%,rgba(9,17,29,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(182,38,54,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(243,178,79,0.18),transparent_30%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(9,17,29,1),rgba(9,17,29,0))]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-end gap-14 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-20 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/70">
            {['Trening personalny', 'Przygotowanie sprawnościowe', 'Trening sportów walki'].map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur">
                {item}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl [font-family:var(--font-display)] text-[4.4rem] uppercase leading-[0.9] tracking-[0.03em] text-white sm:text-[5.8rem] lg:text-[7.8rem]">
            Siła,
            <span className="ml-3 text-[#f3b24f]">sprawność</span>
            <span className="block">i pewność siebie.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Pomagam kobietom i mężczyznom budować mocniejsze ciało, lepszą kondycję i większą kontrolę nad własną formą. Trenuj konkretnie, rozwijaj realną sprawność i pracuj z podejściem opartym na dyscyplinie, technice i progresie.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#f3b24f] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#09111d] transition hover:-translate-y-0.5 hover:bg-[#ffbf5f]"
            >
              Umów konsultację
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/6 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Zobacz ofertę
            </a>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
            Trening indywidualny, przygotowanie sprawnościowe i sporty walki w jednym spójnym systemie pracy. Współpraca dostępna w języku polskim, angielskim i hiszpańskim.
          </p>
        </div>

        <div className="grid gap-4 self-end lg:justify-self-end">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f3b24f]">Profil pracy</span>
              <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Warszawa • Online
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.16em] text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-[#0c1625] py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${abstractImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">Dla kogo</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            Trening konkretny, nie przypadkowy.
          </h2>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#111d2f]/90 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
          <p className="text-lg leading-9 text-white/80">
            Ta współpraca jest dla Ciebie, jeśli chcesz poprawić sylwetkę, zwiększyć siłę, zbudować lepszą kondycję i poczuć większą pewność siebie w swoim ciele. Jeśli masz dość chaotycznych planów, przypadkowych ćwiczeń i treningu bez celu, tutaj dostajesz jasny kierunek, strukturę i realny progres.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-[#f2efe8] py-20 text-[#09111d] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#d7d0c4]">
          <img src={portraitImage} alt="Fikcyjna trenerka personalna z doświadczeniem sportowym" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(9,17,29,0.95),rgba(9,17,29,0.15))] p-6 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f3b24f]">Języki współpracy</p>
            <p className="mt-2 text-sm leading-7 text-white/80">Polski • English • Español</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">O marce</p>
            <h2 className="mt-4 max-w-3xl [font-family:var(--font-display)] text-5xl uppercase leading-[0.94] tracking-[0.04em] sm:text-6xl">
              Sportowe podejście. Technika. Dyscyplina. Wynik.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#263246]">
              Za tą marką stoi podejście zbudowane na doświadczeniu sportowym i wysokich wymaganiach wobec jakości treningu. Fundamentem pracy są technika, regularność i dobrze zaplanowany progres.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-[#263246]">
              Inspiracja sportami walki przekłada się tu na coś więcej niż sam charakter zajęć — buduje koncentrację, sprawność, odporność i pewność siebie, która wychodzi daleko poza salę treningową.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Trening oparty na technice i jakości ruchu',
              'System pracy dopasowany do realnego celu',
              'Podejście dla kobiet i mężczyzn',
              'Współpraca stacjonarna i online',
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#09111d]/10 bg-white px-5 py-5 shadow-[0_12px_35px_rgba(9,17,29,0.08)]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#b62636]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#09111d]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="bg-[#09111d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">Oferta</p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
              Oferta dopasowana do celu, nie do gotowego szablonu.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62">
            Mocny sportowy charakter nie oznacza chaosu. Każda forma współpracy ma swój cel, zakres i konkretny rezultat.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d2f]">
            <img src={serviceImage} alt="Prowadzenie treningu personalnego z naciskiem na technikę" className="h-full min-h-[320px] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,17,29,0.12),rgba(9,17,29,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">Podejście treningowe</p>
              <p className="mt-3 max-w-lg text-base leading-8 text-white/82">
                Technika, kontrola ruchu, progres i pełne dopasowanie planu do poziomu oraz celu. Tu nie ma miejsca na przypadkowy wysiłek.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {offer.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-[1.8rem] border border-white/10 bg-[#101a2b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f3b24f]/40 hover:bg-[#121f33]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f3b24f]">0{index + 1}</span>
                  <span className="h-px w-14 bg-white/10 transition group-hover:bg-[#f3b24f]/40" />
                </div>
                <h3 className="max-w-xl text-xl font-extrabold uppercase tracking-[0.06em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proces" className="relative overflow-hidden bg-[#0d1727] py-20 sm:py-24">
      <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/8 lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">Jak wygląda współpraca</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            Prosty proces. Jasny cel. Realny progres.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <p className="text-sm font-black tracking-[0.22em] text-[#b62636]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-[0.05em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-8 text-white/68">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItWorksSection() {
  return (
    <section id="efekty" className="bg-[#f2efe8] py-20 text-[#09111d] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">Dlaczego to działa</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] sm:text-6xl">
            Tu liczy się jakość pracy, nie moda.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#263246]">
            To podejście nie opiera się na chwilowej motywacji. Liczą się system, technika i konsekwencja. Właśnie dlatego trening daje nie tylko zmęczenie po zajęciach, ale realne efekty: mocniejsze ciało, lepszą sprawność, większą kontrolę ruchu i większą pewność siebie.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {effects.map((item) => (
            <article key={item.title} className="rounded-[1.8rem] border border-[#09111d]/10 bg-white p-6 shadow-[0_15px_40px_rgba(9,17,29,0.08)]">
              <h3 className="text-xl font-extrabold uppercase tracking-[0.06em] text-[#09111d]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4c5a6f]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#09111d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">Opinie</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            Najczęściej doceniane: konkret, atmosfera i progres.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((quote, index) => (
              <article key={quote} className="rounded-[2rem] border border-white/10 bg-[#101a2b] p-7 shadow-[0_14px_35px_rgba(0,0,0,0.22)]">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b62636]">0{index + 1}</p>
                <p className="mt-5 text-lg leading-9 text-white/82">“{quote}”</p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d2f]">
            <img src={portraitImage} alt="Profesjonalny portret fikcyjnej trenerki" className="h-full min-h-[520px] w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#0d1727] py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${abstractImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">FAQ</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            Najczęstsze pytania
          </h2>
          <p className="mt-5 max-w-md text-sm leading-8 text-white/64">
            Strona ma sprzedawać konkret i profesjonalizm, więc odpowiedzi są krótkie, jasne i bez marketingowego dymu.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-extrabold uppercase tracking-[0.05em] text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="kontakt" className="bg-[#f2efe8] py-20 text-[#09111d] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">Finalne CTA</p>
          <h2 className="mt-4 max-w-3xl [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] sm:text-6xl">
            Chcesz trenować mocniej, mądrzej i z realnym celem?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#263246]">
            Napisz, jaki masz cel i sprawdź, jaka forma współpracy będzie dla Ciebie najlepsza. Zbuduj siłę, popraw sprawność i trenuj z podejściem, które daje realne efekty.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:kontakt@karolinawrona-demo.pl"
              className="inline-flex items-center justify-center rounded-full bg-[#09111d] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#13213a]"
            >
              Umów pierwszą konsultację
            </a>
            <a
              href="tel:+48600123456"
              className="inline-flex items-center justify-center rounded-full border border-[#09111d]/12 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#09111d] transition hover:-translate-y-0.5 hover:border-[#09111d]/25"
            >
              Zadzwoń: 600 123 456
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#09111d]/10 bg-white p-8 shadow-[0_18px_50px_rgba(9,17,29,0.08)]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">Kontakt</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[#263246]">
                <p>kontakt@karolinawrona-demo.pl</p>
                <p>+48 600 123 456</p>
                <p>Warszawa + współpraca online</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">Języki</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[#263246]">
                <p>Polski</p>
                <p>English</p>
                <p>Español</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[#09111d] p-6 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">Wyróżnik</p>
            <p className="mt-3 text-sm leading-7 text-white/74">
              Trening personalny premium z wyraźnym DNA sportów walki: technika, dyscyplina, sprawność i realny progres zamiast generycznego fitnessu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#09111d] px-4 py-8 text-sm text-white/46 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Karolina Wrona — demo wizytówki trenera personalnego</p>
        <p>Wszystkie dane kontaktowe i treści na tej stronie są fikcyjne.</p>
      </div>
    </footer>
  );
}
