import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Pied de page',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'About MlleK',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          description: 'Facebook profile URL',
        }),
        defineField({
          name: 'twitter',
          title: 'X (Twitter)',
          type: 'url',
          description: 'Twitter profile URL',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          description: 'LinkedIn profile URL',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          description: 'Instagram profile URL',
        }),
      ],
    }),
    defineField({
      name: 'legalLinks',
      title: 'Liens légaux',
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
              name: 'file',
              title: 'Fichier',
              type: 'file',
              description: 'Fichier PDF',
              options: {
                accept: '.pdf',
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'about.title',
    },
  },
});
