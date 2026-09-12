import { z } from "zod/v4";
/**
 * Derived character/word counts and whether the row text meets its governed type contract (word/character limits and paragraph shape). violation lists each unmet rule and is empty when the row is compliant.
 *
 * @openapiSchema ContentCompliance
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/texts/{textId}
 * @endpoint GET /v1/people/{personId}/texts
 * @endpoint GET /v1/people/{personId}/texts/{textId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/search
 * @usedBySchema EntityResearchSnippetSchema
 * @usedBySchema EntityTextSchema
 * @contractShape content.compliance
 * @contractRole canonical
 */
export declare const ContentComplianceSchema: z.ZodObject<{
    characterCount: z.ZodInt;
    meetsRequirements: z.ZodBoolean;
    violation: z.ZodArray<z.ZodString>;
    wordCount: z.ZodInt;
}, z.core.$strip>;
export type ContentCompliance = z.infer<typeof ContentComplianceSchema>;
//# sourceMappingURL=compliance.d.ts.map