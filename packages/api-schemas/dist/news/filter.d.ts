import { z } from "zod/v4";
declare const NewsFilterSchemaDefinition: z.ZodObject<{
    authorInitial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    excludeId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    publishedAfter: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    publishedBefore: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    search: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type NewsFilterDefinition = z.infer<typeof NewsFilterSchemaDefinition>;
/**
 * Canonical news list/filter contract
 *
 * @openapiSchema NewsFilter
 * @endpoint POST /v1/news
 * @contractShape news.filter
 * @contractRole canonical
 */
export declare const NewsFilterSchema: z.ZodType<NewsFilterDefinition>;
export type NewsFilter = z.infer<typeof NewsFilterSchema>;
export {};
//# sourceMappingURL=filter.d.ts.map