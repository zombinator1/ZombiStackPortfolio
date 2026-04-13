export type Locale = 'pl' | 'en' | 'es';

export const locales: Locale[] = ['pl', 'en', 'es'];

export function hasLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export type Dict = {
  banner: { text: string; back: string; cta: string };
  header: { subtitle: string; nav: string[]; cta: string };
  hero: {
    tags: string[];
    line1: string;
    accent: string;
    line2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    subtext: string;
    profileLabel: string;
    location: string;
  };
  stats: Array<{ value: string; label: string }>;
  audience: { label: string; heading: string; body: string };
  about: {
    label: string;
    heading: string;
    body1: string;
    body2: string;
    features: string[];
  };
  offer: {
    label: string;
    heading: string;
    description: string;
    imageLabel: string;
    imageBody: string;
    items: Array<{ title: string; description: string }>;
  };
  pricing: {
    label: string;
    heading: string;
    body: string;
    positioning: string;
    factors: string[];
    planLabel: string;
    featuredBadge: string;
    cta: string;
    plans: Array<{
      name: string;
      price: string;
      details: string;
      description: string;
      points: string[];
      featured?: boolean;
    }>;
    extrasLabel: string;
    extras: Array<{ label: string; value: string }>;
    notesLabel: string;
    notes: string[];
  };
  process: {
    label: string;
    heading: string;
    steps: Array<{ step: string; title: string; description: string }>;
  };
  effects: {
    label: string;
    heading: string;
    body: string;
    items: Array<{ title: string; description: string }>;
  };
  testimonials: { label: string; heading: string; quotes: string[] };
  faq: {
    label: string;
    heading: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    label: string;
    heading: string;
    body: string;
  };
  form: {
    labelGoal: string;
    placeholderGoal: string;
    labelName: string;
    labelEmail: string;
    labelPhone: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    reassurances: string[];
  };
  footer: { name: string; disclaimer: string };
};

