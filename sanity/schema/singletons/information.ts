import { InfoIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'information',
  title: 'Information',
  type: 'document',
  icon: InfoIcon,
  fields: [
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'weekdays',
          title: 'Horaires du lundi au vendredi',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'weekends',
          title: 'Week-ends',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'calendlyUrl',
      title: 'Calendly URL',
      type: 'url',
      description: 'Lien vers la page de réservation Calendly',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
