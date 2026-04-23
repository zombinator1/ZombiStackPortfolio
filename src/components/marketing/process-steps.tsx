import { Container } from '@/components/ui/container';

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

function IconPencil() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconGraduate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stage1 = [
  {
    id: 's1-1',
    title: 'Poznajemy Twój biznes',
    description:
      'Poświęcam czas, żeby naprawdę zrozumieć Ciebie i to, co chcesz osiągnąć. Umawiamy się na rozmowę odkrywczą, podczas której opowiadasz mi o swojej firmie, a ja robię notatki. Poznając sposób, w jaki działasz, oraz Twoje cele biznesowe, mogę doradzić, jakie rozwiązania przyniosą Ci największe korzyści.',
    icon: <IconSearch />,
  },
  {
    id: 's1-2',
    title: 'Poznajemy Twoich klientów',
    description:
      'Definiujemy Twoją grupę docelową — badamy ją tak dokładnie, jak to potrzebne. Gdy już wiemy, kogo chcesz przyciągnąć, możemy ukształtować przekaz i wygląd strony tak, żeby trafiał dokładnie do tych ludzi. Zrozumienie zachowań klientów daje nam kierunek i pozwala wypełnić luki w Twojej ofercie.',
    icon: <IconUsers />,
  },
  {
    id: 's1-3',
    title: 'Strategia i treści',
    description:
      'Opracowuję solidny plan, który doprowadzi Cię tam, gdzie chcesz być. Doradzam w kwestiach copywritingu, struktury oferty, SEO i projektu strony. To nie jest tylko "ładna strona" — to narzędzie sprzedażowe. Razem układamy mapę drogową, która prowadzi do realnych wyników.',
    icon: <IconMap />,
  },
  {
    id: 's1-4',
    title: 'Projekt i Twoja akceptacja',
    description:
      'Projektuję pierwszą wersję strony, biorąc pod uwagę wszystko, o czym rozmawialiśmy. Następnie poznaję Twoją opinię. Powiedz mi, co Ci się podoba, a co zmienić — dopracuję projekt do perfekcji. Dopiero po Twojej akceptacji przechodzimy do właściwego wdrożenia.',
    icon: <IconPencil />,
  },
];

const stage2 = [
  {
    id: 's2-1',
    title: 'Wdrożenie i testy',
    description:
      'Buduję stronę od podstaw, dbając o to, by ładowała się błyskawicznie i wyglądała świetnie na każdym urządzeniu. Podpinam formularze kontaktowe, analitykę i SEO, aby klienci mogli Cię łatwo znaleźć w Google. Możesz oczekiwać najwyższej jakości i terminowości.',
    icon: <IconCode />,
  },
  {
    id: 's2-2',
    title: 'Szkolenie z obsługi',
    description:
      'W krótkim czasie opanujesz obsługę swojej strony. Pokażę Ci wszystko, co musisz wiedzieć, żeby samodzielnie zarządzać treściami — dodawać podstrony, zmieniać teksty, aktualizować zdjęcia. Prosto, wygodnie, bez potrzeby angażowania programisty.',
    icon: <IconGraduate />,
  },
  {
    id: 's2-3',
    title: 'Wsparcie po wdrożeniu',
    description:
      'Przez pierwsze 30 dni po starcie masz u mnie darmowe wsparcie — zmiany treści, nowe zdjęcia, poprawki. Bez dodatkowych opłat. Jeśli chcesz, żebym działał samodzielnie, sam zastosuję optymalne rozwiązania. Twoja strona będzie zawsze działać na najwyższym poziomie.',
    icon: <IconHeadset />,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

type StageItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function StageItem({ item, index }: { item: StageItem; index: number }) {
  return (
    <div className="group flex gap-6 sm:gap-8">
      {/* Left: number + vertical line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm font-bold text-indigo-400">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="mt-3 w-px flex-1 bg-gradient-to-b from-indigo-500/20 to-transparent" />
      </div>

      {/* Middle: text */}
      <div className="flex-1 pb-12">
        <h3 className="mb-3 text-xl font-semibold text-white">
          {item.title}
        </h3>
        <p className="text-base leading-relaxed text-zinc-400">
          {item.description}
        </p>
      </div>

      {/* Right: icon */}
      <div className="hidden shrink-0 sm:flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition duration-300 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
        {item.icon}
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function ProcessSteps() {
  return (
    <section id="jak-to-dziala" className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-150px] bottom-[100px] h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-3xl" />

      <Container>
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Jak wygląda współpraca
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Działamy w&nbsp;dwóch etapach.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            Inne firmy wyceniają cały projekt zanim jeszcze poznają Twoje potrzeby. Ja robię to inaczej — najpierw rozumiem, potem buduję.
          </p>
        </div>

        <div className="space-y-20">
          {/* ── Stage 1 ── */}
          <div>
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Etap 1</p>
              <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Odkrycie, strategia{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  i&nbsp;projekt.
                </span>
              </h3>
            </div>

            <div className="divide-y divide-zinc-800/60">
              {stage1.map((item, i) => (
                <div key={item.id} className={i > 0 ? 'pt-2' : ''}>
                  <StageItem item={item} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-zinc-950 px-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                Etap 2
              </span>
            </div>
          </div>

          {/* ── Stage 2 ── */}
          <div>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Wdrożenie, szkolenie{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  i&nbsp;wsparcie.
                </span>
              </h3>
            </div>

            <div className="divide-y divide-zinc-800/60">
              {stage2.map((item, i) => (
                <div key={item.id} className={i > 0 ? 'pt-2' : ''}>
                  <StageItem item={item} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
