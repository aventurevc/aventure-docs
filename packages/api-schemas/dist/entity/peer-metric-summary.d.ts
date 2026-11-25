import { z } from "zod/v4";
/**
 * Peer-group distribution summary across valued peers (and subject when it holds a daily quote).
 *
 * @openapiSchema EntityPeerMetricSummary
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityPeerMultipleSummarySchema
 * @contractShape entity.peer-metric-summary
 * @contractRole canonical
 */
export declare const EntityPeerMetricSummarySchema: z.ZodObject<{
    max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sampleCount: z.ZodInt;
}, z.core.$strip>;
export interface EntityPeerMetricSummarySchemaInput extends z.input<typeof EntityPeerMetricSummarySchema> {
}
export type EntityPeerMetricSummary = z.infer<typeof EntityPeerMetricSummarySchema>;
//# sourceMappingURL=peer-metric-summary.d.ts.map