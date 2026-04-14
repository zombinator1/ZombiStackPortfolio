import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ElectricianContactForm } from '../_components/electrician-contact-form';
import {
  company,
  PageHero,
  SectionTitle,
  SiteShell,
} from '../_components/electrician-components';

export const metadata: Metadata = {
  title: 'Kontakt — VoltMark Instalacje',
  description: 'Podstrona kontaktowa dla demo strony firmowej firmy elektrycznej.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Podstrona kontaktowa"
        title="Porozmawiajmy o Twojej instalacji"
        description="Napisz lub zadzwoń i opisz, czego potrzebujesz. W dobrze zaprojektowanej stronie firmowej kontakt nie powinien być ukryty na końcu długiego landingu, tylko dostępny jako osobna i wygodna ścieżka działania."
        secondaryHref="/demos/electrician/uslugi"
        secondaryLabel="Zobacz usługi"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Dane kontaktowe"
              title="Im krótsza droga do kontaktu, tym większa szansa na zapytanie"
              description="To szczególnie ważne w lokalnych usługach. Klient nie chce szukać informacji po całym serwisie, tylko szybko sprawdzić, czy firma działa w jego obszarze i jak najlepiej rozpocząć rozmowę."
            />

            <div className="mt-10 space-y-5">
              {[
                { label: 'Telefon', value: company.phone },
                { label: 'E-mail', value: company.email },
                { label: 'Obszar działania', value: company.area },
                { label: 'Godziny kontaktu', value: company.hours },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6">
                  <p className="text-sm font-semibold text-zinc-950">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Co przyspiesza odpowiedź?</p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Typ obiektu, miejscowość, planowany zakres prac i informacja, czy chodzi o nową inwestycję, remont, modernizację albo awarię. To wystarczy, aby szybko wrócić z bardziej konkretną odpowiedzią.
              </p>
            </div>
          </div>

          <div>
            <ElectricianContactForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
