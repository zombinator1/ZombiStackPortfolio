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

            <Container>
              <div className="mt-10 overflow-hidden rounded-[1.75rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12306.611014229158!2d21.012543364626723!3d52.23421083726009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc61869e4591%3A0x5808cf9b58f6ee47!2sOgr%C3%B3d%20Saski!5e1!3m2!1spl!2spl!4v1776259288554!5m2!1spl!2spl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Container>

          </div>
        </Container>
      </section>

    </SiteShell>
  );
}
