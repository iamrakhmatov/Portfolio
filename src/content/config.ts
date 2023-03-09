import { z, defineCollection } from "astro:content";

const articleSchema = defineCollection({
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		tags: z.array(z.string()).optional(),
		thumbnail: z.object({
			url: z.string(),
			width: z.number(),
			height: z.number(),
		}),
	}),
});

export const collections = {
	articles: articleSchema,
};
