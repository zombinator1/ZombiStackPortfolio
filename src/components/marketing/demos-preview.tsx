import Link from 'next/link';
/*
 * Design note for this file:
 * Demo cards should communicate crafted premium positioning, not generic placeholders.
 * The personal trainer card needs to feel performance-led, credible and sales-oriented.
 */
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { BackgroundDecor } from '@/components/background-decor';
// #08070b
const demos = [
  {
    href: '/demos/personal-trainer',
    name: 'Wizytówka - Trenerka personalna',
    description: 'Strona z przejrzystym przekazem oferty FAQ i finałowa sekcja kontaktowa CTA pod sprzedaż konsultacji.',
    image: '/personal-trainer/personal-trainer-dem-preview.jpg',
    accent: 'Wizytówka',
    accentClass: 'bg-[#c44a7b] text-white',
  },
  {
    href: '/demos/electrician',
    name: 'Strona Firmowa - Elektyka',
    description: 'Przykład dla firmy o szerszej ofercie, z przemyślaną architekturą treści. Podstrony z realizacjami i blogiem budują zaufanie.',
    image: 'demo-electrician/electrician-demo-preview.jpg',
    accent: 'Strona Firmowa',
    accentClass: 'bg-amber-400 text-zinc-900',
  },
  {
    href: '/demos/photograph',
    name: 'Fotografka — Anna Kowalska',
    description: 'Strona dla uzytkownika który potrzebuje zarządzać zawartością. Do takiej strony podpinam system do samodzielnego zarządzania contentem (CMS).',
    image: 'https://images.unsplash.com/photo-1549872063-e752dd3c88f2?auto=format&fit=crop&w=800&q=80',
    accent: 'Strona Firmowa CMS',
    accentClass: 'bg-amber-600 text-white',
  },
];

export function DemosPreview() {
  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-b from-zinc-50/60 via-white to-white py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <BackgroundDecor />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Przykładowe strony"
          />

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <DemoCard key={demo.href} demo={demo} />
            ))}

          </div>

          <p className="mt-10 text-center text-sm text-zinc-400">
            <Link href="/#kontakt" className="underline hover:text-zinc-600">
              Napisz — zrobię coś na miarę.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

function DemoCard({ demo }: { demo: typeof demos[number] }) {
  return (
    <Link
      href={demo.href}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 ring-1 ring-zinc-950/5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(15,23,42,0.12)]"
    >
      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/6 via-transparent to-transparent" />

      {/* Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden bg-zinc-100">
        <Image
          src={demo.image}
          alt={demo.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
        <div className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-xs font-bold ${demo.accentClass}`}>
          {demo.accent}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900">{demo.name}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{demo.description}</p>
        <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-zinc-900 transition group-hover:gap-2.5">
          Otwórz demo
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

