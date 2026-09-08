import { z } from "zod/v4";
/**
 * How a content card relates to an entity or person owner.
 *
 * @openapiSchema ContentRelation
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentFilterSchema
 * @usedBySchema ContentSchema
 * @contractShape content.relation
 * @contractRole canonical
 */
export declare const ContentRelationSchema: z.ZodEnum<{
    about: "about";
    by: "by";
}>;
export type ContentRelation = z.infer<typeof ContentRelationSchema>;
//# sourceMappingURL=relation.d.ts.map