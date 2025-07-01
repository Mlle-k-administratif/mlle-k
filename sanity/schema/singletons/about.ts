import { UserIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'À propos',
  type: 'document',
  icon: UserIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'general',
      title: 'Général',
    },
    {
      name: 'story',
      title: 'Mon Histoire',
    },
    {
      name: 'values',
      title: 'Valeurs',
    },
    {
      name: 'experience',
      title: 'Expérience',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      group: 'general',
      fields: [
        defineField({
          name: 'sectionHeading',
          title: 'Titre de la section',
          type: 'sectionHeading',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Mon Histoire',
      type: 'object',
      group: 'story',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Valeurs',
      type: 'object',
      group: 'values',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
        }),
        defineField({
          name: 'valuesList',
          title: 'Valeurs Fondamentales',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icône',
                  type: 'image',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Titre',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Expérience',
      type: 'array',
      group: 'experience',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre du poste',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'company',
              title: 'Entreprise',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'period',
              title: 'Période',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'À propos',
        subtitle: 'Vos informations personnelles',
      };
    },
  },
});
