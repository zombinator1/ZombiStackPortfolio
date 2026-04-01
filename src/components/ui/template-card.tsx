import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { TemplateDefinition } from '@/types/template';

type TemplateCardProps = {
  template: TemplateDefinition;
};

function TemplateCardThumbnail() {
  return (
    <div className="flex h-44 flex-col gap-2 rounded-t-xl bg-zinc-800 p-4">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <div className="h-2 w-20 rounded-full bg-zinc-600" />
        <div className="ml-auto h-2 w-12 rounded-full bg-zinc-700" />
      </div>
      <div className="mt-1 h-7 w-3/4 rounded bg-zinc-600" />
      <div className="h-3 w-1/2 rounded bg-zinc-700" />
      <div className="mt-auto grid grid-cols-2 gap-2">
        <div className="h-10 rounded bg-zinc-700" />
        <div className="h-10 rounded bg-zinc-700" />
      </div>
    </div>
  );
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <TemplateCardThumbnail />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900">{template.name}</h3>
          <Badge>{template.category}</Badge>
        </div>
        <p className="mt-2 text-sm text-zinc-500">{template.description}</p>
        <div className="mt-6">
          <Button href={`/templates/${template.slug}`} variant="secondary" size="sm">
            Otwórz demo →
          </Button>
        </div>
      </div>
    </div>
  );
}
