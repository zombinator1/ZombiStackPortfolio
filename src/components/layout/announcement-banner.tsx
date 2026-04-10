import Link from 'next/link';

export function AnnouncementBanner() {
  return (
    <div className="relative z-50 bg-zinc-950 px-4 py-2.5 text-center text-sm text-white">
      <span className="mr-2 inline-block rounded-full bg-indigo-500 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
        Oferta
      </span>
      Pierwsze{' '}
      <span className="font-semibold text-indigo-300">3 strony bez opłaty za pracę</span>
      {' '}— płacisz tylko za domenę i hosting (~250 zł/rok).{' '}
      <Link
        href="/#cennik"
        className="ml-1 inline-flex items-center gap-1 font-semibold text-white underline underline-offset-2 hover:text-indigo-200 transition-colors"
      >
        Dowiedz się więcej
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
