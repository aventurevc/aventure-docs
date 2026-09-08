import { z } from "zod/v4";
/**
 * Lifecycle classification for a requested location slug: current resolves to a live published directory entry; unpublished means the canonical token resolves to a real reference-table location that has no publishable companies, served as HTTP 410 Gone so crawlers drop the URL permanently
 *
 * @openapiSchema LocationResolutionOutcome
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSlugResolutionSchema
 * @contractShape location.resolution-outcome
 * @contractRole canonical
 */
export declare const LocationResolutionOutcomeSchema: z.ZodEnum<{
    current: "current";
    unpublished: "unpublished";
}>;
export type LocationResolutionOutcome = z.infer<typeof LocationResolutionOutcomeSchema>;
//# sourceMappingURL=resolution-outcome.d.ts.map