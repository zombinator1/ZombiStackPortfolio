'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const BASE = '/demos/photograph';

const navLinks = [
  { href: BASE, label: 'Home' },
  { href: `${BASE}/portfolio`, label: 'Portfolio' },
  { href: `${BASE}/services`, label: 'Usługi' },
  { href: `${BASE}/about`, label: 'O mnie' },
  { href: `${BASE}/contact`, label: 'Kontakt' },
];

export function PhotoNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  const isActive = (href: string) =>
    href === BASE ? pathname === href : pathname.startsWith(href);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href={BASE} className="group flex items-center gap-2">
          <svg className="h-7 w-7 text-zinc-900 transition-colors group-hover:text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
          <span className="font-serif text-xl font-semibold text-zinc-900">Anna Kowalska</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                isActive(link.href) ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-700 transition-all ${
                isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link
            href={`${BASE}/contact`}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700"
          >
            Umów sesję
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-zinc-900 transition-colors hover:text-amber-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(link.href) ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`${BASE}/contact`}
              className="block w-full rounded-full bg-zinc-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-amber-700"
            >
              Umów sesję
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
