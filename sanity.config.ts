// sanity.config.ts (lägg i projektroten)
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import post from './sanity/schemas/post'
import blockContent from './sanity/schemas/blockContent'

export default defineConfig({
  name: 'turessonatelier',
  title: 'Turesson Atelier',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema: { types: [post, blockContent] },
})
