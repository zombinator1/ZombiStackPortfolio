import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTemplateBySlug, getTemplates } from '@/lib/templates';
import { SectionRenderer } from '@/components/template-sections/section-renderer';
import { siteConfig } from '@/config/site';

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
      <div className="border-b border-amber-200 bg-amber-50 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Tryb demo</span> — treści i dane są fikcyjne. To przykład jak może wyglądać Twoja strona.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/templates" className="text-sm text-amber-700 hover:text-amber-900">
              ← Inne szablony
            </Link>
            <Link
              href={`mailto:${siteConfig.contact.email}?subject=Zainteresowany szablonem ${template.name}`}
              className="rounded-lg bg-amber-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-amber-700"
            >
              Chcę taką stronę →
            </Link>
          </div>
        </div>
      </div>

      {template.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  );
}
