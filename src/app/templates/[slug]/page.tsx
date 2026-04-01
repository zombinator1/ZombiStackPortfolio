import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTemplateBySlug, getTemplates } from '@/lib/templates';
import { SectionRenderer } from '@/components/template-sections/section-renderer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getTemplates().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) return {};

  return {
    title: `Demo: ${template.name}`,
    description: template.description,
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) notFound();

  return (
    <div>
      <div className="border-b border-zinc-200 bg-amber-50 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Tryb demo</span> — to przykładowa
            strona dla klienta. Treści i dane są fikcyjne.
          </p>
          <Link
            href="/templates"
            className="shrink-0 text-sm font-medium text-amber-900 underline hover:no-underline"
          >
            ← Wróć do listy
          </Link>
        </div>
      </div>

      {template.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  );
}
