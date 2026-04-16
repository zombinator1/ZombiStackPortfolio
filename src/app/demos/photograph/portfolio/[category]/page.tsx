'use client';

import Link from 'next/link';
import { use, useState } from 'react';
import { notFound } from 'next/navigation';

const categoryData: Record<string, { title: string; description: string; images: string[] }> = {
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

export default function PortfolioCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const data = categoryData[category];
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!data) notFound();

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
              {data.title}
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">{data.description}</p>
          </div>
        </div>
      </section>

      {/* Gallery — CSS columns masonry */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {data.images.map((src, i) => (
              <div
                key={i}
                className="mb-6 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => setLightbox(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${data.title} ${i + 1}`}
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 p-2 text-white transition-colors hover:text-amber-400"
            aria-label="Zamknij"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={() => setLightbox((p) => (p! > 0 ? p! - 1 : data.images.length - 1))}
            className="absolute left-6 p-3 text-white transition-colors hover:text-amber-400"
            aria-label="Poprzednie"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => setLightbox((p) => (p! < data.images.length - 1 ? p! + 1 : 0))}
            className="absolute right-6 p-3 text-white transition-colors hover:text-amber-400"
            aria-label="Następne"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="max-h-[90vh] max-w-5xl px-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.images[lightbox]}
              alt={`${data.title} ${lightbox + 1}`}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white">
            {lightbox + 1} / {data.images.length}
          </div>
        </div>
      )}

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
