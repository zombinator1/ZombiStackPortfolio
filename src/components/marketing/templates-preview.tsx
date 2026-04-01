import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TemplateCard } from '@/components/ui/template-card';
import { getTemplates } from '@/lib/templates';

export function TemplatesPreview() {
  const templates = getTemplates();

  return (
    <section id="szablony" className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          title="Co przykładowo możesz otrzymać"
          subtitle="Kliknij i obejrzyj pełne demo — nie screenshot, tylko działająca strona."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-400">
          {/* To tylko przykłady{' '} */}
          <Link href="/#kontakt" className="underline hover:text-zinc-600">
            Napisz — zrobimy coś na miarę.
          </Link>
        </p>
      </Container>
    </section>
  );
}
