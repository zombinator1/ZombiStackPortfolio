import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Portfolio() {
  const categories = [
    {
      id: 'weddings',
      title: 'Śluby',
      description: 'Uwieczniam najpiękniejszy dzień w Waszym życiu',
      image: 'https://images.unsplash.com/photo-1768900044120-650653953a6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHJvbWFudGljfGVufDF8fHx8MTc3NTU3NzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      count: '150+ sesji',
    },
    {
      id: 'portraits',
      title: 'Portrety',
      description: 'Artystyczne portrety pełne charakteru',
      image: 'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc3NTYyMDMyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      count: '200+ sesji',
    },
    {
      id: 'family',
      title: 'Rodzinne',
      description: 'Ciepłe chwile rodzinnej bliskości',
      image: 'https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG91dGRvb3IlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzU2NjEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '100+ sesji',
    },
    {
      id: 'business',
      title: 'Biznesowe',
      description: 'Profesjonalne zdjęcia biznesowe i korporacyjne',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NjQ0NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      count: '80+ sesji',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-zinc-900 mb-6">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              Odkryj kolekcję moich prac. Każde zdjęcie opowiada wyjątkową historię - pełną emocji, radości i autentycznych momentów.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/portfolio/${category.id}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-zinc-100"
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-sm text-amber-400 mb-2 font-medium">{category.count}</div>
                  <h2 className="text-3xl font-serif font-semibold mb-2">{category.title}</h2>
                  <p className="text-zinc-200">{category.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                    Zobacz galerię
                    <span className="text-amber-400">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-zinc-900 mb-4">
            Chcesz być częścią mojego portfolio?
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Skontaktuj się ze mną i umów swoją wyjątkową sesję
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
          >
            Umów Sesję
          </Link>
        </div>
      </section>
    </div>
  );
}
