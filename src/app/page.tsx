import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/hero';
import { TemplatesPreview } from '@/components/marketing/templates-preview';
import { ProcessSteps } from '@/components/marketing/process-steps';
import { GoogleReviews } from '@/components/marketing/google-reviews';
import { OfferIncludes } from '@/components/marketing/offer-includes';
import { ValueProps } from '@/components/marketing/value-props';
import { CtaBand } from '@/components/marketing/cta-band';

export const metadata: Metadata = {
  title: 'Strony WWW dla firm — szybko i bez przepłacania',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferIncludes />
      <TemplatesPreview />
      <ProcessSteps />
      {/* <GoogleReviews /> */}
      <ValueProps />
      <CtaBand />
    </>
  );
}
