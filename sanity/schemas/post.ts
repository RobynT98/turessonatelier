import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({ name: 'excerpt', title: 'Utdrag', type: 'text' }),
    defineField({ name: 'mainImage', title: 'Omslag', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Publicerad', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'body', title: 'Innehåll', type: 'blockContent' }),
  ],
  preview: { select: { title: 'title', media: 'mainImage', subtitle: 'publishedAt' } },
})
