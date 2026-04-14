import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FinalCtaSection,
  PageHero,
  SectionTitle,
  services,
  SiteShell,
} from '../_components/electrician-components';

export const metadata: Metadata = {
  title: 'Usługi — VoltMark Instalacje',
  description: 'Zakres usług elektrycznych dla klientów prywatnych i małych firm.',
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Podstrona usługowa"
        title="Kompleksowe usługi elektryczne dla klientów prywatnych i firm"
        description="Realizujemy instalacje elektryczne, modernizacje, pomiary oraz usuwanie usterek w domach, mieszkaniach, lokalach usługowych i małych obiektach firmowych. Ta podstrona pokazuje dokładniej, jak wygląda zakres strony firmowej względem zwykłej wizytówki."
        secondaryHref="/demos/electrician/kontakt"
        secondaryLabel="Skonsultuj zakres"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Zakres prac"
            title="Oferta dopasowana do etapu inwestycji i sposobu użytkowania obiektu"
            description="Jedni klienci budują dom od podstaw, inni remontują mieszkanie, a jeszcze inni potrzebują uporządkować instalację w lokalu usługowym. Dlatego ta podstrona nie kończy się na ogólnym haśle, tylko rozpisuje konkretne obszary prac."
          />
          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <article key={service.slug} className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{service.icon}</p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-zinc-950">{service.title}</h2>
                    <p className="mt-4 text-base leading-8 text-zinc-600">{service.short}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 lg:min-w-[22rem]">
                    <p className="text-sm font-semibold text-zinc-950">Co obejmuje ten obszar?</p>
                    <div className="mt-4 space-y-3">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 text-sm leading-7 text-zinc-600">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span>{bullet}</span>
                        </div>
                      ))}
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
            eyebrow="FAQ"
            title="Najczęstsze pytania przed rozpoczęciem współpracy"
            description="To praktyczny element sprzedażowy. Odpowiada na obiekcje bez zmuszania użytkownika do telefonu już na pierwszym ekranie."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                question: 'Czy realizujecie zarówno nowe instalacje, jak i remonty?',
                answer:
                  'Tak. Pracujemy przy inwestycjach od zera, ale również przy wymianach i modernizacjach istniejących instalacji.',
              },
              {
                question: 'Czy obsługujecie klientów prywatnych i firmy?',
                answer:
                  'Tak. Wykonujemy prace dla domów, mieszkań, lokali usługowych oraz małych firm.',
              },
              {
                question: 'Czy można zgłosić pojedynczą usterkę albo awarię?',
                answer:
                  'Tak. Pomagamy także przy konkretnych problemach wymagających szybkiej diagnozy i usunięcia przyczyny.',
              },
              {
                question: 'Czy pomagacie dobrać rozwiązania techniczne?',
                answer:
                  'Tak. Doradzamy tak, aby instalacja była funkcjonalna, bezpieczna i uzasadniona kosztowo na danym etapie inwestycji.',
              },
            ].map((item) => (
              <article key={item.question} className="rounded-[1.75rem] border border-zinc-200 bg-white p-7">
                <h3 className="text-lg font-semibold text-zinc-950">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/demos/electrician/kontakt"
              className="inline-flex rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Nie wiesz, jaka usługa będzie najlepsza? Skontaktuj się z nami
            </Link>
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </SiteShell>
  );
}
