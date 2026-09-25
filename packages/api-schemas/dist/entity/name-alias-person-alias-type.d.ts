import { z } from "zod/v4";
declare const EntityNameAliasPersonAliasTypeSchemaDefinition: z.ZodObject<{
    displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        formerName: "formerName";
        maidenName: "maidenName";
        nickname: "nickname";
        stageName: "stageName";
    }>>>;
}, z.core.$strip>;
type EntityNameAliasPersonAliasTypeDefinition = z.infer<typeof EntityNameAliasPersonAliasTypeSchemaDefinition>;
/**
 * Alternate name used for search and display
 *
 * @openapiSchema EntityNameAliasPersonAliasType
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSchema
 * @contractShape entity.name-alias-person-alias-type
 * @contractRole canonical
 */
export declare const EntityNameAliasPersonAliasTypeSchema: z.ZodType<EntityNameAliasPersonAliasTypeDefinition>;
export type EntityNameAliasPersonAliasType = z.infer<typeof EntityNameAliasPersonAliasTypeSchema>;
export {};
//# sourceMappingURL=name-alias-person-alias-type.d.ts.map