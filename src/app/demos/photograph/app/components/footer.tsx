import { Link } from 'react-router';
import { Camera, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Camera className="h-7 w-7 text-amber-700" />
              <span className="text-lg font-serif font-semibold text-white">
                Anna Kowalska
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Profesjonalna fotografia ślubna, portretowa i rodzinna. Uwieczniam najważniejsze chwile z pasją i sercem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-amber-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-amber-700 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-700 transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-amber-700 transition-colors">
                  O mnie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-amber-700 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kategorie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio/weddings" className="text-sm hover:text-amber-700 transition-colors">
                  Śluby
                </Link>
              </li>
              <li>
                <Link to="/portfolio/portraits" className="text-sm hover:text-amber-700 transition-colors">
                  Portrety
                </Link>
              </li>
              <li>
                <Link to="/portfolio/family" className="text-sm hover:text-amber-700 transition-colors">
                  Rodzinne
                </Link>
              </li>
              <li>
                <Link to="/portfolio/business" className="text-sm hover:text-amber-700 transition-colors">
                  Biznesowe
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+48123456789" className="flex items-center gap-2 text-sm hover:text-amber-700 transition-colors">
                  <Phone className="h-4 w-4" />
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:anna@fotografia.pl" className="flex items-center gap-2 text-sm hover:text-amber-700 transition-colors">
                  <Mail className="h-4 w-4" />
                  anna@fotografia.pl
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} Anna Kowalska Photography. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-zinc-500 hover:text-amber-700 transition-colors">
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
