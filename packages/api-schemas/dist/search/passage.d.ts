import { z } from "zod/v4";
declare const SearchPassageSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    label: z.ZodString;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    score: z.ZodNumber;
    source: z.ZodUnion<readonly [z.ZodEnum<{
        entityRecord: "entityRecord";
        fundraiseTransaction: "fundraiseTransaction";
        newsArticle: "newsArticle";
        researchSnippet: "researchSnippet";
    }>, z.ZodString]>;
    sourceId: z.ZodString;
    text: z.ZodString;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchPassageDefinition = z.infer<typeof SearchPassageSchemaDefinition>;
/**
 * Text passage ranked by semantic closeness to a natural-language question, read from its owning record.
 *
 * @openapiSchema SearchPassage
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.passage
 * @contractRole canonical
 */
export declare const SearchPassageSchema: z.ZodType<SearchPassageDefinition>;
export type SearchPassage = z.infer<typeof SearchPassageSchema>;
export {};
//# sourceMappingURL=passage.d.ts.map