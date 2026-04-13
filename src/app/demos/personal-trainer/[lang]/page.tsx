/*
 * Design note for this file:
 * Neo-constructivist athletic modernism.
 * Ink navy, chalk white, burnt red and warm gold accents.
 * Strong editorial typography, asymmetry, technical panels, premium sports atmosphere.
 * Every section should reinforce sportowy profesjonalizm, mierzalny progres i DNA sportów walki.
 */
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Bebas_Neue, Manrope } from 'next/font/google';
import { getDictionary, hasLocale, locales, type Dict, type Locale } from './dictionaries';
import { TrainerContactForm } from './contact-form';

const displayFont = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const heroImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-hero-combat-athletic-mF4o3dvFfSLZG9GPf7Erp2.webp';
const serviceImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-service-strength-session-hAKHmUmkBQyLcrkN6RAfwj.webp';
const portraitImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-language-contact-portrait-abSzVKFqhJYBzL83fXJ4Uy.webp';
const abstractImage =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663029894603/juYegqbJvnQD5Aw8NESMdG/trener-abstract-performance-grid-iaQfrUD7bKpJfjruAJvGXB.webp';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const flagMap: Record<Locale, string> = { pl: '🇵🇱', es: '🇪🇸', en: '🇬🇧' };

export default async function PersonalTrainerDemo({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} bg-[#09111d] text-white [font-family:var(--font-body)]`}
    >
      <DemoBanner dict={dict} />
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <Audience dict={dict} />
        <AboutSection dict={dict} />
        <OfferSection dict={dict} />
        <PricingSection dict={dict} />
        <ProcessSection dict={dict} />
        <WhyItWorksSection dict={dict} />
        <TestimonialsSection dict={dict} />
        <FaqSection dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}

function DemoBanner({ dict }: { dict: Dict }) {
  return (
    <div className="border-b border-white/10 bg-[#050a12] px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-white/60 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>{dict.banner.text}</p>
        <div className="flex items-center gap-3 text-white/80">
          <Link href="/#demo" className="transition hover:text-[#f3b24f]">
            {dict.banner.back}
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Link href="/#kontakt" className="transition hover:text-[#f3b24f]">
            {dict.banner.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

function Header({ dict, lang }: { dict: Dict; lang: Locale }) {
  const navHrefs = ['#oferta', '#pricing', '#proces', '#efekty', '#faq', '#kontakt'];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09111d]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex min-w-0 flex-col">
          <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#f3b24f]">{dict.header.subtitle}</span>
          <span className="text-lg font-extrabold tracking-[0.08em] text-white">Karolina Wrona</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {dict.header.nav.map((label, i) => (
            <a
              key={label}
              href={navHrefs[i]}
              className="text-sm font-semibold tracking-[0.06em] text-white/74 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/demos/personal-trainer/${l}`}
                className={`text-base leading-none transition ${lang === l ? 'opacity-100' : 'opacity-35 hover:opacity-70'}`}
                title={l === 'pl' ? 'Polski' : l === 'es' ? 'Español' : 'English'}
              >
                {flagMap[l]}
              </Link>
            ))}
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full border border-[#f3b24f]/60 bg-[#f3b24f] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#09111d] transition hover:-translate-y-0.5 hover:bg-[#ffbf5f]"
          >
            {dict.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ dict }: { dict: Dict }) {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Trenerka sportów walki w dynamicznej pozie" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,29,0.96)_0%,rgba(9,17,29,0.92)_38%,rgba(9,17,29,0.58)_66%,rgba(9,17,29,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(182,38,54,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(243,178,79,0.18),transparent_30%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(9,17,29,1),rgba(9,17,29,0))]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-end gap-14 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-20 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/70">
            {dict.hero.tags.map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur">
                {item}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl [font-family:var(--font-display)] text-[4.4rem] uppercase leading-[0.9] tracking-[0.03em] text-white sm:text-[5.8rem] lg:text-[7.8rem]">
            {dict.hero.line1}
            <span className="ml-3 text-[#f3b24f] [text-shadow:0_0_50px_rgba(243,178,79,0.55)]">{dict.hero.accent}</span>
            <span className="block">{dict.hero.line2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {dict.hero.body}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#f3b24f] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#09111d] transition hover:-translate-y-0.5 hover:bg-[#ffbf5f]"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/6 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
            {dict.hero.subtext}
          </p>
        </div>

        <div className="grid gap-4 self-end lg:justify-self-end">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_0_80px_rgba(243,178,79,0.12),0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f3b24f]">{dict.hero.profileLabel}</span>
              <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                {dict.hero.location}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {dict.stats.map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.16em] text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience({ dict }: { dict: Dict }) {
  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-[#0c1625] py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${abstractImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">{dict.audience.label}</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            {dict.audience.heading}
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d2f]/90 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
          <div className="absolute inset-y-0 left-0 w-[3px] rounded-l-[2rem] bg-gradient-to-b from-transparent via-[#f3b24f]/50 to-transparent" />
          <p className="text-lg leading-9 text-white/80">{dict.audience.body}</p>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ dict }: { dict: Dict }) {
  return (
    <section className="bg-[#f2efe8] py-20 text-[#09111d] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#d7d0c4]">
          <img src={portraitImage} alt="Fikcyjna trenerka personalna z doświadczeniem sportowym" className="h-full w-full object-cover object-center" />
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">{dict.about.label}</p>
            <h2 className="mt-4 max-w-3xl [font-family:var(--font-display)] text-5xl uppercase leading-[0.94] tracking-[0.04em] sm:text-6xl">
              {dict.about.heading}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#263246]">{dict.about.body1}</p>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-[#263246]">{dict.about.body2}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dict.about.features.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#09111d]/10 bg-white px-5 py-5 shadow-[0_12px_35px_rgba(9,17,29,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(9,17,29,0.14)]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b62636]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#09111d]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection({ dict }: { dict: Dict }) {
  return (
    <section id="oferta" className="bg-[#09111d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">{dict.offer.label}</p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
              {dict.offer.heading}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62">{dict.offer.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d2f]">
            <img src={serviceImage} alt="Prowadzenie treningu personalnego z naciskiem na technikę" className="h-full min-h-[320px] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,17,29,0.12),rgba(9,17,29,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">{dict.offer.imageLabel}</p>
              <p className="mt-3 max-w-lg text-base leading-8 text-white/82">{dict.offer.imageBody}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {dict.offer.items.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-[1.8rem] border border-white/10 bg-[#101a2b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f3b24f]/40 hover:bg-[#121f33] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f3b24f]">0{index + 1}</span>
                  <span className="h-px w-14 bg-white/10 transition group-hover:bg-[#f3b24f]/40" />
                </div>
                <h3 className="max-w-xl text-xl font-extrabold uppercase tracking-[0.06em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ dict }: { dict: Dict }) {
  return (
    <section id="pricing" className="bg-[#f2efe8] py-20 text-[#09111d] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">{dict.pricing.label}</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] sm:text-6xl">
            {dict.pricing.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#263246]">{dict.pricing.body}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-[#09111d]/10 bg-white p-6 shadow-[0_18px_45px_rgba(9,17,29,0.08)] lg:p-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b62636]">{dict.pricing.notesLabel}</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {dict.pricing.notes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#334155]">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#f3b24f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-[#09111d]/10 bg-[#d7d0c4] p-6 shadow-[0_16px_40px_rgba(9,17,29,0.08)] lg:p-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b62636]">{dict.pricing.label}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {dict.pricing.factors.map((item) => (
                <span key={item} className="rounded-full border border-[#09111d]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#09111d]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-[#263246]">{dict.pricing.positioning}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {dict.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full min-h-[33rem] flex-col overflow-hidden rounded-[2rem] border p-8 shadow-[0_18px_45px_rgba(9,17,29,0.08)] transition duration-300 hover:-translate-y-1 ${plan.featured ? 'border-[#09111d] bg-[#09111d] text-white shadow-[0_24px_70px_rgba(9,17,29,0.2)] lg:scale-[1.015]' : 'border-[#09111d]/10 bg-white text-[#09111d]'}`}
            >
              {plan.featured ? (
                <span className="mb-5 inline-flex w-fit rounded-full bg-[#f3b24f] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#09111d]">
                  {dict.pricing.featuredBadge}
                </span>
              ) : (
                <span className="mb-5 inline-flex w-fit rounded-full border border-[#09111d]/10 bg-[#f7f4ed] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#09111d]">
                  {dict.pricing.planLabel}
                </span>
              )}

              <h3 className="text-2xl font-extrabold uppercase tracking-[0.05em]">{plan.name}</h3>
              <div className={`mt-6 text-5xl font-black leading-none ${plan.featured ? 'text-[#f3b24f]' : 'text-[#09111d]'}`}>{plan.price}</div>
              <p className={`mt-3 text-sm uppercase tracking-[0.18em] ${plan.featured ? 'text-white/62' : 'text-[#5b6576]'}`}>{plan.details}</p>
              <p className={`mt-6 max-w-[28rem] text-sm leading-8 ${plan.featured ? 'text-white/72' : 'text-[#425066]'}`}>{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.points.map((point) => (
                  <li key={point} className={`flex items-start gap-3 text-sm leading-7 ${plan.featured ? 'text-white/84' : 'text-[#334155]'}`}>
                    <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${plan.featured ? 'bg-[#f3b24f]' : 'bg-[#b62636]'}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 ${plan.featured ? 'bg-[#f3b24f] text-[#09111d] hover:bg-[#ffbf5f]' : 'border border-[#09111d]/12 bg-[#09111d] text-white hover:bg-[#122038]'}`}
              >
                {dict.pricing.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-[#09111d]/10 bg-white p-6 shadow-[0_16px_40px_rgba(9,17,29,0.08)] lg:p-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b62636]">{dict.pricing.extrasLabel}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {dict.pricing.extras.map((item) => (
              <div key={item.label} className="flex items-start justify-between gap-4 rounded-[1.2rem] border border-[#09111d]/8 bg-[#fbfaf7] px-4 py-4">
                <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#09111d]">{item.label}</span>
                <span className="max-w-[14rem] text-right text-sm leading-6 text-[#425066]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ dict }: { dict: Dict }) {
  return (
    <section id="proces" className="relative overflow-hidden bg-[#0d1727] py-20 sm:py-24">
      <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/8 lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">{dict.process.label}</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            {dict.process.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {dict.process.steps.map((item) => (
            <article key={item.step} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#b62636]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
              <p className="text-sm font-black tracking-[0.22em] text-[#b62636]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-[0.05em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-8 text-white/68">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItWorksSection({ dict }: { dict: Dict }) {
  return (
    <section id="efekty" className="bg-[#f2efe8] py-20 text-[#09111d] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b62636]">{dict.effects.label}</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] sm:text-6xl">
            {dict.effects.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#263246]">{dict.effects.body}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {dict.effects.items.map((item) => (
            <article key={item.title} className="rounded-[1.8rem] border border-[#09111d]/10 bg-white p-6 shadow-[0_15px_40px_rgba(9,17,29,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(9,17,29,0.13)]">
              <div className="mb-4 h-1 w-10 rounded-full bg-[#b62636]" />
              <h3 className="text-xl font-extrabold uppercase tracking-[0.06em] text-[#09111d]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4c5a6f]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ dict }: { dict: Dict }) {
  return (
    <section className="bg-[#09111d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">{dict.testimonials.label}</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            {dict.testimonials.heading}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {dict.testimonials.quotes.map((quote, index) => (
              <article key={quote} className="rounded-[2rem] border border-white/10 bg-[#101a2b] p-7 shadow-[0_14px_35px_rgba(0,0,0,0.22)] transition duration-300 hover:border-[#f3b24f]/20 hover:bg-[#111f35]">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b62636]">0{index + 1}</p>
                <p className="mt-2 text-5xl font-black leading-none text-[#f3b24f]/20">&quot;</p>
                <p className="mt-1 text-lg leading-9 text-white/82">{quote}</p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111d2f]">
            <img src={portraitImage} alt="Profesjonalny portret fikcyjnej trenerki" className="h-full min-h-[520px] w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ dict }: { dict: Dict }) {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#0d1727] py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${abstractImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">{dict.faq.label}</p>
          <h2 className="mt-4 [font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            {dict.faq.heading}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-8 text-white/64">{dict.faq.description}</p>
        </div>

        <div className="grid gap-4">
          {dict.faq.items.map((item) => (
            <article key={item.question} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:border-[#f3b24f]/20 hover:bg-white/8">
              <h3 className="text-lg font-extrabold uppercase tracking-[0.05em] text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ dict }: { dict: Dict }) {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-[#09111d] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_top_right,rgba(243,178,79,0.06),transparent),radial-gradient(ellipse_60%_50%_at_bottom_left,rgba(182,38,54,0.06),transparent)]" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="lg:pt-2">
          <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f3b24f]">
            {dict.cta.label}
          </p>
          <h2 className="[font-family:var(--font-display)] text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-6xl">
            {dict.cta.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            {dict.cta.body}
          </p>
          <ul className="mt-8 flex flex-col gap-3.5">
            {dict.form.reassurances.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/65">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e2f45] to-[#b62636]/70 text-[10px] font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <TrainerContactForm
          labels={{
            labelGoal: dict.form.labelGoal,
            placeholderGoal: dict.form.placeholderGoal,
            labelName: dict.form.labelName,
            labelEmail: dict.form.labelEmail,
            labelPhone: dict.form.labelPhone,
            submit: dict.form.submit,
            submitting: dict.form.submitting,
            successTitle: dict.form.successTitle,
            successBody: dict.form.successBody,
          }}
        />
      </div>
    </section>
  );
}

function Footer({ dict }: { dict: Dict }) {
  return (
    <footer className="border-t border-white/8 bg-[#09111d] px-4 py-8 text-sm text-white/46 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{dict.footer.name}</p>
        <p>{dict.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
