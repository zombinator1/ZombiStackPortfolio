import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TemplateCard } from '@/components/ui/template-card';
import { BackgroundDecor } from '@/components/background-decor';
import { getTemplates } from '@/lib/templates';

export function TemplatesPreview() {
  const templates = getTemplates();

  return (
    <section id="szablony" className="relative overflow-hidden bg-gradient-to-b from-zinc-50/60 via-white to-white py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <BackgroundDecor />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Co przykładowo możesz otrzymać"
            subtitle="Kliknij i obejrzyj pełne demo — nie screenshot, tylko działająca strona."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <TemplateCard key={template.slug} template={template} accentIndex={index} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-400">
            <Link href="/#kontakt" className="underline hover:text-zinc-600">
              Napisz — zrobię coś na miarę.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
