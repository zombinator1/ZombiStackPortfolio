import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 'weddings',
    title: 'Śluby',
    description: 'Uwieczniam najpiękniejszy dzień w Waszym życiu',
    image: 'https://images.unsplash.com/photo-1768900044120-650653953a6a?auto=format&fit=crop&w=1080&q=80',
    count: '150+ sesji',
  },
  {
    id: 'portraits',
    title: 'Portrety',
    description: 'Artystyczne portrety pełne charakteru',
    image: 'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?auto=format&fit=crop&w=1080&q=80',
    count: '200+ sesji',
  },
  {
    id: 'family',
    title: 'Rodzinne',
    description: 'Ciepłe chwile rodzinnej bliskości',
    image: 'https://images.unsplash.com/photo-1603367563698-67012943fd67?auto=format&fit=crop&w=1080&q=80',
    count: '100+ sesji',
  },
  {
    id: 'business',
    title: 'Biznesowe',
    description: 'Profesjonalne zdjęcia biznesowe i korporacyjne',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&w=1080&q=80',
    count: '80+ sesji',
  },
];

export default function PortfolioPage() {
  return (
    <div className="font-sans antialiased">
      {/* Hero */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-serif text-4xl font-semibold text-zinc-900 md:text-5xl lg:text-6xl">
              Portfolio
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
              Odkryj kolekcję moich prac. Każde zdjęcie opowiada wyjątkową historię — pełną emocji, radości i autentycznych momentów.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/demos/photograph/portfolio/${cat.id}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-2 text-sm font-medium text-amber-400">{cat.count}</div>
                  <h2 className="mb-2 font-serif text-3xl font-semibold">{cat.title}</h2>
                  <p className="text-zinc-200">{cat.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition-all group-hover:gap-3">
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
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-zinc-900 md:text-3xl">
            Chcesz być częścią mojego portfolio?
          </h2>
          <p className="mb-8 text-lg text-zinc-600">
            Skontaktuj się ze mną i umów swoją wyjątkową sesję
          </p>
          <Link
            href="/demos/photograph/contact"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Umów Sesję
          </Link>
        </div>
      </section>
    </div>
  );
}
