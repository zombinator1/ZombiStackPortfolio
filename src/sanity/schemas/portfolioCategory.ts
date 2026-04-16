import { defineField, defineType } from 'sanity';

export const portfolioCategory = defineType({
  name: 'portfolioCategory',
  title: 'Kategoria portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Np. "weddings", "portraits" — używany w adresie URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Zdjęcie okładki',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'photoCount',
      title: 'Liczba sesji (wyświetlana)',
      type: 'string',
      description: 'Np. "40+ sesji"',
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Kolejność',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
