import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { TemplateCard } from '@/components/ui/template-card';
import { getTemplates } from '@/lib/templates';

export const metadata: Metadata = {
  title: 'Szablony demo',
  description:
    'Przeglądaj przkładowe strony WWW. Kliknij i obejrzyj działające demo przed podjęciem decyzji.',
};

export default function TemplatesPage() {
  const templates = getTemplates();

  return (
    <div className="bg-zinc-50 py-20">
      <Container>
        <div className="mb-12">
          <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800">
            ← Strona główna
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Szablony do wyboru
          </h1>
          <p className="mt-3 max-w-xl text-lg text-zinc-500">
            Każde demo to działająca strona — nie mockup. Klikaj, scrolluj,
            oceniaj. Gdy wybierzesz styl, resztą zajmuję się ja.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">Nie widzisz swojej branży?</h2>
          <p className="mt-2 text-zinc-500">
            Napisz do mnie — opisz czym się zajmujesz, a dobiorę lub przygotuję odpowiedni szablon.
          </p>
          <div className="mt-6">
            <Button href="mailto:kontakt@zombistack.pl" variant="secondary">
              Napisz e-mail
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
