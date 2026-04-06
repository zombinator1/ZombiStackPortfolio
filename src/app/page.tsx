import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/hero';
import { TemplatesPreview } from '@/components/marketing/templates-preview';
import { ProcessSteps } from '@/components/marketing/process-steps';
import { ValueProps } from '@/components/marketing/value-props';
import { CtaBand } from '@/components/marketing/cta-band';
import { PremiumHero } from '@/components/marketing/premium-hero';
import { OfferIncludes } from '@/components/marketing/offer-includes/dark-accent-offer-includes';

export const metadata: Metadata = {
  title: 'Strony WWW dla firm — szybko i bez przepłacania',
};

export default function HomePage() {
  return (
    <>
      <PremiumHero />
      <OfferIncludes />
      <TemplatesPreview />
      <ProcessSteps />
      {/* <GoogleReviews /> */}
      <ValueProps />
      <CtaBand />
    </>
  );
}