const pl: Dict = {
  banner: {
    text: 'Demo sprzedażowe • wszystkie dane i treści są fikcyjne',
    back: 'Wróć do oferty',
    cta: 'Chcę takie demo',
  },
  header: {
    subtitle: 'Trener personalny',
    nav: ['Oferta', 'Cennik', 'Proces', 'Efekty', 'FAQ', 'Kontakt'],
    cta: 'Umów konsultację',
  },
  hero: {
    tags: ['Trening personalny', 'Przygotowanie sprawnościowe', 'Trening sportów walki'],
    line1: 'Siła,',
    accent: 'sprawność',
    line2: 'i pewność siebie.',
    body: 'Pomagam kobietom i mężczyznom budować mocniejsze ciało, lepszą kondycję i większą kontrolę nad własną formą. Trenuj konkretnie, rozwijaj realną sprawność i pracuj z podejściem opartym na dyscyplinie, technice i progresie.',
    ctaPrimary: 'Umów konsultację',
    ctaSecondary: 'Zobacz ofertę',
    subtext:
      'Trening indywidualny, przygotowanie sprawnościowe i sporty walki.',
    profileLabel: 'Profil pracy',
    location: 'Warszawa • Online',
  },
  stats: [
    { value: '10+', label: 'lat treningu i startów' },
    { value: '1:1', label: 'indywidualne prowadzenie' },
    { value: '100%', label: 'skupienia na celu' },
  ],
  audience: {
    label: 'Dla kogo',
    heading: 'Trening konkretny, nie przypadkowy.',
    body: 'Ta współpraca jest dla Ciebie, jeśli chcesz poprawić sylwetkę, zwiększyć siłę, zbudować lepszą kondycję i poczuć większą pewność siebie w swoim ciele. Jeśli masz dość chaotycznych planów, przypadkowych ćwiczeń i treningu bez celu, tutaj dostajesz jasny kierunek, strukturę i realny progres.',
  },
  about: {
    label: 'O marce',
    heading: 'Sportowe podejście. Technika. Dyscyplina. Wynik.',
    body1:
      'Trenuję sporty walki od dzieciństwa. Startuje w zawodach w sportach walki. Jestem dumną zdobywczynią kilku medali.',
    body2:
      'Inspiracja sportami walki przekłada się tu na coś więcej niż sam charakter zajęć — buduje koncentrację, sprawność, odporność i pewność siebie, która wychodzi daleko poza salę treningową.',
    features: [
      'Absolwentka Warszawskiego AWF',
      'Czarny pas w Judo',
      'Wygrane zawody WP 2021',
      'Współpraca stacjonarna i online',
    ],
  },
  offer: {
    label: 'Oferta',
    heading: 'Oferta dopasowana do celu, nie do gotowego szablonu.',
    description:
      '',
    imageLabel: 'Podejście treningowe',
    imageBody:
      'Technika, kontrola ruchu, progres i pełne dopasowanie planu do poziomu oraz celu. Tu nie ma miejsca na przypadkowy wysiłek.',
    items: [
      {
        title: 'Trening personalny',
        description:
          'Budowanie siły, poprawa sylwetki i regularny trening dopasowany do Twojego poziomu, celu i tempa życia.',
      },
      {
        title: 'Przygotowanie do testów sprawności fizycznej na studia i w wojsku',
        description:
          'Ukierunkowany trening dla osób, które chcą dobrze przygotować się do testów sprawnościowych na studia, do służby lub do wymagań wojskowych.',
      },
      {
        title: 'Trening sportów walki',
        description:
          'Indywidualne treningi Judo, MMA i box\'u.',
      },
      {
        title: 'Opieka online',
        description:
          'Plan treningowy, prowadzenie i regularne wsparcie dla osób, które chcą trenować skutecznie także poza spotkaniami stacjonarnymi.',
      },
    ],
  },
  pricing: {
    label: 'Cennik',
    heading: 'Jasny model współpracy. Bez zgadywania.',
    body:
      'Możesz zacząć od pojedynczej sesji albo wejść od razu w pakiet, jeśli zależy Ci na regularnym progresie.',
    factors: ['Poziom zaawansowania', 'Cel współpracy', 'Regularność spotkań'],
    planLabel: 'Pakiet',
    featuredBadge: 'Najbardziej opłacalny',
    cta: 'Wybierz pakiet',
    plans: [
      {
        name: 'Pojedynczy trening',
        price: '179 zł',
        details: '1 sesja 1:1',
        description:
          'Dobry start, jeśli chcesz sprawdzić współpracę, wrócić do regularności albo zacząć od konkretnej konsultacji ruchowej.',
        points: ['60 minut pracy 1:1', 'dopasowanie do celu i poziomu', 'jasne wskazówki do dalszego działania'],
      },
      {
        name: 'Pakiet 4 treningów',
        price: '676 zł',
        details: '169 zł / trening',
        description:
          'Opcja dla osób, które chcą wejść w system treningowy, poprawić technikę i zacząć budować mierzalny progres.',
        points: ['4 sesje 1:1', 'priorytetyzacja celu i plan pracy', 'lepsza technika i większa regularność'],
      },
      {
        name: 'Pakiet 8 treningów',
        price: '1272 zł',
        details: '159 zł / trening',
        description:
          'Najlepszy wybór, jeśli zależy Ci na regularnym progresie, większej sprawności i realnym efekcie w sylwetce oraz kondycji.',
        points: ['8 sesji 1:1', 'najkorzystniejsza stawka', 'ciągłość pracy i mocniejsza kontrola postępów'],
        featured: true,
      },
    ],
    extrasLabel: 'Dodatkowe opcje',
    extras: [
      { label: 'Opieka online', value: 'od 249 zł / miesiąc' },
    ],
    notesLabel: 'Ważne informacje',
    notes: [
      'Współpraca odbywa się stacjonarnie w Warszawie lub online.',
      'Pakiet 8 jest najczęściej wybierany przez osoby, które chcą pracować regularnie.',
      'Zakres współpracy jest dopasowywany do celu, poziomu i dostępności czasowej.',
    ],
  },
  process: {
    label: 'Jak wygląda współpraca',
    heading: 'Prosty proces. Jasny cel. Realny progres.',
    steps: [
      {
        step: '01',
        title: 'Konsultacja i cel',
        description:
          'Zaczynamy od rozmowy o Twoim celu, poziomie, ograniczeniach i kierunku pracy.',
      },
      {
        step: '02',
        title: 'Plan działania',
        description: 'Dobieram formę współpracy i system treningowy dopasowany do Twoich potrzeb.',
      },
      {
        step: '03',
        title: 'Realny progres',
        description:
          'Trenujesz konkretnie, z jasnym planem i naciskiem na technikę, dyscyplinę oraz wynik.',
      },
    ],
  },
  effects: {
    label: 'Dlaczego to działa',
    heading: 'Tu liczy się jakość pracy, nie moda.',
    body: 'To podejście nie opiera się na chwilowej motywacji. Liczą się system, technika i konsekwencja. Właśnie dlatego trening daje nie tylko zmęczenie po zajęciach, ale realne efekty: mocniejsze ciało, lepszą sprawność, większą kontrolę ruchu i większą pewność siebie.',
    items: [
      { title: 'Więcej siły', description: 'Mocniejsze ciało, które lepiej radzi sobie w treningu i na co dzień.' },
      { title: 'Lepsza sylwetka', description: 'Efekt regularnej, dobrze zaplanowanej pracy.' },
      { title: 'Większa sprawność', description: 'Lepsza kondycja, dynamika, koordynacja i kontrola ruchu.' },
      { title: 'Pewność siebie', description: 'Większe poczucie kontroli nad ciałem i własnym progresem.' },
    ],
  },
  testimonials: {
    label: 'Opinie',
    heading: 'Najczęściej doceniane: konkret, atmosfera i progres.',
    quotes: [
      'W końcu trenuję według planu, który ma sens. Wszystko jest jasne, konkretne i dopasowane do mojego celu.',
      'To nie jest zwykły trening. Czuję się silniejszy, sprawniejszy i dużo pewniejszy siebie.',
      'Profesjonalne podejście, dobra energia i realne efekty. Wiem, po co trenuję i widzę postęp.',
    ],
  },
  faq: {
    label: 'FAQ',
    heading: 'Najczęstsze pytania',
    description:
      'Strona ma sprzedawać konkret i profesjonalizm, więc odpowiedzi są krótkie, jasne i bez marketingowego dymu.',
    items: [
      {
        question: 'Czy muszę mieć doświadczenie treningowe?',
        answer: 'Nie. Współpraca może zaczynać się od poziomu początkującego.',
      },
      {
        question: 'Czy to oferta tylko dla osób trenujących sporty walki?',
        answer:
          'Nie. Sporty walki są ważnym elementem podejścia, ale oferta jest skierowana do wszystkich, którzy chcą być silniejsi, sprawniejsi i pewniejsi siebie.',
      },
      {
        question: 'Czy mogę trenować z celem sylwetkowym?',
        answer:
          'Tak. Poprawa sylwetki jest jednym z naturalnych efektów dobrze poprowadzonego treningu.',
      },
      {
        question: 'Czy jest możliwość współpracy online?',
        answer:
          'Tak. Możesz pracować także zdalnie, w oparciu o plan, prowadzenie i regularne wsparcie.',
      },
    ],
  },
  cta: {
    label: 'Finalne CTA',
    heading: 'Chcesz trenować mocniej, mądrzej i z realnym celem?',
    body: 'Napisz, jaki masz cel i sprawdź, jaka forma współpracy będzie dla Ciebie najlepsza. Zbuduj siłę, popraw sprawność i trenuj z podejściem, które daje realne efekty.',
  },
  form: {
    labelGoal: 'Opisz swój cel treningowy',
    placeholderGoal: 'Np. Chcę poprawić sylwetkę i zwiększyć siłę. Trenuję 2x w tygodniu, chciałbym 3x. Wolę treningi wieczorowe.',
    labelName: 'Imię i nazwisko',
    labelEmail: 'Adres e-mail',
    labelPhone: 'Numer telefonu (opcjonalnie)',
    submit: 'Wyślij wiadomość',
    submitting: 'Wysyłanie…',
    successTitle: 'Wiadomość wysłana!',
    successBody: 'Odezwę się najszybciej jak to możliwe.',
    reassurances: ['Odpowiem w ciągu 24h', 'Pierwsza konsultacja bezpłatna', 'Bez zobowiązań'],
  },
  footer: {
    name: 'Karolina Wrona — demo wizytówki trenera personalnego',
    disclaimer: 'Wszystkie dane kontaktowe i treści na tej stronie są fikcyjne.',
  },
};

