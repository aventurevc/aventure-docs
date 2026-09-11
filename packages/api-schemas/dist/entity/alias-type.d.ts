import { z } from "zod/v4";
/**
 * Alias types for entity NameAlias
 *
 * @openapiSchema EntityAliasType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/sitemap/entities/routes
 * @endpoint GET /v1/addresses/locations/{scope}/{slug}
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/news/{newsId}/related-companies
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityNameAliasEntityAliasTypeSchema
 * @contractShape entity.alias-type
 * @contractRole canonical
 */
export declare const EntityAliasTypeSchema: z.ZodEnum<{
    alternativeDba: "alternativeDba";
    relatedLegal: "relatedLegal";
}>;
export type EntityAliasType = z.infer<typeof EntityAliasTypeSchema>;
//# sourceMappingURL=alias-type.d.ts.map