import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cities" }),
  schema: z.object({
    title: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    created: z.date().optional(),
    lastmod: z.date().optional()
  }),
});

const mainPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/mainPages" }),
  schema: z.object({
    title: z.string(),
    hero: z.object({
      header: z.string(),
      about: z.string(),
    }),
  }),
});

export const collections = { cities, services, mainPages };
