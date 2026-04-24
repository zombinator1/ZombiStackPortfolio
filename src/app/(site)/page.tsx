import type { Metadata } from 'next';
import { DemosPreview } from '@/components/marketing/demos-preview';
import { ProcessSteps } from '@/components/marketing/process-steps';
import { CtaBand } from '@/components/marketing/cta-band';
import { AboutMeD } from '@/components/marketing/about-me';
import { HeroD } from '@/components/marketing/hero-d';
import { PricingE } from '@/components/marketing/pricing-e';
import { Faq } from '@/components/marketing/faq';

export const metadata: Metadata = {
  title: 'Strony WWW dla firm — szybko i bez przepłacania',
};

export default function HomePage() {
  return (
    <>
      <HeroD />
      <DemosPreview />
      <AboutMeD />
      <ProcessSteps />
      <PricingE />
      <Faq />
      <CtaBand />
    </>
  );
}
