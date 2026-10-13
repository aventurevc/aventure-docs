import { z } from "zod/v4";
declare const UrlDuplicateJoinSchemaDefinition: z.ZodObject<{
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    urlId: z.ZodInt;
}, z.core.$strip>;
type UrlDuplicateJoinDefinition = z.infer<typeof UrlDuplicateJoinSchemaDefinition>;
export interface UrlDuplicateJoinSchemaInput extends z.input<typeof UrlDuplicateJoinSchemaDefinition> {
}
/**
 * URL ownership join row identifying which entity or person currently owns a normalized URL.
 *
 * @openapiSchema UrlDuplicateJoin
 * @standardProblemResponse
 * @usedBySchema UrlDuplicateConflictSchema
 * @contractShape url.duplicate-join
 * @contractRole canonical
 */
export declare const UrlDuplicateJoinSchema: z.ZodType<UrlDuplicateJoinDefinition, UrlDuplicateJoinSchemaInput>;
export type UrlDuplicateJoin = z.infer<typeof UrlDuplicateJoinSchema>;
export {};
//# sourceMappingURL=duplicate-join.d.ts.map