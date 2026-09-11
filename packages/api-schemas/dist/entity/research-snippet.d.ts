import { z } from "zod/v4";
/**
 * Persisted research snippet row for one entity.
 *
 * @openapiSchema EntityResearchSnippet
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
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
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    entityId: z.ZodUUID;
    id: z.ZodInt;
    isCurrent: z.ZodBoolean;
    isPrimary: z.ZodBoolean;
    text: z.ZodString;
    textType: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    visible: z.ZodBoolean;
}, z.core.$strip>;
export type EntityResearchSnippet = z.infer<typeof EntityResearchSnippetSchema>;
//# sourceMappingURL=research-snippet.d.ts.map