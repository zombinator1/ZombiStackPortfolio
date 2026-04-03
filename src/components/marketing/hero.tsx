import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/50 to-zinc-100 py-32 sm:py-44">
      {/* Soft blurred ambient shapes */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-16 -right-32 h-80 w-80 rounded-full bg-zinc-300/30 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Strony WWW dla firm
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            Strona, która zaczyna<br className="hidden sm:block" /> zdobywać klientów{' '}
            <span className="text-zinc-400">gotowa&nbsp;w&nbsp;7&nbsp;dni</span>
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-zinc-500">
            Bez przeciągających się projektów i bez przepalania budżetu.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
