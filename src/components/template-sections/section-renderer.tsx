import type { TemplateSection } from '@/types/template';
import { HeroSection } from './hero-section';
import { ServicesSection } from './services-section';
import { ProjectsSection } from './projects-section';
import { ContactSection } from './contact-section';

type Props = { section: TemplateSection };

export function SectionRenderer({ section }: Props) {
  switch (section.type) {
    case 'hero':
      return <HeroSection data={section} />;
    case 'services':
      return <ServicesSection data={section} />;
    case 'projects':
      return <ProjectsSection data={section} />;
    case 'contact':
      return <ContactSection data={section} />;
  }
}
