import { defineField, defineType } from "sanity";

export default defineType({
  name: 'serviceItem',
  title: 'Service Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),

    defineField({
      name: 'taskList',
      title: 'Liste des tâches',
      description: 'Liste des tâches à effectuer pour le service',
      type: 'array',
      of: [{ type: 'taskItem' }],
    }),
  ],
});