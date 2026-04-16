import { defineField, defineType } from 'sanity';

export const portfolioPhoto = defineType({
  name: 'portfolioPhoto',
  title: 'Zdjęcie portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Tekst alternatywny (SEO)',
      type: 'string',
      description: 'Krótki opis zdjęcia — ważny dla wyszukiwarek',
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'reference',
      to: [{ type: 'portfolioCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność w galerii',
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
  preview: {
    select: {
      media: 'image',
      title: 'alt',
      subtitle: 'category.title',
    },
    prepare(selection) {
      return {
        title: (selection.title as string) ?? 'Bez opisu',
        subtitle: (selection.subtitle as string) ?? 'Brak kategorii',
        media: selection.media,
      };
    },
  },
});
