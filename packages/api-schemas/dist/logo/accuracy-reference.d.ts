import { z } from "zod/v4";
declare const LogoAccuracyReferenceSchemaDefinition: z.ZodObject<{
    hammingDistance: z.ZodInt;
    url: z.ZodString;
}, z.core.$strip>;
type LogoAccuracyReferenceDefinition = z.infer<typeof LogoAccuracyReferenceSchemaDefinition>;
/**
 * A reference mark from the target's own surface and its distance to the candidate
 *
 * @openapiSchema LogoAccuracyReference
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @usedBySchema LogoAccuracySchema
 * @contractShape logo.accuracy-reference
 * @contractRole canonical
 */
export declare const LogoAccuracyReferenceSchema: z.ZodType<LogoAccuracyReferenceDefinition>;
export type LogoAccuracyReference = z.infer<typeof LogoAccuracyReferenceSchema>;
export {};
//# sourceMappingURL=accuracy-reference.d.ts.map