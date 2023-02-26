import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  markdown: {
    syntaxHighlight: 'prism'
  },
  site: 'https://nus3.com/',
  integrations: [tailwind(), react()]
});