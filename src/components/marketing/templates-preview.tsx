import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getTemplates } from '@/lib/templates';

export function TemplatesPreview() {
  const templates = getTemplates();

  return (
    <section id="szablony" className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          title="Gotowe szablony do wyboru"
          subtitle="Kliknij i obejrzyj pełne demo. To działa — nie jest to screenshot."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.slug}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-40 items-center justify-center rounded-t-xl bg-zinc-900">
                <span className="text-3xl font-bold text-white opacity-20">
                  {template.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {template.name}
                  </h3>
                  <Badge>{template.category}</Badge>
                </div>
                <p className="mt-2 text-sm text-zinc-500">{template.description}</p>
                <div className="mt-6">
                  <Button href={`/templates/${template.slug}`} variant="secondary" size="sm">
                    Zobacz demo →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-400">
          Więcej szablonów w przygotowaniu. Nie widzisz swojej branży?{' '}
          <Link href="mailto:kontakt@zombistack.pl" className="underline hover:text-zinc-600">
            Napisz — zrobimy coś na miarę.
          </Link>
        </p>
      </Container>
    </section>
  );
}
