import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import {
  FinalCtaSection,
  PageHero,
  SectionTitle,
  SiteShell,
} from '../_components/electrician-components';

export const metadata: Metadata = {
  title: 'O nas — VoltMark Instalacje',
  description: 'Poznaj sposób pracy i podejście fikcyjnej firmy elektrycznej użytej w demie.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
title="Firma elektryczna, która stawia na dobrą robotę i jasne zasady współpracy"
        description="W branży lokalnej klient najczęściej kupuje nie samą usługę, ale poczucie bezpieczeństwa i przewidywalności. Dlatego podstrona O nas nie jest tu wypełniaczem, tylko ważnym elementem sprzedażowym całego serwisu."
        secondaryHref="/demos/electrician/realizacje"
        secondaryLabel="Zobacz realizacje"
        image="/demo-electrician/about-team.jpg"
      />

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/demo-electrician/about-team.jpg"
            alt="Zespół firmy elektrycznej"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.84)_48%,rgba(255,255,255,0.74)_100%)]" />

        <Container className="relative">
          <div className="max-w-3xl rounded-[2rem] border border-white/40 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-[4px] sm:p-10 lg:p-12">
            <SectionTitle
              eyebrow="Kim jesteśmy"
              title="Pracujemy konkretnie, odpowiedzialnie i bez zbędnego zamieszania"
              description="Obsługujemy klientów prywatnych oraz małe firmy, realizując prace przy nowych inwestycjach, remontach i modernizacjach. To demo celowo unika sztucznego języka o pasji i innowacji. W tej branży dużo lepiej działa ton oparty na odpowiedzialności, porządku i normalnym kontakcie."
            />
            <p className="mt-6 text-base leading-8 text-zinc-600">
              Z punktu widzenia sprzedaży to ważne rozróżnienie. Klient szukający elektryka nie chce czytać korporacyjnych sloganów. Chce zobaczyć firmę, która wydaje się rzetelna, przewidywalna i gotowa wykonać pracę bez chaosu. Taki właśnie obraz buduje ta podstrona.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f7f8] py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Jak pracujemy"
            title="Nasz standard współpracy"
            description="Dla małej firmy usługowej standard pracy to często największy wyróżnik. Nawet dobra oferta traci znaczenie, jeśli klient spodziewa się chaosu albo problemów komunikacyjnych."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Dokładność',
                description: 'Zwracamy uwagę na szczegóły, bo to one najczęściej decydują o jakości, trwałości i wygodzie późniejszego użytkowania instalacji.',
              },
              {
                title: 'Czytelne ustalenia',
                description: 'Omawiamy zakres prac i proponowane rozwiązania w sposób, który pozwala klientowi spokojnie podjąć decyzję bez zgadywania.',
              },
              {
                title: 'Bezpieczeństwo',
                description: 'Instalacja ma działać pewnie i przewidywalnie, dlatego unikamy przypadkowych kompromisów oraz prowizorycznych uproszczeń.',
              },
              {
                title: 'Szacunek do miejsca pracy',
                description: 'Dbamy o porządek i przewidywalną organizację prac, co ma znaczenie zarówno w domu, jak i w lokalu przygotowywanym pod działalność.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-zinc-200 bg-white p-7">
                <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Dla kogo pracujemy</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950">Najczęściej pomagamy w takich inwestycjach</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              Domy jednorodzinne, mieszkania, lokale usługowe oraz niewielkie obiekty firmowe. To inwestycje, w których liczy się nie tylko sprawność wykonania, ale również dobre zaplanowanie instalacji i dopasowanie jej do codziennego użytkowania.
            </p>
          </article>

          <article className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">W co wierzymy</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">Dobra instalacja ma po prostu działać i nie sprawiać problemów</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              Nie sprzedajemy nadmiaru skomplikowanych rozwiązań tam, gdzie nie są potrzebne. Najważniejsze jest to, aby klient dostał instalację przemyślaną, bezpieczną i dopasowaną do swojego sposobu życia lub pracy. To ogranicza błędy, kosztowne zmiany i niepotrzebne kompromisy po zakończeniu robót.
            </p>
          </article>
        </Container>
      </section>

      <FinalCtaSection />
    </SiteShell>
  );
}
