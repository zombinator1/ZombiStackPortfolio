import Link from 'next/link';
import { Container } from '@/components/ui/container';

import { siteConfig } from '@/config/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-sm">
      <Container>
        <div className="grid h-16 grid-cols-3 items-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-zinc-950 to-indigo-800 bg-clip-text text-lg font-bold text-transparent"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center justify-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
