import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import {
  FinalCtaSection,
  PageHero,
  realizations,
  SectionTitle,
  SiteShell,
} from '../_components/electrician-components';

export const metadata: Metadata = {
  title: 'Realizacje — VoltMark Instalacje',
  description: 'Wybrane przykłady prac wykonanych dla domów, mieszkań i lokali usługowych.',
};

export default function RealizationsPage() {
  return (
    <SiteShell>
      <PageHero
        title="Nasze realizacje"
        description="Zobacz przykłady prac wykonanych dla domów, mieszkań i lokali usługowych. Ta część strony wzmacnia wiarygodność i pokazuje, że serwis nie kończy się na ładnym homepage, tylko prowadzi użytkownika dalej przez sensowną architekturę treści."
        secondaryHref="/demos/electrician/kontakt"
        secondaryLabel="Zapytaj o podobny zakres"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Portfolio"
            title="Realne potrzeby inwestycji wymagają różnych rozwiązań, ale ten sam standard wykonania"
            description="Nowy dom, mieszkanie po generalnym remoncie czy lokal usługowy pod działalność to trzy różne przypadki biznesowe. W każdym z nich klient chce jednak tego samego: bezpieczeństwa, porządku i pracy wykonanej tak, żeby nie wracać do problemu za kilka miesięcy."
          />

          <div className="mt-12 space-y-8">
            {realizations.map((item, index) => (
              <article
                key={item.title}
                className="grid overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 lg:grid-cols-[1fr_0.95fr]"
              >
                <div className={`relative min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{item.category}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950">{item.title}</h2>
                  <p className="mt-5 text-base leading-8 text-zinc-600">{item.description}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5">
                      <p className="text-sm font-semibold text-zinc-950">Zakres prac</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">
                        Rozplanowanie instalacji, wykonanie kluczowych elementów układu oraz uporządkowanie całości pod codzienne użytkowanie obiektu.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5">
                      <p className="text-sm font-semibold text-zinc-950">Efekt biznesowy</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">
                        Inwestor dostaje instalację, która jest funkcjonalna, estetyczna i łatwa do dalszego rozwijania bez kosztownych improwizacji.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f7f8] py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Standard pracy"
            title="Co jest wspólne dla wszystkich realizacji?"
            description="Niezależnie od rodzaju obiektu pilnujemy trzech rzeczy: bezpieczeństwa, logicznego układu instalacji i estetyki wykonania. Właśnie te elementy najczęściej decydują, czy klient odbiera firmę jako rzetelną."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              'Bezpieczne i przemyślane rozwiązania techniczne, a nie przypadkowe decyzje podejmowane w pośpiechu.',
              'Czytelny układ instalacji, który ułatwia codzienne użytkowanie i ewentualny dalszy serwis.',
              'Spójna estetyka wykonania, która robi różnicę szczególnie przy nowych inwestycjach i lokalach usługowych.',
            ].map((item) => (
              <article key={item} className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 text-sm leading-7 text-zinc-600">
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </SiteShell>
  );
}
