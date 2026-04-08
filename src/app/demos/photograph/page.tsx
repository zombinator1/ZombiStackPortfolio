'use client';

import Image from 'next/image';
import { useState } from 'react';
/* Icons */
const Icons = {
  Award: () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>,
  Camera: () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" /></svg>,
  Check: () => <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>,
  Clock: () => <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  Instagram: () => <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>,
  Facebook: () => <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Mail: () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>,
  MapPin: () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>,
  Phone: () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>,
  Send: () => <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>,
  Star: () => <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>,
  Users: () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>,
};
const { Award, Camera, Check, Clock, Instagram, Facebook, Mail, MapPin, Phone, Send, Star, Users } = Icons;

export default function PhotographDemo() {
  return (
    <div className="font-sans antialiased">
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-zinc-900/50 to-transparent z-10" />
      <Image
        src="https://images.unsplash.com/photo-1549872063-e752dd3c88f2?auto=format&fit=crop&w=1920&q=80"
        alt="Wedding photography hero"
        fill
        className="object-cover"
        unoptimized
        priority
      />
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="mb-6 font-serif text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          Uchwycam Twoje
          <span className="mt-2 block text-amber-400">Niezapomniane Chwile</span>
        </h1>
        <p className="mb-8 mx-auto max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl">
          Profesjonalna fotografia ślubna, portretowa i rodzinna. Z pasją tworzę wspomnienia, które pozostaną na zawsze.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/demos/photograph/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            Zobacz Portfolio
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-zinc-900"
          >
            Umów Sesję
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white p-1">
          <div className="h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}

/* ─── Intro ───────────────────────────────────────────────────────────────── */

function IntroSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <h2 className="mb-6 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">
          Witaj w moim świecie fotografii
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-zinc-600">
          Jestem Anna, fotografem z pasją do uwieczniania najpiękniejszych momentów życia.
          Specjalizuję się w fotografii ślubnej, portretowej i rodzinnej, tworząc obrazy pełne emocji i naturalności.
        </p>
        <p className="text-lg leading-relaxed text-zinc-600">
          Każda sesja to dla mnie wyjątkowa historia, którą chcę opowiedzieć przez obiektyw.
          Zapraszam Cię do zapoznania się z moją pracą.
        </p>
      </div>
    </section>
  );
}

/* ─── Stats ───────────────────────────────────────────────────────────────── */

