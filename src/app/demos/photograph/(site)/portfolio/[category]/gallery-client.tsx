'use client';

import { useState } from 'react';

type Props = {
  title: string;
  images: string[];
};

export function GalleryClient({ title, images }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {images.map((src, i) => (
              <div
                key={i}
                className="mb-6 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => setLightbox(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
            onClick={() => setLightbox((p) => (p! > 0 ? p! - 1 : images.length - 1))}
            className="absolute left-6 p-3 text-white transition-colors hover:text-amber-400"
            aria-label="Poprzednie"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => setLightbox((p) => (p! < images.length - 1 ? p! + 1 : 0))}
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
              src={images[lightbox]}
              alt={`${title} ${lightbox + 1}`}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
