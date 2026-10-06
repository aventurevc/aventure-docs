import { z } from "zod/v4";
declare const SearchEvidenceSourceSchemaDefinition: z.ZodUnion<readonly [z.ZodEnum<{
    entityRecord: "entityRecord";
    newsArticle: "newsArticle";
    researchSnippet: "researchSnippet";
}>, z.ZodString]>;
type SearchEvidenceSourceDefinition = z.infer<typeof SearchEvidenceSourceSchemaDefinition>;
/**
 * Owner of search evidence: `entityRecord` is the entity's structured record, `researchSnippet` an entity research snippet, `newsArticle` a news article linked to the entity.
 *
 * @openapiSchema SearchEvidenceSource
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema SearchAnswerCitationSchema
 * @usedBySchema SearchPassageSchema
 * @contractShape search.evidence-source
 * @contractRole canonical
 */
export declare const SearchEvidenceSourceSchema: z.ZodType<SearchEvidenceSourceDefinition>;
export type SearchEvidenceSource = z.infer<typeof SearchEvidenceSourceSchema>;
export {};
//# sourceMappingURL=evidence-source.d.ts.map