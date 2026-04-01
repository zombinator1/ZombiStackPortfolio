import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
          <div>
            <p className="text-sm font-semibold text-zinc-900">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-zinc-500">{siteConfig.tagline}</p>
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </Container>
    </footer>
  );
}
