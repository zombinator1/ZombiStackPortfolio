import { Link } from 'react-router';
import { ArrowRight, Award, Users, Camera, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-transparent z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1549872063-e752dd3c88f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBicmlkZSUyMHdlZGRpbmclMjBkcmVzc3xlbnwxfHx8fDE3NzU2NjEzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6 tracking-tight">
            Uchwycam Twoje
            <span className="block mt-2 text-amber-400">Niezapomniane Chwile</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Profesjonalna fotografia ślubna, portretowa i rodzinna. Z pasją tworzę wspomnienia, które pozostaną na zawsze.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Zobacz Portfolio
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-zinc-900 transition-all inline-flex items-center gap-2"
            >
              Umów Sesję
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-6">
              Witaj w moim świecie fotografii
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-4">
              Jestem Anna, fotografem z pasją do uwieczniania najpiękniejszych momentów życia. 
              Specjalizuję się w fotografii ślubnej, portretowej i rodzinnej, tworząc obrazy pełne emocji i naturalności.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Każda sesja to dla mnie wyjątkowa historia, którą chcę opowiedzieć przez obiektyw. 
              Zapraszam Cię do zapoznania się z moją pracą.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={Camera} value="500+" label="Sesji" />
            <StatCard icon={Users} value="300+" label="Zadowolonych Klientów" />
            <StatCard icon={Award} value="15+" label="Lat Doświadczenia" />
            <StatCard icon={Star} value="5.0" label="Średnia Ocen" />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Moje Najlepsze Prace
            </h2>
            <p className="text-lg text-zinc-600">
              Odkryj kolekcję moich ulubionych zdjęć z różnych sesji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1768900044120-650653953a6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHJvbWFudGljfGVufDF8fHx8MTc3NTU3NzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Śluby"
              category="weddings"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1706824261828-6127b3beb64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc3NTYyMDMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Portrety"
              category="portraits"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG91dGRvb3IlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzU2NjEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              title="Rodzinne"
              category="family"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NjQ0NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              title="Biznesowe"
              category="business"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NTY2MTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Narzeczeńskie"
              category="weddings"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1770896686915-140095250023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzU2NjEzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              title="Artystyczne"
              category="portraits"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
            >
              Zobacz Pełne Portfolio
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-zinc-900 mb-4">
              Co mówią moi klienci
            </h2>
            <p className="text-lg text-zinc-600">
              Opinie osób, które zaufały mojej pracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Anna ma niesamowity talent do uchwycenia prawdziwych emocji. Nasze zdjęcia ślubne są po prostu magiczne!"
              author="Karolina i Michał"
              role="Sesja ślubna"
            />
            <TestimonialCard
              quote="Profesjonalizm na najwyższym poziomie. Zdjęcia biznesowe przekroczyły nasze oczekiwania."
              author="Jan Nowak"
              role="Sesja biznesowa"
            />
            <TestimonialCard
              quote="Wspaniała atmosfera podczas sesji rodzinnej. Dzieci czuły się swobodnie, a zdjęcia są cudowne!"
              author="Rodzina Kowalskich"
              role="Sesja rodzinna"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Gotowy na swoją sesję?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Skontaktuj się ze mną już dziś i zarezerwuj termin swojej wymarzonej sesji
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
          >
            Umów Bezpłatną Konsultację
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-700/10 rounded-full mb-3">
        <Icon className="h-6 w-6 text-amber-700" />
      </div>
      <div className="text-3xl font-serif font-bold text-zinc-900 mb-1">{value}</div>
      <div className="text-sm text-zinc-600">{label}</div>
    </div>
  );
}

function PortfolioCard({ image, title, category }: { image: string; title: string; category: string }) {
  return (
    <Link
      to={`/portfolio/${category}`}
      className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-zinc-100"
    >
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-xl font-serif font-semibold">{title}</h3>
      </div>
    </Link>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-zinc-700 mb-6 leading-relaxed italic">"{quote}"</p>
      <div>
        <div className="font-semibold text-zinc-900">{author}</div>
        <div className="text-sm text-zinc-500">{role}</div>
      </div>
    </div>
  );
}
