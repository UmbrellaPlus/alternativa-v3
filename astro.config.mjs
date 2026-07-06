// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alternativa-life.com.ua/",
  integrations: [sitemap()],
  fonts:[{
    provider: fontProviders.google(),
    name: "Montserrat",
    cssVariable: "--font-montserrat",
  }]
});