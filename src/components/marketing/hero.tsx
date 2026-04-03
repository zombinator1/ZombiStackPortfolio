import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-32 sm:py-44">
      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-zinc-200 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-24 h-72 w-72 rounded-full bg-zinc-300 opacity-25 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Strony WWW dla firm
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Strona, która zaczyna<br className="hidden sm:block" /> zdobywać klientów{' '}
            <span className="text-zinc-400">gotowa w 7 dni</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-zinc-500">
            Bez przeciągających się projektów i bez przepalania budżetu.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/#kontakt" size="lg">
              Zamów bezpłatną wycenę
            </Button>
            <Button href="/templates" variant="secondary" size="lg">
              Zobacz demo →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
