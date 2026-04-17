import Image from 'next/image';
import { Container } from '@/components/ui/container';

/* ─────────────────────────────────────────────────────────────────────────────
   Shared photo placeholder — swap src="/bartek.jpg" gdy masz zdjęcie
───────────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────────────────
   WARIANT E — Premium, bez "junior vibe"
───────────────────────────────────────────────────────────────────────────── */


export function AboutMeE() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/6 blur-3xl" />

      <Container>
        <div className="relative z-10">

          {/* Heading — pełna szerokość */}
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Strony internetowe nastawione na budowanie zaufania i jasną kumunikacje.
          </h2>

          {/* Dwie kolumny poniżej */}
          <div className="mt-12 grid items-center gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>
            {/* font-size: text-sm text-base text-lg text-xl text-2xl */}
            {/* line-height: leading-5 leading-6 leading-7 leading-8 leading-9 */}
            <p className="text-xl leading-7 text-zinc-400">
              Od ponad 3 lat pracuje jako programista w dużych firmach technologicznych jak Snowflake i Visa. Dlatego jestem mocny technicznie, wiem jak dowieźć projekt i postanowiłem zająć się tworzeniem stron www.
            </p>
            <p className="mt-4 text-xl leading-7 text-zinc-400">
              Moim celem jest pomóc Ci nie tylko od strony technicznej, ale także od strony projektowej oraz z opracowaniem treści, które mają jasno pokazywać, co oferujesz, i dawać klientowi pewność, że może na Tobie polegać.
            </p>


            {/* Trust builder */}
            <div className="mt-7 border-l-2 border-indigo-500 pl-5">
              <p className="text-base font-semibold text-white">
                Pracujesz bezpośrednio ze mną — bez agencji i pośredników.
              </p>
            </div>

            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800"
            >
              Porozmawiajmy o Twojej stronie
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/myself/ja1.jpg"
                alt="Bartek Żabekk"
                width={400}
                height={533}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://www.linkedin.com/in/bzabekk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 text-zinc-500 transition hover:text-zinc-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          </div>{/* koniec dwóch kolumn */}
        </div>
      </Container>
    </section>
  );
}
