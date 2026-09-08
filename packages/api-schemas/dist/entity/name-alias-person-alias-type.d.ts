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
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSchema
 * @contractShape entity.name-alias-person-alias-type
 * @contractRole canonical
 */
export declare const EntityNameAliasPersonAliasTypeSchema: z.ZodType<EntityNameAliasPersonAliasTypeDefinition>;
export type EntityNameAliasPersonAliasType = z.infer<typeof EntityNameAliasPersonAliasTypeSchema>;
export {};
//# sourceMappingURL=name-alias-person-alias-type.d.ts.map