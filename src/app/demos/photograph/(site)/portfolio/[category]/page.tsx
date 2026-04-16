import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client, isSanityConfigured } from '@/sanity/client';
import { urlFor } from '@/sanity/imageUrl';
import { categoryWithPhotosQuery } from '@/sanity/queries';
import type { PortfolioCategoryWithPhotos } from '@/sanity/types';
import { GalleryClient } from './gallery-client';

/* ─── Fallback data ───────────────────────────────────────────────────────── */

const fallbackData: Record<string, { title: string; description: string; images: string[] }> = {
  weddings: {
    title: 'Śluby',
    description: 'Każdy ślub to wyjątkowa historia miłości. Uwieczniam najpiękniejsze momenty tego szczególnego dnia — od pierwszego spojrzenia, przez wzruszające ceremonie, po zabawę do białego rana.',
    images: [
      'https://images.unsplash.com/photo-1768900044120-650653953a6a?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1549872063-e752dd3c88f2?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1621797005674-48e0150206da?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1696238173596-554e92268051?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1768900044120-650653953a6a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621797005674-48e0150206da?auto=format&fit=crop&w=800&q=80',
    ],
  },
  portraits: {
    title: 'Portrety',
    description: 'Portrety to sztuka pokazania prawdziwej osobowości. Tworzę zdjęcia, które ujawniają charakter, emocje i unikalność każdego człowieka.',
    images: [
      'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1770896686915-140095250023?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1771512681998-99342c9a4f12?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1770896686915-140095250023?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1771512681998-99342c9a4f12?auto=format&fit=crop&w=800&q=80',
    ],
  },
  family: {
    title: 'Rodzinne',
    description: 'Sesje rodzinne to radość, ciepło i autentyczne relacje. Uwieczniam miłość, śmiech i więź, która łączy bliskich.',
    images: [
      'https://images.unsplash.com/photo-1603367563698-67012943fd67?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1773243086633-69401ebcd103?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1603367563698-67012943fd67?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1773243086633-69401ebcd103?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603367563698-67012943fd67?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1773243086633-69401ebcd103?auto=format&fit=crop&w=600&q=80',
    ],
  },
  business: {
    title: 'Biznesowe',
    description: 'Profesjonalne zdjęcia biznesowe i korporacyjne. Pomogę Ci zbudować wiarygodny wizerunek dla Twojej marki osobistej lub firmy.',
    images: [
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1772690445981-78b22eacda4b?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1772690445981-78b22eacda4b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1772690445981-78b22eacda4b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  artistic: {
    title: 'Artystyczne',
    description: 'Fotografia artystyczna to ekspresja, nastrój i niepowtarzalna wizja. Tworzę obrazy wykraczające poza dosłowność — pełne symboliki, światła i emocji.',
    images: [
      'https://images.unsplash.com/photo-1770896686915-140095250023?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1080&q=80',
    ],
  },
};

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  let title: string;
  let description: string;
  let images: string[];

  if (isSanityConfigured) {
    const data: PortfolioCategoryWithPhotos | null = await client.fetch(
      categoryWithPhotosQuery,
      { slug: category },
    );

    if (!data) notFound();

    title = data.title;
    description = data.description;
    images = data.photos.map((p) => urlFor(p.image).width(1080).url());
  } else {
    const data = fallbackData[category];
    if (!data) notFound();
    title = data.title;
    description = data.description;
    images = data.images;
  }

  return (
    <div className="font-sans antialiased">
      {/* Hero */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Link
            href="/demos/photograph/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900"
          >
            ← Powrót do portfolio
          </Link>
          <div className="max-w-3xl">
            <h1 className="mb-6 font-serif text-4xl font-semibold text-zinc-900 md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">{description}</p>
          </div>
        </div>
      </section>

      {/* Gallery — lightbox obsługiwany po stronie klienta */}
      <GalleryClient title={title} images={images} />

      {/* CTA */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-zinc-900 md:text-3xl">
            Zainteresowany taką sesją?
          </h2>
          <p className="mb-8 text-lg text-zinc-600">Skontaktuj się ze mną, aby omówić szczegóły</p>
          <Link
            href="/demos/photograph/contact"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Umów Konsultację
          </Link>
        </div>
      </section>
    </div>
  );
}
