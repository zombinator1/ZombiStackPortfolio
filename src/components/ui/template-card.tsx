import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { sectionAccents } from '@/config/accents';
import type { TemplateDefinition } from '@/types/template';

type TemplateCardProps = {
  template: TemplateDefinition;
  accentIndex?: number;
};

function TemplateCardThumbnail() {
  return (
    <div className="h-56 overflow-hidden rounded-t-[calc(2rem-1px)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-zinc-600" />
        <div className="h-2 w-2 rounded-full bg-zinc-600" />
        <div className="h-2 w-2 rounded-full bg-zinc-600" />
        <div className="ml-2 h-3.5 w-32 rounded-sm bg-zinc-800" />
      </div>

      {/* Simulated navbar */}
      <div className="flex items-center justify-between bg-zinc-800/90 px-3 py-2">
        <div className="h-2.5 w-14 rounded bg-zinc-600/80" />
        <div className="flex items-center gap-2">
          <div className="h-2 w-7 rounded bg-zinc-700" />
          <div className="h-2 w-7 rounded bg-zinc-700" />
          <div className="h-5 w-14 rounded bg-zinc-600" />
        </div>
      </div>

      {/* Hero area */}
      <div className="px-3 py-4" style={{ backgroundColor: 'rgb(30 30 38)' }}>
        <div className="mb-1.5 h-3.5 w-3/4 rounded bg-zinc-600" />
        <div className="mb-1 h-2.5 w-1/2 rounded bg-zinc-700/80" />
        <div className="mt-3 h-6 w-20 rounded-full bg-indigo-800/70" />
      </div>

      {/* Services row */}
      <div className="grid grid-cols-3 gap-1.5 bg-zinc-900 px-3 py-2.5">
        <div className="h-9 rounded-lg bg-zinc-800" />
        <div className="h-9 rounded-lg bg-zinc-800" />
        <div className="h-9 rounded-lg bg-zinc-800" />
      </div>
    </div>
  );
}

export function TemplateCard({ template, accentIndex = 0 }: TemplateCardProps) {
  const accent = sectionAccents[accentIndex % sectionAccents.length];

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/95 ring-1 ring-zinc-950/5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(15,23,42,0.10)] flex flex-col">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-90`} />
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />
      <div className={`absolute right-0 top-0 h-28 w-28 rounded-full ${accent.orb} blur-3xl transition duration-500 group-hover:scale-110`} />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-b from-white via-white to-zinc-50/40" />

      <div className="relative">
        <TemplateCardThumbnail />
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900">{template.name}</h3>
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
