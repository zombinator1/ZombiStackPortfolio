import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    number: '01',
    title: 'Rozmowa i strategia',
    description:
      'Nie zaczynam od kodowania. Najpierw rozmawiamy o Twoim biznesie, klientach i celach, jakie ma spełniać strona. Na tej podstawie dobieram odpowiednią strukturę i układ, który najlepiej sprzeda Twoje usługi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-violet-600',
    glow: 'from-indigo-500/12 via-transparent to-transparent',
    orb: 'bg-indigo-300/20',
    line: 'via-indigo-400/50',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
  },
  {
    number: '02',
    title: 'Projekt i Twoja akceptacja',
    description:
      'Przygotowuję wstępną wersję strony. Analizuję ofertę konkurencji i podobnne strony z Twojej branży. Dbam aby rozwiać wszelkie wątpliwośći klienta. Omawiamy ją wspólnie, po Twojej akceptacji, przechodzę do właściwego wdrożenia.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    gradient: 'from-sky-500 to-cyan-600',
    glow: 'from-sky-500/12 via-transparent to-transparent',
    orb: 'bg-sky-300/20',
    line: 'via-sky-400/50',
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
  },
  {
    number: '03',
    title: 'Wdrożenie i testy',
    description:
      'Buduję stronę, dbając o to, by ładowała się błyskawicznie i wyglądała świetnie na każdym urządzeniu. Podpinam formularze kontaktowe, analitykę i SEO, aby klienci mogli Cię łatwo znaleźć w Google.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-600',
    glow: 'from-violet-500/12 via-transparent to-transparent',
    orb: 'bg-violet-300/20',
    line: 'via-violet-400/50',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    number: '04',
    title: 'Publikacja i opieka',
    description:
      'Uruchamiamy stronę pod Twoją domeną. Przez pierwsze 30 dni po starcie masz u mnie darmowe wsparcie — zmiany treści, nowe zdjęcia, poprawki. Bez dodatkowych opłat.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M3 12h18" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'from-emerald-500/12 via-transparent to-transparent',
    orb: 'bg-emerald-300/20',
    line: 'via-emerald-400/50',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
];

export function ProcessSteps() {
  return (
    <section id="jak-to-dziala" className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white py-24 sm:py-32">
      {/* Background ambient glows */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute left-[-120px] top-[60px] h-[350px] w-[350px] rounded-full bg-indigo-100/30 blur-3xl" />
      <div className="absolute right-[-80px] bottom-[40px] h-[300px] w-[300px] rounded-full bg-violet-100/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/20 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Jak wygląda współpraca"
          />

          {/* 2×2 grid with stagger on col 2 */}
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={step.number}
                  className={isEven ? 'sm:mt-10' : ''}
                >
                  <StepCard step={step} />
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

type Step = (typeof steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 p-8 ring-1 ring-zinc-950/5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_100px_rgba(15,23,42,0.11)]">
      {/* Layered glow bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} opacity-100`} />
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${step.line} to-transparent`} />

      {/* Orb */}
      <div className={`absolute -right-6 -top-6 h-36 w-36 rounded-full ${step.orb} blur-3xl transition duration-700 group-hover:scale-125`} />

      {/* Noise texture overlay */}
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white/80 via-white to-zinc-50/60" />

      <div className="relative flex flex-col gap-6">
        {/* Header row: icon + number */}
        <div className="flex items-start justify-between">
          {/* Icon pill */}
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.iconBg} ${step.iconColor} transition duration-300 group-hover:scale-110`}>
            {step.icon}
          </div>

          {/* Step number — large, gradient */}
          <div className={`bg-gradient-to-br ${step.gradient} bg-clip-text text-6xl font-black leading-none tracking-[-0.04em] text-transparent opacity-20 transition duration-300 group-hover:opacity-35`}>
            {step.number}
          </div>
        </div>

        {/* Text */}
        <div>
          <h3 className="mb-2.5 text-lg font-semibold tracking-tight text-zinc-900">
            {step.title}
          </h3>
          <p className="text-sm leading-7 text-zinc-500">
            {step.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${step.gradient} opacity-60 transition duration-300 group-hover:w-16 group-hover:opacity-100`} />
      </div>
    </div>
  );
}
