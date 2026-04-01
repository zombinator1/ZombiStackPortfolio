import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Strony WWW dla lokalnych firm
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Twoja nowa strona gotowa{' '}
            <span className="text-zinc-500">w 7 dni</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-zinc-500">
            Nie zaczynam od zera. Wybierasz gotowy szablon, dostarczasz treści
            i logo — ja resztę ogarnam. Prosto, szybko, za rozsądną cenę.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/templates" size="lg">
              Przeglądaj szablony
            </Button>
            <Button href="mailto:kontakt@zombistack.pl" size="lg" variant="secondary">
              Napisz do mnie
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
