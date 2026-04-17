import Image from 'next/image';
import { Container } from '@/components/ui/container';

const photo = (
  <Image
    src="/myself/ja1.jpg"
    alt="Bartek Żabekk"
    width={400}
    height={533}
    className="w-full object-cover"
  />
);

const linkedin = (
  <a
    href="https://www.linkedin.com/in/bzabekk"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-zinc-700"
  >
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
    <span className="text-sm font-medium">LinkedIn</span>
  </a>
);

export function AboutMeD() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <Container>
        <div className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] ring-1 ring-zinc-950/5">
          <div className="grid items-center lg:grid-cols-2">

            {/* Tekst */}
            <div className="px-8 py-12 lg:px-12 lg:py-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">O mnie</p>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-900 sm:text-4xl">
                Kto stworzy Twoją stronę.
              </h2>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-7 text-zinc-600">
                  Od ponad 3 lat pracuję jako programista w dużych firmach technologicznych, takich jak Snowflake i Visa. Dlatego jestem mocny technicznie, wiem, jak dowozić projekty, i postanowiłem zająć się tworzeniem stron WWW.
                </p>
                <p className="text-lg leading-7 text-zinc-600">
                  Moim celem jest pomóc Ci nie tylko od strony technicznej, ale także projektowej oraz w opracowaniu treści, które mają jasno pokazywać, co oferujesz, i dawać klientowi pewność, że może na Tobie polegać.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-indigo-500 pl-5">
                <p className="text-base font-semibold text-zinc-900">
                  Pracujesz bezpośrednio ze mną — bez agencji i pośredników.
                </p>
              </div>

              <a
                href="#kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                Porozmawiajmy o Twojej stronie
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Zdjęcie — prawa połowa karty z kremowym tłem */}
            <div className="flex flex-col items-center justify-center gap-4 bg-stone-50 px-8 py-12 lg:px-12 lg:py-0 lg:h-full">
              <div className="w-full max-w-xs overflow-hidden rounded-xl shadow-lg">
                {photo}
              </div>
              {linkedin}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
