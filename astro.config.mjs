import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  markdown: {
    syntaxHighlight: 'prism',
  },
  site: 'https://nus3.com/',
  integrations: [tailwind(), react()],
  adapter: netlify(),
})
