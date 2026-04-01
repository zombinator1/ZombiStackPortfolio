export type TemplateTheme = {
  primaryColor: string;
  accentColor: string;
  fontStyle: 'sans' | 'serif';
};

export type TemplateSectionType = 'hero' | 'services' | 'projects' | 'contact';

export type HeroSectionData = {
  type: 'hero';
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServicesSectionData = {
  type: 'services';
  heading: string;
  items: ServiceItem[];
};

export type ProjectItem = {
  title: string;
  description: string;
};

export type ProjectsSectionData = {
  type: 'projects';
  heading: string;
  items: ProjectItem[];
};

export type ContactSectionData = {
  type: 'contact';
  heading: string;
  phone?: string;
  email?: string;
  address?: string;
};

export type TemplateSection =
  | HeroSectionData
  | ServicesSectionData
  | ProjectsSectionData
  | ContactSectionData;

export type TemplateDefinition = {
  slug: string;
  name: string;
  category: string;
  description: string;
  theme: TemplateTheme;
  sections: TemplateSection[];
};
