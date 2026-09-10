import { z } from "zod/v4";
/**
 * Alias types for person NameAlias
 *
 * @openapiSchema PersonAliasType
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityNameAliasPersonAliasTypeSchema
 * @contractShape person.alias-type
 * @contractRole canonical
 */
export declare const PersonAliasTypeSchema: z.ZodEnum<{
    formerName: "formerName";
    maidenName: "maidenName";
    nickname: "nickname";
    stageName: "stageName";
}>;
export type PersonAliasType = z.infer<typeof PersonAliasTypeSchema>;
//# sourceMappingURL=alias-type.d.ts.map