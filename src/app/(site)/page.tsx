import type { Metadata } from 'next';
import { DemosPreview } from '@/components/marketing/demos-preview';
import { ProcessSteps } from '@/components/marketing/process-steps';
import { CtaBand } from '@/components/marketing/cta-band';
import { PremiumHero } from '@/components/marketing/premium-hero';
import { OfferIncludes } from '@/components/marketing/offer-includes/dark-accent-offer-includes';
import {  AboutMeE } from '@/components/marketing/about-me';

export const metadata: Metadata = {
  title: 'Strony WWW dla firm — szybko i bez przepłacania',
};

export default function HomePage() {
  return (
    <>
      <PremiumHero />
      <DemosPreview />
      <OfferIncludes />
      {/* ── Wybierz jeden wariant "O mnie" i usuń pozostałe ── */}

      <AboutMeE />
      {/* ─────────────────────────────────────────────────── */}
      <ProcessSteps />
      <CtaBand />
    </>
  );
}