const en: Dict = {
  banner: {
    text: 'Sales demo • all data and content is fictional',
    back: 'Back to offer',
    cta: 'I want this demo',
  },
  header: {
    subtitle: 'Personal trainer',
    nav: ['Offer', 'Pricing', 'Process', 'Results', 'FAQ', 'Contact'],
    cta: 'Book a consultation',
  },
  hero: {
    tags: ['Personal training', 'Fitness testing prep', 'Combat sports training'],
    line1: 'Strength,',
    accent: 'fitness',
    line2: 'and self-confidence.',
    body: 'I help women and men build a stronger body, better endurance, and greater control over their own form. Train purposefully, develop real fitness, and work with an approach based on discipline, technique, and progress.',
    ctaPrimary: 'Book a consultation',
    ctaSecondary: 'See the offer',
    subtext:
      'Individual training, fitness preparation, and combat sports.',
    profileLabel: 'Work profile',
    location: 'Warsaw • Online',
  },
  stats: [
    { value: '10+', label: 'years of training & competing' },
    { value: '1:1', label: 'individual coaching' },
    { value: '100%', label: 'focus on your goal' },
  ],
  audience: {
    label: 'Who it\'s for',
    heading: 'Training with purpose, not by accident.',
    body: 'This collaboration is for you if you want to improve your physique, build strength, develop better fitness, and feel greater confidence in your body. If you\'re done with chaotic plans, random exercises, and training without direction — here you get a clear path, structure, and real progress.',
  },
  about: {
    label: 'About',
    heading: 'Athletic approach. Technique. Discipline. Results.',
    body1:
      'This brand is built on athletic experience and high standards for training quality. The foundation of the work is technique, consistency, and well-planned progression.',
    body2:
      'The influence of combat sports translates into more than just the style of sessions — it builds focus, fitness, resilience, and confidence that extends far beyond the training floor.',
    features: [
      'Training based on technique and movement quality',
      'A system tailored to your real goal',
      'Approach for women and men',
      'In-person and online collaboration',
    ],
  },
  offer: {
    label: 'Offer',
    heading: 'Tailored to your goal, not to a ready-made template.',
    description:
      'Strong athletic character doesn\'t mean chaos. Every form of collaboration has its own goal, scope, and concrete result.',
    imageLabel: 'Training approach',
    imageBody:
      'Technique, movement control, progression, and full adaptation of the plan to your level and goal. There is no room for random effort here.',
    items: [
      {
        title: 'Personal training',
        description:
          'Building strength, improving physique, and consistent training adapted to your level, goal, and lifestyle.',
      },
      {
        title: 'Fitness testing preparation for university and military',
        description:
          'Targeted training for those who want to be well-prepared for fitness tests for university, service, or military requirements.',
      },
      {
        title: 'Combat sports training',
        description:
          'Training based on technique, movement control, dynamics, and the character of combat sports. For those who want to develop fitness, reflexes, and self-confidence.',
      },
      {
        title: 'Online coaching',
        description:
          'A training plan, guidance, and regular support for those who want to train effectively outside of in-person sessions.',
      },
    ],
  },
  pricing: {
    label: 'Pricing',
    heading: 'A clear way to work together. No guesswork.',
    body:
      'You can start with a single session or go straight into a package if you want steady progress. The best value comes from consistent 1:1 work tailored to your goal, fitness level, and weekly rhythm.',
    positioning:
      'This pricing is meant to signal professionalism, specialization, and serious 1:1 coaching — not a cheap, generic fitness offer.',
    factors: ['Current level', 'Training goal', 'Session frequency'],
    planLabel: 'Package',
    featuredBadge: 'Most chosen',
    cta: 'Choose package',
    plans: [
      {
        name: 'Single session',
        price: '179 PLN',
        details: '1 one-to-one session',
        description:
          'A good starting point if you want to test the collaboration, get back into routine, or begin with a focused movement consultation.',
        points: ['60 minutes of 1:1 work', 'tailored to your goal and level', 'clear next-step guidance'],
      },
      {
        name: '4-session package',
        price: '676 PLN',
        details: '169 PLN / session',
        description:
          'A strong option if you want to enter a training system, improve technique, and start building measurable progress.',
        points: ['4 one-to-one sessions', 'goal prioritization and work plan', 'better technique and stronger consistency'],
      },
      {
        name: '8-session package',
        price: '1272 PLN',
        details: '159 PLN / session',
        description:
          'The best choice if you care about regular progress, better fitness, and visible changes in physique and conditioning.',
        points: ['8 one-to-one sessions', 'best rate per session', 'continuity and tighter progress control'],
        featured: true,
      },
    ],
    extrasLabel: 'Additional options',
    extras: [
      { label: 'Initial consultation', value: '149 PLN or free with a package' },
      { label: 'Online coaching', value: 'from 249 PLN / month' },
      { label: 'Fitness test preparation', value: 'individual quote' },
      { label: 'Combat sports training', value: 'as 1:1 sessions or a specialist module' },
    ],
    notesLabel: 'Good to know',
    notes: [
      'Sessions are available in Warsaw or online.',
      'The 8-session package is the most common choice for people who want consistent progress.',
      'The scope of work is adjusted to your goal, level, and schedule.',
    ],
  },
  process: {
    label: 'How it works',
    heading: 'Simple process. Clear goal. Real progress.',
    steps: [
      {
        step: '01',
        title: 'Consultation & goal',
        description: 'We start with a conversation about your goal, level, limitations, and direction of work.',
      },
      {
        step: '02',
        title: 'Action plan',
        description: 'I select the form of collaboration and training system adapted to your needs.',
      },
      {
        step: '03',
        title: 'Real progress',
        description: 'You train with purpose, with a clear plan and focus on technique, discipline, and results.',
      },
    ],
  },
  effects: {
    label: 'Why it works',
    heading: 'Quality work matters, not trends.',
    body: 'This approach isn\'t based on temporary motivation. What matters is the system, technique, and consistency. That\'s why training delivers not just post-workout fatigue, but real results: a stronger body, better fitness, improved movement control, and greater self-confidence.',
    items: [
      { title: 'More strength', description: 'A stronger body that performs better in training and in daily life.' },
      { title: 'Better physique', description: 'The result of consistent, well-planned work.' },
      { title: 'Greater fitness', description: 'Better endurance, dynamics, coordination, and movement control.' },
      { title: 'Self-confidence', description: 'Greater sense of control over your body and your own progress.' },
    ],
  },
  testimonials: {
    label: 'Reviews',
    heading: 'Most appreciated: clarity, atmosphere, and progress.',
    quotes: [
      'Finally training with a plan that makes sense. Everything is clear, specific, and tailored to my goal.',
      'This isn\'t ordinary training. I feel stronger, more fit, and much more confident.',
      'Professional approach, great energy, and real results. I know why I\'m training and I can see the progress.',
    ],
  },
  faq: {
    label: 'FAQ',
    heading: 'Frequently asked questions',
    description:
      'The page is meant to sell clarity and professionalism, so answers are short, direct, and free of marketing fluff.',
    items: [
      {
        question: 'Do I need training experience?',
        answer: 'No. Collaboration can start from a beginner level.',
      },
      {
        question: 'Is this only for combat sports athletes?',
        answer:
          'No. Combat sports are an important element of the approach, but the offer is aimed at everyone who wants to be stronger, fitter, and more confident.',
      },
      {
        question: 'Can I train with a physique goal?',
        answer: 'Yes. Improving physique is one of the natural results of well-guided training.',
      },
      {
        question: 'Is online collaboration possible?',
        answer:
          'Yes. You can also work remotely, based on a plan, guidance, and regular support.',
      },
    ],
  },
  cta: {
    label: 'Get started',
    heading: 'Want to train harder, smarter, and with a real goal?',
    body: 'Write about your goal and find out what form of collaboration suits you best. Build strength, improve fitness, and train with an approach that delivers real results.',
  },
  form: {
    labelGoal: 'Describe your training goal',
    placeholderGoal: 'E.g. I want to improve my physique and build strength. I currently train twice a week and would like to start 3 times. I prefer evening sessions.',
    labelName: 'Full name',
    labelEmail: 'Email address',
    labelPhone: 'Phone number (optional)',
    submit: 'Send message',
    submitting: 'Sending…',
    successTitle: 'Message sent!',
    successBody: "I'll get back to you as soon as possible.",
    reassurances: ['Reply within 24h', 'First consultation free', 'No commitments'],
  },
  footer: {
    name: 'Karolina Wrona — personal trainer demo page',
    disclaimer: 'All contact details and content on this page are fictional.',
  },
};

