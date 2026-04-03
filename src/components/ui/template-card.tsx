import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { TemplateDefinition } from '@/types/template';

type TemplateCardProps = {
  template: TemplateDefinition;
};

function TemplateCardThumbnail() {
  return (
    <div className="h-56 overflow-hidden rounded-t-2xl bg-zinc-800">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-zinc-600" />
        <div className="h-2 w-2 rounded-full bg-zinc-600" />
        <div className="h-2 w-2 rounded-full bg-zinc-600" />
        <div className="ml-2 h-3.5 w-32 rounded-sm bg-zinc-800" />
      </div>

      {/* Simulated navbar */}
      <div className="flex items-center justify-between bg-zinc-700/80 px-3 py-2">
        <div className="h-2.5 w-14 rounded bg-zinc-500/80" />
        <div className="flex items-center gap-2">
          <div className="h-2 w-7 rounded bg-zinc-600" />
          <div className="h-2 w-7 rounded bg-zinc-600" />
          <div className="h-5 w-14 rounded bg-zinc-500" />
        </div>
      </div>

      {/* Hero area */}
      <div className="bg-zinc-750 px-3 py-4" style={{ backgroundColor: 'rgb(52 52 60)' }}>
        <div className="mb-1.5 h-3.5 w-3/4 rounded bg-zinc-500" />
        <div className="mb-1 h-2.5 w-1/2 rounded bg-zinc-600/80" />
        <div className="mt-3 h-6 w-20 rounded bg-zinc-500/90" />
      </div>

      {/* Services row */}
      <div className="grid grid-cols-3 gap-1.5 bg-zinc-800 px-3 py-2.5">
        <div className="h-9 rounded-sm bg-zinc-700" />
        <div className="h-9 rounded-sm bg-zinc-700" />
        <div className="h-9 rounded-sm bg-zinc-700" />
      </div>
    </div>
  );
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300">
      <TemplateCardThumbnail />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-zinc-900">{template.name}</h3>
          <Badge>{template.category}</Badge>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{template.description}</p>
        <div className="mt-6">
          <Button href={`/templates/${template.slug}`} size="sm">
            Otwórz demo →
          </Button>
        </div>
      </div>
    </div>
  );
}
