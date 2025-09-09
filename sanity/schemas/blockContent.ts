import { defineType } from 'sanity'

export default defineType({
  title: 'Rich Text',
  name: 'blockContent',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'image', options: { hotspot: true } },
  ],
})
