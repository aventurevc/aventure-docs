import { z } from "zod/v4";
declare const UrlSurfaceMisclassificationRouteSchemaDefinition: z.ZodObject<{
    additionalGuidance: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    apiEndpoint: z.ZodString;
    attemptedSurface: z.ZodArray<z.ZodString>;
    cliCommand: z.ZodString;
    correctSurface: z.ZodString;
    deterministicUrlShape: z.ZodString;
    exactPath: z.ZodArray<z.ZodString>;
    externalSocialPostPlatform: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        facebook: "facebook";
        instagram: "instagram";
        linkedin: "linkedin";
        other: "other";
        threads: "threads";
        tiktok: "tiktok";
        xTwitter: "xTwitter";
    }>>>;
    hostSuffix: z.ZodString;
    id: z.ZodString;
    pathPrefix: z.ZodArray<z.ZodString>;
    pathTemplate: z.ZodArray<z.ZodString>;
    requiredLastSegment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requiredSegment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type UrlSurfaceMisclassificationRouteDefinition = z.infer<typeof UrlSurfaceMisclassificationRouteSchemaDefinition>;
/**
 * One deterministic URL shape and the canonical surface it must be routed to.
 *
 * @openapiSchema UrlSurfaceMisclassificationRoute
 * @endpoint GET /v1/entities/urls/surface-misclassifications
 * @usedBySchema UrlSurfaceMisclassificationCatalogSchema
 * @contractShape url.surface-misclassification-route
 * @contractRole canonical
 */
export declare const UrlSurfaceMisclassificationRouteSchema: z.ZodType<UrlSurfaceMisclassificationRouteDefinition>;
export type UrlSurfaceMisclassificationRoute = z.infer<typeof UrlSurfaceMisclassificationRouteSchema>;
export {};
//# sourceMappingURL=surface-misclassification-route.d.ts.map