import { z } from "zod/v4";
/**
 * Named quality gates for entity list endpoints.
 *
 * @openapiSchema EntityListQualityGate
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
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