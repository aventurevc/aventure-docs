import { z } from "zod/v4";
declare const StrictUrlLookupConflictSchemaDefinition: z.ZodObject<{
    candidateEntityId: z.ZodArray<z.ZodUUID>;
    candidatePersonId: z.ZodArray<z.ZodUUID>;
    hint: z.ZodString;
    normalizedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
    urlType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type StrictUrlLookupConflictDefinition = z.infer<typeof StrictUrlLookupConflictSchemaDefinition>;
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a strict URL lookup (GET /v1/entities/lookup?url=...) resolves to more than one current owner. The candidate lists return every current owner that matches the normalized URL key; the caller must add disambiguating signals (urlType, typeRecord, slug) to resolve to a single owner.
 *
 * @openapiSchema StrictUrlLookupConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape strict.url-lookup-conflict
 * @contractRole canonical
 */
export declare const StrictUrlLookupConflictSchema: z.ZodType<StrictUrlLookupConflictDefinition>;
export type StrictUrlLookupConflict = z.infer<typeof StrictUrlLookupConflictSchema>;
export {};
//# sourceMappingURL=url-lookup-conflict.d.ts.map