import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const designs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/banknotes" }),
  schema: ({ image }) => z.object({
    theme: z.enum(['European Culture', 'Rivers and Birds']),
    designer: z.string(),
    flipAxis: z.enum(['x', 'y']).default('y'),
    notes: z.array(z.object({
      denomination: z.number(),
      frontImage: image(),
      backImage: image(),
    }))
  })
})

export const collections = { designs };
