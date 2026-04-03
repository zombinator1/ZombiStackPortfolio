import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { TemplateDefinition } from '@/types/template';

type TemplateCardProps = {
  template: TemplateDefinition;
};

function TemplateCardThumbnail() {
  return (
    <div className="h-52 overflow-hidden rounded-t-xl bg-zinc-800">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-2.5">
        <div className="h-2 w-2 rounded-full bg-red-500/60" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
        <div className="h-2 w-2 rounded-full bg-green-500/60" />
        <div className="ml-2 flex h-4 w-36 items-center rounded bg-zinc-700 px-2">
          <span className="text-[9px] text-zinc-500">zombistack.pl</span>
        </div>
      </div>
      {/* Page content mockup */}
      <div className="bg-zinc-800 p-3 pt-2.5">
        <div className="mb-2 h-8 w-full rounded bg-zinc-600" />
        <div className="mb-1 h-2.5 w-2/3 rounded bg-zinc-700" />
        <div className="mb-3 h-2.5 w-1/2 rounded bg-zinc-700/70" />
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-14 rounded bg-zinc-700/80" />
          <div className="h-14 rounded bg-zinc-700/80" />
          <div className="h-14 rounded bg-zinc-700/80" />
        </div>
      </div>
    </div>
  );
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <TemplateCardThumbnail />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900">{template.name}</h3>
          <Badge>{template.category}</Badge>
        </div>
        <p className="mt-2 text-sm text-zinc-500">{template.description}</p>
        <div className="mt-6">
          <Button href={`/templates/${template.slug}`} size="sm">
            Otwórz demo →
          </Button>
        </div>
      </div>
    </div>
  );
}
