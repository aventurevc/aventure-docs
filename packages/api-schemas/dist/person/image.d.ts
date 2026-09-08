import { z } from "zod/v4";
declare const PersonImageSchemaDefinition: z.ZodObject<{
    isMonogram: z.ZodBoolean;
    picture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonImageDefinition = z.infer<typeof PersonImageSchemaDefinition>;
/**
 * Read projection: person image fields for detail/list responses
 *
 * @openapiSchema PersonImage
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema PersonGraphMemberSchema
 * @usedBySchema PersonSchema
 * @contractShape person.image
 * @contractRole canonical
 */
export declare const PersonImageSchema: z.ZodType<PersonImageDefinition>;
export type PersonImage = z.infer<typeof PersonImageSchema>;
export {};
//# sourceMappingURL=image.d.ts.map