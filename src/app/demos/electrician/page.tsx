'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ElectricianDemo() {
  return (
    <div className="font-sans antialiased">
      <DemoBanner />
      <ElectricianNav />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <ElectricianFooter />
    </div>
  );
}

/* ─── Demo Banner ─────────────────────────────────────────────────────────── */

function DemoBanner() {
  return (
    <div className="relative z-50 flex items-center justify-between gap-4 bg-zinc-900 px-4 py-2.5 sm:px-6">
      <p className="text-xs text-zinc-400">
        <span className="font-semibold text-zinc-200">Tryb demo</span> — treści są fikcyjne. To przykład jak może wyglądać Twoja strona.
      </p>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="/#demo"
          className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200"
        >
          ← Powrót
        </Link>
        <Link
          href="/#kontakt"
          className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-zinc-900 transition hover:bg-amber-300"
        >
          Chcę taką stronę →
        </Link>
      </div>
    </div>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────────────────── */

function ElectricianNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-amber-400">⚡</span>
          <span className="text-base font-bold text-white">ElektroPro</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {[
            ['Usługi', '#uslugi'],
            ['Realizacje', '#realizacje'],
            ['Opinie', '#opinie'],
            ['Kontakt', '#kontakt'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-zinc-400 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+48600123456"
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-zinc-900 transition hover:bg-amber-300"
        >
          <PhoneIcon className="h-3.5 w-3.5" />
          +48 600 123 456
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[88vh] overflow-hidden bg-zinc-950">
      <Image
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
        alt="Elektryk przy tablicy rozdzielczej"
        fill
        className="object-cover opacity-25"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/50 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.1),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 pt-20 sm:px-8 lg:pt-28">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-400/8 px-4 py-2 text-sm font-medium text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Certyfikowany elektryk · Warszawa i okolice
        </div>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.07] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
          Instalacje elektryczne bez stresu i niespodzianek
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          15 lat doświadczenia, pełne ubezpieczenie OC i 5 lat gwarancji na każdą pracę.
          Zadzwoń — oddzwonię w ciągu 30 minut.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+48600123456"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-zinc-900 shadow-[0_0_48px_rgba(245,158,11,0.4)] transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            <PhoneIcon className="h-5 w-5" />
            Zadzwoń teraz
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Napisz wiadomość
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          {['Uprawnienia SEP do 1kV', 'Ubezpieczenie OC', 'Gwarancja 5 lat', 'Faktura VAT'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
              <CheckIcon className="h-4 w-4 text-amber-400" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* ─── Stats ───────────────────────────────────────────────────────────────── */

const stats = [
  { icon: '⚡', value: '15+', label: 'lat doświadczenia' },
  { icon: '🏠', value: '800+', label: 'wykonanych zleceń' },
  { icon: '⭐', value: '4.9/5', label: 'średnia ocen Google' },
  { icon: '🛡️', value: '5 lat', label: 'gwarancji na prace' },
];

function StatsSection() {
  return (
    <section className="border-y border-zinc-100 bg-white py-14">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
                {s.icon}
              </div>
              <div className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────────────── */

const services = [
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
    title: 'Instalacje w nowym budownictwie',
    description: 'Kompletna instalacja elektryczna od projektu po odbiór. Dom, mieszkanie, lokal — jeden wykonawca od początku do końca.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    title: 'Rozdzielnice i tablice',
    description: 'Montaż i wymiana rozdzielnic, zabezpieczeń RCD i liczników. Pełny certyfikat odbioru po wykonaniu.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    title: 'Usuwanie awarii 24/7',
    description: 'Brak prądu, przepalone bezpieczniki, iskrzące gniazdko — dojazd w ciągu 2 godzin, 7 dni w tygodniu.',
  },
  {
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80',
    title: 'Remonty i modernizacje',
    description: 'Wymiana starej instalacji, dodanie nowych obwodów, przesunięcie gniazdek i włączników. Bez zbędnego kucia.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    title: 'Oświetlenie LED i smart home',
    description: 'Projektowanie i montaż oświetlenia LED, systemy ściemniania, inteligentne sterowanie Philips Hue / KNX.',
  },
  {
    image: 'https://images.unsplash.com/photo-1593941707882-a56bbc8fea63?auto=format&fit=crop&w=600&q=80',
    title: 'Ładowarki do aut elektrycznych',
    description: 'Montaż wallboxów i stacji ładowania dla firm i klientów indywidualnych. Dofinansowanie NFOŚiGW.',
  },
];

function ServicesSection() {
  return (
    <section id="uslugi" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          title="Zakres usług"
          subtitle="Zajmuję się pełnym zakresem prac elektrycznych — od awarii po kompleksowe instalacje w nowych budynkach."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="mb-1.5 font-semibold text-zinc-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ────────────────────────────────────────────────────────────── */

const projects = [
  {
    title: 'Instalacja w domu jednorodzinnym — Wilanów',
    description: 'Kompleksowa instalacja 230V i 400V w domu 200 m². Rozdzielnica 3-fazowa, 18 obwodów, inteligentne oświetlenie zewnętrzne.',
    tag: 'Nowe budownictwo',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Modernizacja instalacji — kamienica, Praga',
    description: 'Wymiana przedwojennej instalacji na nowoczesną TN-S. 4 mieszkania, 80 m² każde, bez przerw w dostawie prądu dla lokatorów.',
    tag: 'Modernizacja',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Stacja ładowania EV — biurowiec, Mokotów',
    description: 'Montaż 8 ładowarek AC 22kW na parkingu podziemnym. Projekt, zasilanie, okablowanie, uruchomienie i serwis.',
    tag: 'Ładowarki EV',
    image: 'https://images.unsplash.com/photo-1593941707882-a56bbc8fea63?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Inteligentny dom — Ursus',
    description: 'System KNX sterujący oświetleniem, ogrzewaniem i roletami. 120 m², 40 punktów sterowania, aplikacja mobilna.',
    tag: 'Smart home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
  },
];

function ProjectsSection() {
  return (
    <section id="realizacje" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          title="Ostatnie realizacje"
          subtitle="Każde zlecenie traktuję tak, jakby to był mój własny dom."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-zinc-900">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-zinc-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────────── */

const testimonials = [
  {
    initials: 'MK',
    name: 'Marcin Kowalczyk',
    location: 'Warszawa, Wilanów',
    rating: 5,
    text: 'Pełna instalacja w nowym domu — praca wykonana dokładnie, bez opóźnień i w umówionym budżecie. Ekipa zostawiła po sobie porządek. Polecam bez wahania.',
    date: 'marzec 2025',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    initials: 'AG',
    name: 'Anna Grabowska',
    location: 'Warszawa, Praga-Południe',
    rating: 5,
    text: 'Awaria w środku nocy, brak prądu w całym mieszkaniu. Zadzwoniłam — po 1,5 godziny technik był u mnie. Problem rozwiązany w 30 minut. Niesamowita reakcja.',
    date: 'styczeń 2025',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    initials: 'PW',
    name: 'Paweł Wiśniewski',
    location: 'Warszawa, Mokotów',
    rating: 5,
    text: 'Montaż 3 ładowarek EV w garażu. Zgrali wszystko z zarządcą budynku, zrobili projekt i odbiór. Zero stresu z mojej strony. Już polecałem sąsiadom.',
    date: 'luty 2025',
    color: 'bg-emerald-100 text-emerald-700',
  },
];

function TestimonialsSection() {
  return (
    <section id="opinie" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          title="Co mówią klienci"
          subtitle="Ponad 200 opinii na Google — średnia 4.9/5."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-zinc-100 bg-zinc-50/60 p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className={`h-4 w-4 ${s < t.rating ? 'text-amber-400' : 'text-zinc-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-5">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.location} · {t.date}</div>
                </div>
                <GoogleIcon className="ml-auto h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────────────────────── */

function ContactSection() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-zinc-950 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Kontakt</p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Napisz albo zadzwoń — odpiszę szybko
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              Darmowa wycena przez telefon lub na miejscu. Bez zobowiązań.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {[
                { icon: <PhoneIcon className="h-5 w-5" />, label: 'Zadzwoń', value: '+48 600 123 456', href: 'tel:+48600123456', amber: true },
                { icon: <MailIcon className="h-5 w-5" />, label: 'E-mail', value: 'kontakt@elektropro.pl', href: 'mailto:kontakt@elektropro.pl', amber: false },
              ].map((c) => (
                <a key={c.href} href={c.href} className="group flex items-center gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition ${c.amber ? 'bg-amber-400/10 text-amber-400 ring-amber-400/20 group-hover:bg-amber-400/20' : 'bg-zinc-800 text-zinc-400 ring-zinc-700 group-hover:bg-zinc-700'}`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500">{c.label}</div>
                    <div className={`font-bold transition ${c.amber ? 'text-white group-hover:text-amber-300' : 'text-sm text-zinc-300 group-hover:text-white'}`}>{c.value}</div>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 ring-1 ring-zinc-700">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Godziny pracy</div>
                  <div className="text-sm font-medium text-zinc-300">Pn–Pt 7:00–20:00 · Sb 8:00–16:00</div>
                  <div className="text-xs text-amber-400">Awarie: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <p className="mb-6 text-base font-semibold text-white">Wyślij wiadomość</p>
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Imię i nazwisko" placeholder="Jan Kowalski" type="text" />
                <Field label="Telefon" placeholder="+48 600 000 000" type="tel" />
              </div>
              <Field label="Temat" placeholder="np. Instalacja elektryczna w nowym domu" type="text" />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">Wiadomość</label>
                <textarea
                  rows={4}
                  placeholder="Opisz zakres pracy lub problem..."
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20"
                />
              </div>
              <button className="w-full rounded-xl bg-amber-400 py-3.5 text-sm font-bold text-zinc-900 transition hover:bg-amber-300">
                Wyślij wiadomość →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-zinc-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20"
      />
    </div>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */

function ElectricianFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <span className="text-amber-400">⚡</span>
          <span className="text-sm font-semibold text-zinc-300">ElektroPro</span>
          <span className="text-sm text-zinc-600">· Warszawa i okolice</span>
        </div>
        <p className="text-xs text-zinc-600">© 2025 ElektroPro. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}

/* ─── Shared ──────────────────────────────────────────────────────────────── */

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-3xl font-bold tracking-[-0.02em] text-zinc-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <>
          <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-500">{subtitle}</p>
        </>
      )}
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}
