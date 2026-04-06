import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { sectionAccents } from '@/config/accents';

const reasons = [
  {
    title: 'Widzisz co kupujesz',
    description:
      'Demo to działająca strona, nie mockup w Figmie. Klikasz, scrollujesz, oceniasz. Zero niespodzianek po opłaceniu faktury.',
  },
  {
    title: 'Gotowe w 7 dni, nie 7 tygodni',
    description:
      'Zamiast tygodni projektowania — zaczynamy od sprawdzonej bazy. Czas do startu liczymy w dniach, nie miesiącach.',
  },
];

const accents = sectionAccents;

export function ValueProps() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50/50 via-white to-white py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute left-[-80px] top-[60px] h-[240px] w-[240px] rounded-full bg-indigo-200/10 blur-3xl" />
      <div className="absolute right-[-70px] bottom-[10px] h-[240px] w-[240px] rounded-full bg-violet-200/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Dlaczego klienci to wybierają"
            subtitle="Szybciej, taniej i bez niespodzianek — nie dlatego że tak twierdzę, ale dlatego że tak działa ten model."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const accent = accents[index];

              return (
                <div
                  key={reason.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 p-8 ring-1 ring-zinc-950/5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(15,23,42,0.10)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-90`} />
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />
                  <div className={`absolute right-0 top-0 h-28 w-28 rounded-full ${accent.orb} blur-3xl transition duration-500 group-hover:scale-110`} />
                  <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/40" />

                  <div className="relative">
                    <div
                      className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.badge} text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]`}
                    >
                      0{index + 1}
                    </div>

                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900">
                      {reason.title}
                    </h3>

                    <p className="text-sm leading-7 text-zinc-600">
                      {reason.description}
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