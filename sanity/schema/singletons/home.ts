import { HomeIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: "Page d'accueil",
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Bannière',
    },
    {
      name: 'about',
      title: 'À propos',
    },
    {
      name: 'services',
      title: 'Services',
    },
    {
      name: 'testimonials',
      title: 'Témoignages',
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
      name: 'hero',
      title: 'Section Héro',
      type: 'object',
      group: 'hero',
      fields: [
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
        defineField({
          name: 'backgroundImage',
          title: 'Image de fond',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryButton',
          title: 'Bouton principal',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Bouton secondaire',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'Section À propos',
      type: 'object',
      group: 'about',
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
      name: 'services',
      title: 'Section Services',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'servicesList',
          title: 'Liste des services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Titre',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icône',
                  type: 'image',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Section Témoignages',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
        }),
        defineField({
          name: 'displayAll',
          title: 'Afficher tous les témoignages',
          type: 'boolean',
          description:
            'Si activé, tous les témoignages seront affichés. Sinon, sélectionnez des témoignages spécifiques.',
          initialValue: true,
        }),
        defineField({
          name: 'reviews',
          title: 'Témoignages',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
          description: 'Sélectionnez les témoignages à afficher',
          hidden: ({ parent }) => parent?.displayAll,
        }),
      ],
    }),

  ],
});
