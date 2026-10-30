import { z } from "zod/v4";
/**
 * How a logo-accuracy outcome was reached
 *
 * @openapiSchema LogoAccuracyMethod
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @usedBySchema LogoAccuracySchema
 * @contractShape logo.accuracy-method
 * @contractRole canonical
 */
export declare const LogoAccuracyMethodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    OPERATOR_REVIEW: "OPERATOR_REVIEW";
    PERCEPTUAL_HASH: "PERCEPTUAL_HASH";
    REFERENCE_UNAVAILABLE: "REFERENCE_UNAVAILABLE";
    VISION: "VISION";
}>, z.ZodString]> & {
    enum: {
        OPERATOR_REVIEW: "OPERATOR_REVIEW";
        PERCEPTUAL_HASH: "PERCEPTUAL_HASH";
        REFERENCE_UNAVAILABLE: "REFERENCE_UNAVAILABLE";
        VISION: "VISION";
    };
};
export type LogoAccuracyMethod = z.infer<typeof LogoAccuracyMethodSchema>;
//# sourceMappingURL=accuracy-method.d.ts.map