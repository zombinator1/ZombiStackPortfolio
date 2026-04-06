import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { sectionAccents } from '@/config/accents';

const steps = [
  {
    number: '01',
    title: 'Opisz swoją firmę',
    description:
      'Wyślij 2–3 zdania: czym się zajmujesz, dla kogo i gdzie działasz. Jeśli masz starą stronę albo Facebooka — podeślij link.',
  },
  {
    number: '02',
    title: 'Dostajesz gotowy kierunek',
    description:
      'Na podstawie tego co wyślesz, proponuję konkretny szablon dopasowany do Twojej branży. Widzisz od razu, jak będzie wyglądać Twoja strona — bez zgadywania i bez niespodzianek.',
  },
  {
    number: '03',
    title: 'Ja ogarniam resztę',
    description:
      'Dostosowuję stronę pod Twoją firmę, uzupełniam treści i publikuję ją online. Ty nie musisz ogarniać technikaliów ani brać udziału w dziesiątkach decyzji.',
  },
];

const accents = sectionAccents;

export function ProcessSteps() {
  return (
    <section id="jak-to-dziala" className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute left-[-90px] top-[80px] h-[240px] w-[240px] rounded-full bg-indigo-200/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[20px] h-[260px] w-[260px] rounded-full bg-sky-200/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Jak wygląda współpraca"
            subtitle="Te kroki dzielą Cię od nowej strony."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => {
              const accent = accents[index];

              return (
                <div
                  key={step.number}
                  
                  className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 p-8 ring-1 ring-zinc-950/5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(15,23,42,0.10)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-90`} />
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />
                  <div className={`absolute right-0 top-0 h-28 w-28 rounded-full ${accent.orb} blur-3xl transition duration-500 group-hover:scale-110`} />
                  <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/40" />

                  <div className="relative">
                    <div className="mb-5 text-5xl font-black leading-none tracking-tighter bg-gradient-to-br ${accent.badge} text-sm-200 font-semibold "
       
                    >
                      {step.number}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-zinc-900">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-zinc-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}