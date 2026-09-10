import { z } from "zod/v4";
declare const LetterCountsSchemaDefinition: z.ZodObject<{
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
type LetterCountsDefinition = z.infer<typeof LetterCountsSchemaDefinition>;
/**
 * Per-initial visible-row counts for sitemap directory navigation. Keys are uppercase A–Z initials; values are the visible total for that initial.
 *
 * @openapiSchema LetterCounts
 * @endpoint GET /v1/sitemap/entities/letter-counts
 * @endpoint GET /v1/sitemap/news/letter-counts
 * @endpoint GET /v1/sitemap/people/letter-counts
 * @contractShape letter.counts
 * @contractRole canonical
 */
export declare const LetterCountsSchema: z.ZodType<LetterCountsDefinition>;
export type LetterCounts = z.infer<typeof LetterCountsSchema>;
export {};
//# sourceMappingURL=counts.d.ts.map