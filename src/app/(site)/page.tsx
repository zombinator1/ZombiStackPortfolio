import type { Metadata } from 'next';
import { DemosPreview } from '@/components/marketing/demos-preview';
import { ProcessSteps } from '@/components/marketing/process-steps';
import { CtaBand } from '@/components/marketing/cta-band';
import { Pricing } from '@/components/marketing/pricing';
import { PremiumHero } from '@/components/marketing/hero';
import { OfferIncludes } from '@/components/marketing/offer-includes';
import {  AboutMeE } from '@/components/marketing/about-me';

export const metadata: Metadata = {
  title: 'Strony WWW dla firm — szybko i bez przepłacania',
};

export default function HomePage() {
  return (
    <>
      <PremiumHero />
      <DemosPreview />
      <AboutMeE />
      <ProcessSteps />
      <Pricing />
      <CtaBand />
    </>
  );
}
