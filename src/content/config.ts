// src/content/config.ts
import { defineCollection, z } from "astro:content";

const banner = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    isBannerActive: z.boolean(),
  }),
});

const performances = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(), // or z.date() if using real dates
    start: z.string(),
    endTime: z.string(),
    isTicketLink: z.boolean(),
    ticketLink: z.string().url().optional(), // only used if isTicketLink is true
  }),
});

export const collections = {
    banner,
    performances
};