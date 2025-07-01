import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sectionHeading',
  title: 'Section Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      description: 'Le texte qui précède le titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
