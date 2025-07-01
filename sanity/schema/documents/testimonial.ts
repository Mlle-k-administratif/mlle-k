import { StarIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'rating',
      title: 'Note',
      type: 'number',
      description: 'Note de 1 à 5',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'review',
      title: 'Avis',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: "Nom de l'auteur",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorRole',
      title: "Rôle de l'auteur",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorImage',
      title: "Photo de l'auteur",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
