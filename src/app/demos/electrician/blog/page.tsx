import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  blogPosts,
  FinalCtaSection,
  PageHero,
  SectionTitle,
  SiteShell,
} from '../_components/electrician-components';

export const metadata: Metadata = {
  title: 'Blog — VoltMark Instalacje',
  description: 'Przykładowa podstrona blogowa dla firmy elektrycznej.',
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Podstrona contentowa"
        title="Praktyczne porady i aktualności z branży elektrycznej"
        description="Blog w tym demie nie jest ozdobą. Ma pokazać, że strona firmowa może wspierać pozycjonowanie, budować eksperckość i odpowiadać na pytania klientów jeszcze przed kontaktem."
        secondaryHref="/demos/electrician/kontakt"
        secondaryLabel="Skonsultuj swój przypadek"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Wiedza"
            title="Treści, które mają pomagać, a nie komplikować"
            description="W branży elektrycznej łatwo zgubić się w nadmiarze technicznych pojęć. Dlatego wpisy są napisane prostym językiem i skupiają się na decyzjach, które klient faktycznie musi podjąć przy budowie, remoncie albo modernizacji."
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-zinc-950">{post.title}</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">{post.excerpt}</p>
                <div className="mt-8 rounded-[1.25rem] border border-zinc-200 bg-white p-5 text-sm leading-7 text-zinc-600">
                  To jest widok listy wpisów. Zgodnie z ustaleniami demo pokazuje stronę bloga bez wdrażania pełnych widoków pojedynczych artykułów, żeby nie spowalniać realizacji.
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f7f8] py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Dlaczego to ważne"
              title="Blog dobrze pokazuje różnicę między prostą wizytówką a pełną stroną firmową"
              description="Jeśli klient ma zobaczyć sens droższego pakietu, potrzebuje czegoś więcej niż tylko kilku sekcji na stronie głównej. Blog jest jednym z tych elementów, które wzmacniają poczucie, że serwis został zaprojektowany długofalowo."
            />
          </div>
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Rekomendacja wdrożeniowa</p>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              Na etapie demo wystarczy lista kilku wpisów. To rozsądny kompromis: pokazuje architekturę strony i potencjał SEO, ale nie rozciąga implementacji na dziesiątki dodatkowych widoków bez realnej wartości sprzedażowej.
            </p>
            <div className="mt-8">
              <Link href="/demos/electrician/kontakt" className="inline-flex rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800">
                Zobacz, jak można rozwinąć to dalej
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </SiteShell>
  );
}
