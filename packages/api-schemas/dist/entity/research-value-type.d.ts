import { z } from "zod/v4";
/**
 * Output kind for governed research detail values
 *
 * @openapiSchema EntityResearchValueType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/research/details/types
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchFactValueSchema
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape entity.research-value-type
 * @contractRole canonical
 */
export declare const EntityResearchValueTypeSchema: z.ZodEnum<{
    date: "date";
    monetary: "monetary";
    numeric: "numeric";
    percentage: "percentage";
    text: "text";
}>;
export type EntityResearchValueType = z.infer<typeof EntityResearchValueTypeSchema>;
//# sourceMappingURL=research-value-type.d.ts.map