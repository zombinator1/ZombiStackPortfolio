import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function CtaBand() {
  return (
    <section id="kontakt" className="bg-zinc-900 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Gotowy na nową stronę?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Napisz do mnie, powiedz czym się zajmujesz — wskażę Ci szablon
            który pasuje do Twojej firmy. Bez zobowiązań.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={`mailto:${siteConfig.contact.email}`} size="lg" variant="light">
              Napisz e-mail
            </Button>
            <Button href="/templates" size="lg" variant="ghost" className="text-zinc-300 hover:bg-zinc-800 hover:text-white">
              Przeglądaj demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
