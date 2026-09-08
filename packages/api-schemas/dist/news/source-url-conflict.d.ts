import { z } from "zod/v4";
declare const NewsSourceUrlConflictSchemaDefinition: z.ZodObject<{
    conflictingArticleId: z.ZodInt;
    conflictingArticleSlug: z.ZodString;
    conflictingArticleTitle: z.ZodString;
}, z.core.$strip>;
type NewsSourceUrlConflictDefinition = z.infer<typeof NewsSourceUrlConflictSchemaDefinition>;
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a news mutation's publication + newsUrlOriginal pair already belongs to another article. The returned fields identify the existing article so the caller can read/update it instead of creating a duplicate.
 *
 * @openapiSchema NewsSourceUrlConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape news.source-url-conflict
 * @contractRole canonical
 */
export declare const NewsSourceUrlConflictSchema: z.ZodType<NewsSourceUrlConflictDefinition>;
export type NewsSourceUrlConflict = z.infer<typeof NewsSourceUrlConflictSchema>;
export {};
//# sourceMappingURL=source-url-conflict.d.ts.map