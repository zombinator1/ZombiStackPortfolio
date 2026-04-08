import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categoryData: Record<string, { title: string; description: string; images: string[] }> = {
  weddings: {
    title: 'Śluby',
    description: 'Każdy ślub to wyjątkowa historia miłości. Uwieczniam najpiękniejsze momenty tego szczególnego dnia - od pierwszego spojrzenia, przez wzruszające ceremonie, po zabawę do białego rana.',
    images: [
      'https://images.unsplash.com/photo-1768900044120-650653953a6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHJvbWFudGljfGVufDF8fHx8MTc3NTU3NzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1549872063-e752dd3c88f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBicmlkZSUyMHdlZGRpbmclMjBkcmVzc3xlbnwxfHx8fDE3NzU2NjEzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NTY2MTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1696238173596-554e92268051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBicmlkZSUyMGdyb29tfGVufDF8fHx8MTc3NTY2MTM5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768900044120-650653953a6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHJvbWFudGljfGVufDF8fHx8MTc3NTU3NzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NTY2MTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  portraits: {
    title: 'Portrety',
    description: 'Portrety to sztuka pokazania prawdziwej osobowości. Tworzę zdjęcia, które ujawniają charakter, emocje i unikalność każdego człowieka.',
    images: [
      'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc3NTYyMDMyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770896686915-140095250023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzU2NjEzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1771512681998-99342c9a4f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1NTk3OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc3NTYyMDMyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770896686915-140095250023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzU2NjEzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1771512681998-99342c9a4f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1NTk3OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  family: {
    title: 'Rodzinne',
    description: 'Sesje rodzinne to radość, ciepło i autentyczne relacje. Uwieczniam miłość, śmiech i więź, która łączy bliskich.',
    images: [
      'https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG91dGRvb3IlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzU2NjEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1773243086633-69401ebcd103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMHBob3RvZ3JhcGh5JTIwZ2VudGxlfGVufDF8fHx8MTc3NTY2MTM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG91dGRvb3IlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzU2NjEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1773243086633-69401ebcd103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMHBob3RvZ3JhcGh5JTIwZ2VudGxlfGVufDF8fHx8MTc3NTY2MTM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG91dGRvb3IlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzU2NjEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1773243086633-69401ebcd103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMHBob3RvZ3JhcGh5JTIwZ2VudGxlfGVufDF8fHx8MTc3NTY2MTM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  business: {
    title: 'Biznesowe',
    description: 'Profesjonalne zdjęcia biznesowe i korporacyjne. Pomogę Ci zbudować wiarygodny wizerunek dla Twojej marki osobistej lub firmy.',
    images: [
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NjQ0NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772690445981-78b22eacda4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzc1NjYxMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NjQ0NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772690445981-78b22eacda4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzc1NjYxMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NjQ0NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1772690445981-78b22eacda4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzc1NjYxMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
};

export function PortfolioCategory() {
  const { category } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const data = category ? categoryData[category] : null;

  if (!data) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-semibold text-zinc-900 mb-4">
            Kategoria nie znaleziona
          </h1>
          <Link to="/portfolio" className="text-amber-700 hover:text-amber-600">
            Wróć do portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-8 transition-colors"
          >
            ← Powrót do portfolio
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-zinc-900 mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Masonry columnsCount={3} gutter="1.5rem" className="masonry-grid">
            {data.images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setLightboxIndex(index)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${data.title} ${index + 1}`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white hover:text-amber-400 transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : data.images.length - 1))
            }
            className="absolute left-6 p-3 text-white hover:text-amber-400 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! < data.images.length - 1 ? prev! + 1 : 0))
            }
            className="absolute right-6 p-3 text-white hover:text-amber-400 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="max-w-6xl max-h-[90vh] px-16">
            <img
              src={data.images[lightboxIndex]}
              alt={`${data.title} ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {data.images.length}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-zinc-900 mb-4">
            Zainteresowany taką sesją?
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Skontaktuj się ze mną, aby omówić szczegóły
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
          >
            Umów Konsultację
          </Link>
        </div>
      </section>
    </div>
  );
}
