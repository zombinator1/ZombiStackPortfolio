import { Metadata } from 'next';
import {
  BlogPreviewSection,
  FinalCtaSection,
  PageHero,
  ProcessSection,
  RealizationsPreview,
  ServicesGrid,
  SiteShell,
  StatStrip,
  TestimonialsSection,
  TrustSection,
} from './_components/electrician-components';

export const metadata: Metadata = {
  title: 'VoltMark Instalacje — demo strony firmowej',
  description: 'Przykładowa wielopodstronowa strona firmowa dla małej firmy elektrycznej w Polsce.',
};

export default function ElectricianHomePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Usługi elektryczne dla domów, mieszkań i małych firm"
        title="Bezpieczne instalacje elektryczne wykonane terminowo i bez niepotrzebnego chaosu"
        description="Wykonujemy instalacje elektryczne, modernizacje, pomiary oraz usuwanie awarii dla klientów prywatnych i firm. To demo pokazuje, jak może wyglądać nowoczesna strona firmowa, która porządkuje ofertę, buduje zaufanie i skraca drogę do kontaktu."
        secondaryHref="/demos/electrician/realizacje"
        secondaryLabel="Zobacz realizacje"
      />
      <StatStrip />
      <ServicesGrid />
      <TrustSection />
      <RealizationsPreview />
      <TestimonialsSection />
      <ProcessSection />
      <BlogPreviewSection />
      <FinalCtaSection />
    </SiteShell>
  );
}
