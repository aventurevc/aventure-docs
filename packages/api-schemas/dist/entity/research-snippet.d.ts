import { z } from "zod/v4";
/**
 * Persisted research snippet row for one entity.
 *
 * @openapiSchema EntityResearchSnippet
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-snippets
 * @endpoint GET /v1/entities/{entityId}/research-snippets/{snippetId}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchSnippetSchema
 * @contractShape entity.research-snippet
 * @contractRole canonical
 */
export declare const EntityResearchSnippetSchema: z.ZodObject<{
    compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        characterCount: z.ZodInt;
        meetsRequirements: z.ZodBoolean;
        violation: z.ZodArray<z.ZodString>;
        wordCount: z.ZodInt;
    }, z.core.$strip>>>;
    entityId: z.ZodUUID;
    id: z.ZodInt;
    text: z.ZodString;
    textType: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
export type EntityResearchSnippet = z.infer<typeof EntityResearchSnippetSchema>;
//# sourceMappingURL=research-snippet.d.ts.map