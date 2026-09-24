import { z } from "zod/v4";
/**
 * Owner kind a unique-id type can attach to: entity or person.
 *
 * @openapiSchema UniqueIdOwnerScope
 * @endpoint GET /v1/unique-ids/types
 * @usedBySchema UniqueIdTypeAliasSchema
 * @contractShape unique.id-owner-scope
 * @contractRole canonical
 */
export declare const UniqueIdOwnerScopeSchema: z.ZodEnum<{
    entity: "entity";
    person: "person";
}>;
export type UniqueIdOwnerScope = z.infer<typeof UniqueIdOwnerScopeSchema>;
//# sourceMappingURL=id-owner-scope.d.ts.map