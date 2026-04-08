import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-serif font-bold text-zinc-200 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
          Strona nie znaleziona
        </h1>
        <p className="text-lg text-zinc-600 mb-8">
          Przepraszam, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
        >
          <Home className="h-5 w-5" />
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
