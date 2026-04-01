import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Strony WWW dla firm
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Profesjonalna strona{' '}
            <span className="text-zinc-400">w 7 dni</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-zinc-500">
            Wybierasz szablon z gotowego demo, dostarczasz treści i logo —
            Twoja strona jest online. Bez miesięcy czekania, bez ceny agencji.
          </p>
        </div>
      </Container>
    </section>
  );
}
