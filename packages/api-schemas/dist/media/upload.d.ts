import { z } from "zod/v4";
/**
 * Managed media asset reference with resolved CDN URL and target metadata
 *
 * @openapiSchema MediaUpload
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @contractShape media.upload
 * @contractRole canonical
 */
export declare const MediaUploadSchema: z.ZodObject<{
    accuracy: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    cdnUrl: z.ZodString;
    firstUploadedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    mediaType: z.ZodEnum<{
        BLOG: "BLOG";
        ENTITY: "ENTITY";
        NEWS: "NEWS";
        PERSON: "PERSON";
    }>;
    path: z.ZodString;
    targetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type MediaUpload = z.infer<typeof MediaUploadSchema>;
//# sourceMappingURL=upload.d.ts.map