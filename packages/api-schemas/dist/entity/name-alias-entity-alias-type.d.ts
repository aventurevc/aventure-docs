import { z } from "zod/v4";
declare const EntityNameAliasEntityAliasTypeSchemaDefinition: z.ZodObject<{
    displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        alternativeDba: "alternativeDba";
        relatedLegal: "relatedLegal";
    }>>>;
}, z.core.$strip>;
type EntityNameAliasEntityAliasTypeDefinition = z.infer<typeof EntityNameAliasEntityAliasTypeSchemaDefinition>;
/**
 * Alternate name used for search and display
 *
 * @openapiSchema EntityNameAliasEntityAliasType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint GET /v1/news/{newsId}/related-entities
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntitySchema
 * @contractShape entity.name-alias-entity-alias-type
 * @contractRole canonical
 */
export declare const EntityNameAliasEntityAliasTypeSchema: z.ZodType<EntityNameAliasEntityAliasTypeDefinition>;
export type EntityNameAliasEntityAliasType = z.infer<typeof EntityNameAliasEntityAliasTypeSchema>;
export {};
//# sourceMappingURL=name-alias-entity-alias-type.d.ts.map