import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'taskItem',
  title: 'Task Item',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: '(optionnel)',
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
    defineField({
      name: 'list',
      title: 'Liste des tâches',
      description: 'Liste détaillée des tâches à effectuer',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