const es: Dict = {
  banner: {
    text: 'Demo de ventas • todos los datos y contenidos son ficticios',
    back: 'Volver a la oferta',
    cta: 'Quiero este demo',
  },
  header: {
    subtitle: 'Entrenador personal',
    nav: ['Oferta', 'Precios', 'Proceso', 'Resultados', 'FAQ', 'Contacto'],
    cta: 'Reservar consulta',
  },
  hero: {
    tags: ['Entrenamiento personal', 'Preparación física', 'Entrenamiento de artes marciales'],
    line1: 'Fuerza,',
    accent: 'forma',
    line2: 'y confianza en ti mismo.',
    body: 'Ayudo a mujeres y hombres a construir un cuerpo más fuerte, mejor condición física y mayor control sobre su forma. Entrena con propósito, desarrolla una aptitud real y trabaja con un enfoque basado en la disciplina, la técnica y el progreso.',
    ctaPrimary: 'Reservar consulta',
    ctaSecondary: 'Ver la oferta',
    subtext:
      'Entrenamiento individual, preparación física y artes marciales.',
    profileLabel: 'Perfil de trabajo',
    location: 'Varsovia • Online',
  },
  stats: [
    { value: '10+', label: 'años de entrenamiento y competición' },
    { value: '1:1', label: 'entrenamiento individual' },
    { value: '100%', label: 'enfoque en tu objetivo' },
  ],
  audience: {
    label: 'Para quién',
    heading: 'Entrenamiento concreto, no casual.',
    body: 'Esta colaboración es para ti si quieres mejorar tu físico, aumentar la fuerza, desarrollar mejor condición física y sentir mayor confianza en tu cuerpo. Si estás cansado de planes caóticos, ejercicios aleatorios y entrenamiento sin dirección — aquí obtienes una dirección clara, estructura y progreso real.',
  },
  about: {
    label: 'Sobre la marca',
    heading: 'Enfoque atlético. Técnica. Disciplina. Resultado.',
    body1:
      'Esta marca se basa en la experiencia deportiva y altos estándares de calidad de entrenamiento. El fundamento del trabajo es la técnica, la regularidad y una progresión bien planificada.',
    body2:
      'La influencia de las artes marciales se traduce en más que el carácter de las sesiones — construye concentración, aptitud, resistencia y confianza que va mucho más allá del suelo de entrenamiento.',
    features: [
      'Entrenamiento basado en técnica y calidad del movimiento',
      'Sistema adaptado a tu objetivo real',
      'Enfoque para mujeres y hombres',
      'Colaboración presencial y online',
    ],
  },
  offer: {
    label: 'Oferta',
    heading: 'Adaptada a tu objetivo, no a una plantilla predefinida.',
    description:
      'El fuerte carácter atlético no significa caos. Cada forma de colaboración tiene su objetivo, alcance y resultado concreto.',
    imageLabel: 'Enfoque de entrenamiento',
    imageBody:
      'Técnica, control del movimiento, progresión y total adaptación del plan a tu nivel y objetivo. Aquí no hay lugar para el esfuerzo aleatorio.',
    items: [
      {
        title: 'Entrenamiento personal',
        description:
          'Construcción de fuerza, mejora del físico y entrenamiento regular adaptado a tu nivel, objetivo y ritmo de vida.',
      },
      {
        title: 'Preparación para pruebas de aptitud física universitarias y militares',
        description:
          'Entrenamiento dirigido para quienes quieren prepararse bien para pruebas de aptitud para la universidad, servicio o requisitos militares.',
      },
      {
        title: 'Entrenamiento de artes marciales',
        description:
          'Entrenamiento basado en técnica, control del movimiento, dinámica y carácter de las artes marciales. Para quienes quieren desarrollar aptitud, reflejos y confianza.',
      },
      {
        title: 'Coaching online',
        description:
          'Plan de entrenamiento, orientación y apoyo regular para quienes quieren entrenar eficazmente fuera de las sesiones presenciales.',
      },
    ],
  },
  pricing: {
    label: 'Precios',
    heading: 'Modelo de trabajo claro. Sin adivinar.',
    body:
      'Puedes empezar con una sola sesión o elegir directamente un paquete si quieres progreso constante. El mayor valor está en el trabajo 1:1 regular, ajustado a tu objetivo, nivel físico y ritmo de vida.',
    positioning:
      'Este precio debe comunicar profesionalismo, especialización y trabajo 1:1 serio, no una oferta barata y genérica de fitness.',
    factors: ['Nivel actual', 'Objetivo de trabajo', 'Frecuencia de sesiones'],
    planLabel: 'Paquete',
    featuredBadge: 'Más elegido',
    cta: 'Elegir paquete',
    plans: [
      {
        name: 'Sesión individual',
        price: '179 PLN',
        details: '1 sesión 1:1',
        description:
          'Una buena forma de empezar si quieres probar la colaboración, recuperar regularidad o comenzar con una consulta de movimiento enfocada.',
        points: ['60 minutos de trabajo 1:1', 'ajuste al objetivo y al nivel', 'indicaciones claras para el siguiente paso'],
      },
      {
        name: 'Paquete de 4 sesiones',
        price: '676 PLN',
        details: '169 PLN / sesión',
        description:
          'Una opción sólida si quieres entrar en un sistema de entrenamiento, mejorar la técnica y empezar a construir progreso medible.',
        points: ['4 sesiones 1:1', 'priorización del objetivo y plan de trabajo', 'mejor técnica y mayor regularidad'],
      },
      {
        name: 'Paquete de 8 sesiones',
        price: '1272 PLN',
        details: '159 PLN / sesión',
        description:
          'La mejor elección si te importa el progreso regular, una mejor condición física y cambios visibles en el físico y la resistencia.',
        points: ['8 sesiones 1:1', 'mejor tarifa por sesión', 'continuidad y control más fuerte del progreso'],
        featured: true,
      },
    ],
    extrasLabel: 'Opciones adicionales',
    extras: [
      { label: 'Consulta inicial', value: '149 PLN o gratis con paquete' },
      { label: 'Coaching online', value: 'desde 249 PLN / mes' },
      { label: 'Preparación para pruebas físicas', value: 'presupuesto individual' },
      { label: 'Entrenamiento de artes marciales', value: 'en formato 1:1 o como módulo especializado' },
    ],
    notesLabel: 'Información importante',
    notes: [
      'La colaboración puede ser presencial en Varsovia u online.',
      'El paquete de 8 sesiones es la opción más elegida por quienes quieren progresar con regularidad.',
      'El alcance del trabajo se ajusta al objetivo, nivel y disponibilidad horaria.',
    ],
  },
  process: {
    label: 'Cómo funciona',
    heading: 'Proceso simple. Objetivo claro. Progreso real.',
    steps: [
      {
        step: '01',
        title: 'Consulta y objetivo',
        description: 'Comenzamos con una conversación sobre tu objetivo, nivel, limitaciones y dirección de trabajo.',
      },
      {
        step: '02',
        title: 'Plan de acción',
        description: 'Selecciono la forma de colaboración y sistema de entrenamiento adaptado a tus necesidades.',
      },
      {
        step: '03',
        title: 'Progreso real',
        description: 'Entrenas con propósito, con un plan claro y enfoque en la técnica, disciplina y resultados.',
      },
    ],
  },
  effects: {
    label: 'Por qué funciona',
    heading: 'La calidad del trabajo importa, no las tendencias.',
    body: 'Este enfoque no se basa en la motivación temporal. Lo que importa es el sistema, la técnica y la consistencia. Por eso el entrenamiento no solo produce cansancio post-sesión, sino resultados reales: cuerpo más fuerte, mejor condición física, mayor control del movimiento y más confianza.',
    items: [
      { title: 'Más fuerza', description: 'Un cuerpo más fuerte que rinde mejor en el entrenamiento y en la vida diaria.' },
      { title: 'Mejor físico', description: 'El resultado del trabajo consistente y bien planificado.' },
      { title: 'Mayor aptitud', description: 'Mejor resistencia, dinámica, coordinación y control del movimiento.' },
      { title: 'Confianza en uno mismo', description: 'Mayor sensación de control sobre tu cuerpo y tu propio progreso.' },
    ],
  },
  testimonials: {
    label: 'Opiniones',
    heading: 'Más valorado: claridad, ambiente y progreso.',
    quotes: [
      'Por fin entreno con un plan que tiene sentido. Todo es claro, concreto y adaptado a mi objetivo.',
      'Esto no es entrenamiento ordinario. Me siento más fuerte, en mejor forma y mucho más seguro de mí mismo.',
      'Enfoque profesional, buena energía y resultados reales. Sé por qué entreno y veo el progreso.',
    ],
  },
  faq: {
    label: 'FAQ',
    heading: 'Preguntas frecuentes',
    description:
      'La página está pensada para vender claridad y profesionalismo, por lo que las respuestas son cortas, directas y sin palabrería de marketing.',
    items: [
      {
        question: '¿Necesito experiencia de entrenamiento?',
        answer: 'No. La colaboración puede comenzar desde el nivel principiante.',
      },
      {
        question: '¿Es esto solo para practicantes de artes marciales?',
        answer:
          'No. Las artes marciales son un elemento importante del enfoque, pero la oferta está dirigida a todos los que quieren ser más fuertes, en mejor forma y más seguros de sí mismos.',
      },
      {
        question: '¿Puedo entrenar con un objetivo estético?',
        answer: 'Sí. Mejorar el físico es uno de los resultados naturales de un entrenamiento bien dirigido.',
      },
      {
        question: '¿Es posible la colaboración online?',
        answer: 'Sí. También puedes trabajar de forma remota, basándote en un plan, orientación y apoyo regular.',
      },
    ],
  },
  cta: {
    label: 'Comenzar',
    heading: '¿Quieres entrenar más duro, más inteligente y con un objetivo real?',
    body: 'Escribe sobre tu objetivo y descubre qué forma de colaboración es mejor para ti. Construye fuerza, mejora tu condición y entrena con un enfoque que da resultados reales.',
  },
  form: {
    labelGoal: 'Describe tu objetivo de entrenamiento',
    placeholderGoal: 'Ej. Quiero mejorar mi físico y aumentar la fuerza. Actualmente entreno 2 veces por semana y me gustaría entrenar 3 veces. Prefiero sesiones por las tardes.',
    labelName: 'Nombre completo',
    labelEmail: 'Correo electrónico',
    labelPhone: 'Número de teléfono (opcional)',
    submit: 'Enviar mensaje',
    submitting: 'Enviando…',
    successTitle: '¡Mensaje enviado!',
    successBody: 'Me pondré en contacto contigo lo antes posible.',
    reassurances: ['Respondo en 24h', 'Primera consulta gratuita', 'Sin compromisos'],
  },
  footer: {
    name: 'Karolina Wrona — demo de página de entrenador personal',
    disclaimer: 'Todos los datos de contacto y contenidos de esta página son ficticios.',
  },
};

const dictionaries: Record<Locale, Dict> = { pl, en, es };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
