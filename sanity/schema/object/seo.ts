import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre SEO',
      type: 'string',
      description: 'Titre qui apparaîtra dans les résultats de recherche (50-60 caractères recommandés)',
      validation: (Rule) => Rule.required().max(60).warning('Le titre devrait faire moins de 60 caractères pour un meilleur SEO'),
    }),
    defineField({
      name: 'description',
      title: 'Description SEO',
      type: 'text',
      description: 'Description qui apparaîtra dans les résultats de recherche (150-160 caractères recommandés)',
      validation: (Rule) => Rule.required().max(160).warning('La description devrait faire moins de 160 caractères pour un meilleur SEO'),
    }),
    defineField({
      name: 'keywords',
      title: 'Mots-clés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Mots-clés pour le référencement (optionnel)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Image Open Graph',
      type: 'image',
      description: 'Image qui apparaîtra lors du partage sur les réseaux sociaux (1200x630px recommandé)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ogTitle',
      title: 'Titre Open Graph',
      type: 'string',
      description: 'Titre personnalisé pour les réseaux sociaux (si différent du titre SEO)',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Description Open Graph',
      type: 'text',
      description: 'Description personnalisée pour les réseaux sociaux (si différente de la description SEO)',
    }),
    defineField({
      name: 'noIndex',
      title: 'Ne pas indexer',
      type: 'boolean',
      description: 'Empêcher l\'indexation de cette page par les moteurs de recherche',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'Ne pas suivre les liens',
      type: 'boolean',
      description: 'Empêcher le suivi des liens de cette page',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title || 'SEO non configuré',
        subtitle: description ? `${description.substring(0, 50)}...` : 'Aucune description',
      };
    },
  },
}); 