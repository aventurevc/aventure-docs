import { z } from "zod/v4";
/**
 * Owner of search evidence: `entityRecord` is the entity's structured record, `researchSnippet` an entity research snippet, `newsArticle` a news article linked to the entity; `fundraiseTransaction` a recorded investment round with investor attribution.
 *
 * @openapiSchema SearchEvidenceSource
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchAnswerCitationSchema
 * @usedBySchema SearchPassageSchema
 * @contractShape search.evidence-source
 * @contractRole canonical
 */
export declare const SearchEvidenceSourceSchema: z.ZodUnion<readonly [z.ZodEnum<{
    entityRecord: "entityRecord";
    fundraiseTransaction: "fundraiseTransaction";
    newsArticle: "newsArticle";
    researchSnippet: "researchSnippet";
}>, z.ZodString]>;
export type SearchEvidenceSource = z.infer<typeof SearchEvidenceSourceSchema>;
//# sourceMappingURL=evidence-source.d.ts.map