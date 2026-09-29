import { z } from "zod/v4";
/**
 * Read-only assessment of whether a stored logo/photo depicts the target's own brand, decided from visible features of the stored mark versus the target's own reference marks
 *
 * @openapiSchema LogoAccuracy
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @usedBySchema MediaUploadSchema
 * @contractShape logo.accuracy
 * @contractRole canonical
 */
export declare const LogoAccuracySchema: z.ZodObject<{
    approval: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    candidateObserved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    method: z.ZodEnum<{
        OPERATOR_REVIEW: "OPERATOR_REVIEW";
        PERCEPTUAL_HASH: "PERCEPTUAL_HASH";
        REFERENCE_UNAVAILABLE: "REFERENCE_UNAVAILABLE";
        VISION: "VISION";
    }>;
    outcome: z.ZodEnum<{
        INSUFFICIENT: "INSUFFICIENT";
        MATCH: "MATCH";
        MISMATCH: "MISMATCH";
    }>;
    reference: z.ZodArray<z.ZodType<{
        hammingDistance: number;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        hammingDistance: number;
        url: string;
    }, unknown>>>;
    referenceObserved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sharedFeature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type LogoAccuracy = z.infer<typeof LogoAccuracySchema>;
//# sourceMappingURL=accuracy.d.ts.map