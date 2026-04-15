import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  blogPosts,
  FinalCtaSection,
  SiteShell,
} from '../../_components/electrician-components';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — VoltMark Instalacje`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <section className="bg-zinc-950 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/demos/electrician/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            ← Blog
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {post.content.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-zinc-950">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-8 text-zinc-600">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-8">
            <p className="text-sm font-semibold text-zinc-950">Masz pytania dotyczące swojej instalacji?</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Opisz swój przypadek — odpowiemy i zaproponujemy konkretne rozwiązanie.
            </p>
            <Link
              href="/demos/electrician/kontakt"
              className="mt-6 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Skontaktuj się
            </Link>
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </SiteShell>
  );
}
