import { z } from "zod/v4";
/**
 * Extra check on listed entities. COMPANY_LISTING_READY returns only operating companies and business lines that have a real (not generated) logo, a founding year, a current headquarters, and recorded positive funding with a stage; NONE applies no extra check.
 *
 * @openapiSchema EntityListQualityGate
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/research/runs
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape entity.list-quality-gate
 * @contractRole canonical
 */
export declare const EntityListQualityGateSchema: z.ZodEnum<{
    COMPANY_LISTING_READY: "COMPANY_LISTING_READY";
    NONE: "NONE";
}>;
export type EntityListQualityGate = z.infer<typeof EntityListQualityGateSchema>;
//# sourceMappingURL=list-quality-gate.d.ts.map