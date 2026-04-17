import type { Metadata } from 'next';
import { DemosPreview } from '@/components/marketing/demos-preview';
import { ProcessSteps } from '@/components/marketing/process-steps';
import { CtaBand } from '@/components/marketing/cta-band';
import { Pricing } from '@/components/marketing/pricing';
import { AboutMeD } from '@/components/marketing/about-me';
import { HeroD } from '@/components/marketing/hero-d';

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
      <Pricing />
      <CtaBand />
    </>
  );
}
