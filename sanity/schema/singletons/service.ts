import { PackageIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: PackageIcon,
  groups: [    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Contenu',
    },

  ],
  fields: [ defineField({
    name: 'seo',
    title: 'SEO',
    type: 'seo',
    group: 'seo',
  }),
    defineField({
      name: 'sectionHeading',
      title: 'Titre de la section',
      type: 'sectionHeading',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      description: '(optionnel)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Listes des services',
      type: 'array',
      group: 'content',
      of: [{ type: 'serviceItem' }],
      validation: (Rule) => Rule.required(),
    }),
   
  ],
});