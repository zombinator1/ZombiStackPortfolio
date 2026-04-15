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
              <Link
                key={post.slug}
                href={`/demos/electrician/blog/${post.slug}`}
                className="group flex flex-col rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 transition hover:border-amber-400/50 hover:bg-amber-50/30"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-zinc-950 group-hover:text-amber-700 transition">{post.title}</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-600">{post.excerpt}</p>
                <p className="mt-auto pt-8 text-sm font-semibold text-amber-600">Czytaj dalej →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </SiteShell>
  );
}
