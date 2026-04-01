import type { TemplateDefinition } from '@/types/template';

export const templates: TemplateDefinition[] = [
  {
    slug: 'fachowiec',
    name: 'Fachowiec',
    category: 'Usługi lokalne',
    description:
      'Idealny szablon dla hydraulika, elektryka, firmy remontowej lub serwisu. Skupia się na zaufaniu, szybkim kontakcie i pokazaniu realizacji.',
    theme: {
      primaryColor: 'blue',
      accentColor: 'amber',
      fontStyle: 'sans',
    },
    sections: [
      {
        type: 'hero',
        headline: 'Hydraulik w Twoim mieście — szybko i solidnie',
        subheadline:
          'Awarie, instalacje, remonty — działamy od ręki. Zaufało nam już ponad 300 klientów w Poznaniu i okolicach.',
        ctaLabel: 'Zadzwoń teraz',
        ctaHref: 'tel:+48600000000',
      },
      {
        type: 'services',
        heading: 'Co robimy',
        items: [
          {
            title: 'Usuwanie awarii',
            description:
              'Reakcja w ciągu 2 godzin. Działamy 7 dni w tygodniu, również w nocy.',
          },
          {
            title: 'Instalacje wod-kan',
            description:
              'Nowe instalacje, przebudowy i modernizacje w domach i lokalach.',
          },
          {
            title: 'Łazienki pod klucz',
            description:
              'Kompleksowy remont od projektu po wykończenie. Jeden wykonawca, jedno rozliczenie.',
          },
          {
            title: 'Przeglądy i konserwacja',
            description:
              'Regularne serwisowanie instalacji i urządzeń. Zapobiegamy awariom zanim się pojawią.',
          },
        ],
      },
      {
        type: 'projects',
        heading: 'Nasze realizacje',
        items: [
          {
            title: 'Remont łazienki — Poznań, Grunwald',
            description:
              'Kompleksowy remont 8 m² — wymiana instalacji, glazura, armatura. Czas realizacji: 14 dni.',
          },
          {
            title: 'Instalacja centralnego ogrzewania',
            description:
              'Nowe ogrzewanie gazowe w domu jednorodzinnym 160 m². Montaż kotła, rozdzielaczy i grzejników.',
          },
          {
            title: 'Ekspresowa naprawa awarii',
            description:
              'Pęknięcie rury pod posadzką. Lokalizacja i naprawa w 1,5h od zgłoszenia. Zero zalewania sąsiadów.',
          },
          {
            title: 'Wymiana pionów w bloku',
            description:
              'Wymiana pionów wodociągowych i kanalizacyjnych w budynku wielorodzinnym — 6 pięter, 12 mieszkań.',
          },
        ],
      },
      {
        type: 'contact',
        heading: 'Skontaktuj się z nami',
        phone: '+48 600 000 000',
        email: 'kontakt@hydropro.pl',
        address: 'ul. Przykładowa 12, 60-001 Poznań',
      },
    ],
  },
];

export function getTemplates(): TemplateDefinition[] {
  return templates;
}

export function getTemplateBySlug(slug: string): TemplateDefinition | undefined {
  return templates.find((t) => t.slug === slug);
}