function StatsSection() {
  const stats = [
    { Icon: Camera, value: '500+', label: 'Sesji' },
    { Icon: Users, value: '300+', label: 'Zadowolonych Klientów' },
    { Icon: Award, value: '15+', label: 'Lat Doświadczenia' },
    { Icon: Star, value: '5.0', label: 'Średnia Ocen' },
  ];
  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-700/10">
                <Icon className="h-6 w-6 text-amber-700" />
              </div>
              <div className="mb-1 font-serif text-3xl font-bold text-zinc-900">{value}</div>
              <div className="text-sm text-zinc-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ───────────────────────────────────────────────────────────── */

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1768900044120-650653953a6a?auto=format&fit=crop&w=800&q=80', title: 'Śluby', href: '/demos/photograph/portfolio/weddings' },
  { src: 'https://images.unsplash.com/photo-1706824261828-6127b3beb64d?auto=format&fit=crop&w=800&q=80', title: 'Portrety', href: '/demos/photograph/portfolio/portraits' },
  { src: 'https://images.unsplash.com/photo-1603367563698-67012943fd67?auto=format&fit=crop&w=800&q=80', title: 'Rodzinne', href: '/demos/photograph/portfolio/family' },
  { src: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&w=800&q=80', title: 'Biznesowe', href: '/demos/photograph/portfolio/business' },
  { src: 'https://images.unsplash.com/photo-1621797005674-48e0150206da?auto=format&fit=crop&w=800&q=80', title: 'Narzeczeńskie', href: '/demos/photograph/portfolio/weddings' },
  { src: 'https://images.unsplash.com/photo-1770896686915-140095250023?auto=format&fit=crop&w=800&q=80', title: 'Artystyczne', href: '/demos/photograph/portfolio/portraits' },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">
            Moje Najlepsze Prace
          </h2>
          <p className="text-lg text-zinc-600">
            Odkryj kolekcję moich ulubionych zdjęć z różnych sesji
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioImages.map(({ src, title, href }) => (
            <a key={title} href={href} className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 text-white transition-transform group-hover:translate-y-0">
                <h3 className="font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-amber-300">Zobacz galerię →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────────────── */

const services = [
  {
    title: 'Sesje Ślubne',
    price: 'od 2500 zł',
    duration: '8–12 godzin',
    images: '300–500 zdjęć',
    popular: true,
    features: [
      'Pełna obsługa fotograficzna ślubu i wesela',
      'Sesja narzeczeńska w prezencie',
      'Profesjonalna obróbka wszystkich zdjęć',
      'Galeria online z możliwością pobrania',
      'Pendrive z pełną rozdzielczością',
      'Album premium (opcjonalnie)',
    ],
  },
  {
    title: 'Sesje Portretowe',
    price: 'od 400 zł',
    duration: '1–2 godziny',
    images: '30–50 zdjęć',
    popular: false,
    features: [
      'Sesja w plenerze lub studio',
      'Pomoc w doborze lokalizacji',
      'Profesjonalny retusz zdjęć',
      'Galeria online',
      'Zdjęcia w pełnej rozdzielczości',
      'Konsultacja przed sesją',
    ],
  },
  {
    title: 'Sesje Rodzinne',
    price: 'od 500 zł',
    duration: '1–2 godziny',
    images: '40–60 zdjęć',
    popular: false,
    features: [
      'Sesja plenerowa lub w domu',
      'Naturalna, swobodna atmosfera',
      'Praca z dziećmi',
      'Profesjonalna obróbka zdjęć',
      'Galeria online',
      'Zdjęcia w pełnej rozdzielczości',
    ],
  },
  {
    title: 'Sesje Biznesowe',
    price: 'od 600 zł',
    duration: '2–3 godziny',
    images: '50–80 zdjęć',
    popular: false,
    features: [
      'Portrety biznesowe / headshots',
      'Zdjęcia eventów korporacyjnych',
      'Fotografia produktowa',
      'Ekspresowa obróbka (24–48h)',
      'Zdjęcia w kilku formatach',
      'Licencja komercyjna',
    ],
  },
];

function ServicesSection() {
  return (
    <section id="uslugi" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">
            Usługi i Cennik
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">
            Każdy pakiet można indywidualnie rozszerzyć o dodatkowe opcje.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-2xl bg-white p-8 ${
                s.popular
                  ? 'border-2 border-amber-700 shadow-xl lg:scale-105'
                  : 'border border-zinc-200 shadow-sm'
              }`}
            >
              {s.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-700 px-4 py-1 text-sm font-semibold text-white">
                  Najpopularniejsze
                </div>
              )}
              <h3 className="mb-2 font-serif text-xl font-semibold text-zinc-900">{s.title}</h3>
              <div className="mb-4 text-2xl font-bold text-amber-700">{s.price}</div>
              <div className="mb-6 space-y-1.5 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {s.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {s.images}
                </div>
              </div>
              <ul className="mb-8 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                  s.popular
                    ? 'bg-amber-700 text-white hover:bg-amber-600'
                    : 'border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                Zapytaj o termin
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────────────────────── */

/* ─── Testimonials ────────────────────────────────────────────────────────── */

const testimonials = [
  { quote: 'Anna ma niesamowity talent do uchwycenia prawdziwych emocji. Nasze zdjęcia ślubne są po prostu magiczne!', author: 'Karolina i Michał', role: 'Sesja ślubna' },
  { quote: 'Profesjonalizm na najwyższym poziomie. Zdjęcia biznesowe przekroczyły nasze oczekiwania.', author: 'Jan Nowak', role: 'Sesja biznesowa' },
  { quote: 'Wspaniała atmosfera podczas sesji rodzinnej. Dzieci czuły się swobodnie, a zdjęcia są cudowne!', author: 'Rodzina Kowalskich', role: 'Sesja rodzinna' },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">
            Co mówią moi klienci
          </h2>
          <p className="text-lg text-zinc-600">Opinie osób, które zaufały mojej pracy</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, author, role }) => (
            <div key={author} className="rounded-xl bg-zinc-50 p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 italic leading-relaxed text-zinc-700">"{quote}"</p>
              <div className="font-semibold text-zinc-900">{author}</div>
              <div className="text-sm text-zinc-500">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────────────────────── */

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-2 font-serif text-3xl font-semibold text-zinc-900 md:text-4xl">
              Umów sesję
            </h2>
            <p className="mb-8 text-lg text-zinc-600">
              Napisz lub zadzwoń — chętnie odpowiem na wszystkie pytania.
            </p>
            <div className="space-y-6">
              <ContactItem Icon={Phone} label="Telefon" value="+48 123 456 789" href="tel:+48123456789" sub="Pon–Pt: 9:00–18:00" />
              <ContactItem Icon={Mail} label="Email" value="anna@fotografia.pl" href="mailto:anna@fotografia.pl" sub="Odpowiadam w ciągu 24h" />
              <ContactItem Icon={MapPin} label="Lokalizacja" value="Warszawa i okolice" sub="Dojazd w całej Polsce" />
            </div>
            <div className="mt-10 border-t border-zinc-200 pt-8">
              <p className="mb-4 font-semibold text-zinc-900">Obserwuj mnie</p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-white transition hover:bg-amber-700">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border-2 border-zinc-900 px-5 py-2.5 text-sm text-zinc-900 transition hover:bg-zinc-900 hover:text-white">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h3 className="mb-6 font-serif text-2xl font-semibold text-zinc-900">Formularz kontaktowy</h3>
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">Wiadomość wysłana!</h3>
                <p className="text-zinc-600">Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormField id="name" label="Imię i nazwisko *" type="text" placeholder="Jan Kowalski" value={formData.name} onChange={handleChange} required />
                <FormField id="email" label="Email *" type="email" placeholder="jan@example.com" value={formData.email} onChange={handleChange} required />
                <FormField id="phone" label="Telefon" type="tel" placeholder="+48 123 456 789" value={formData.phone} onChange={handleChange} />
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-zinc-900">Rodzaj sesji *</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-700">
                    <option value="">Wybierz rodzaj sesji</option>
                    <option value="wedding">Sesja ślubna</option>
                    <option value="portrait">Sesja portretowa</option>
                    <option value="family">Sesja rodzinna</option>
                    <option value="business">Sesja biznesowa</option>
                    <option value="other">Inne</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900">Wiadomość *</label>
                  <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder="Opowiedz mi o swoich planach na sesję..." className="w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-700" />
                </div>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition hover:bg-amber-700">
                  <Send className="h-5 w-5" />
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ Icon, label, value, href, sub }: { Icon: React.ElementType; label: string; value: string; href?: string; sub: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-700/10">
        <Icon className="h-6 w-6 text-amber-700" />
      </div>
      <div>
        <p className="font-semibold text-zinc-900">{label}</p>
        {href ? (
          <a href={href} className="text-zinc-600 transition hover:text-amber-700">{value}</a>
        ) : (
          <p className="text-zinc-600">{value}</p>
        )}
        <p className="mt-0.5 text-sm text-zinc-500">{sub}</p>
      </div>
    </div>
  );
}

function FormField({ id, label, type, placeholder, value, onChange, required }: {
  id: string; label: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-900">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-700"
      />
    </div>
  );
}

