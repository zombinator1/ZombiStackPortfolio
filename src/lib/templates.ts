import { templates } from '@/data/templates';
import type { TemplateDefinition } from '@/types/template';

export function getTemplates(): TemplateDefinition[] {
  return templates;
}

export function getTemplateBySlug(slug: string): TemplateDefinition | undefined {
  return templates.find((t) => t.slug === slug);
}
