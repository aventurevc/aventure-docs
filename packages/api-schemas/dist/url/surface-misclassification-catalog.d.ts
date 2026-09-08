import { z } from "zod/v4";
declare const UrlSurfaceMisclassificationCatalogSchemaDefinition: z.ZodObject<{
    assetExtension: z.ZodArray<z.ZodString>;
    newsArticleHost: z.ZodArray<z.ZodString>;
    parkingHost: z.ZodArray<z.ZodString>;
    route: z.ZodArray<z.ZodType<{
        additionalGuidance?: string | null | undefined;
        apiEndpoint: string;
        attemptedSurface: string[];
        cliCommand: string;
        correctSurface: string;
        deterministicUrlShape: string;
        exactPath: string[];
        externalSocialPostPlatform?: "facebook" | "instagram" | "linkedin" | "other" | "threads" | "tiktok" | "xTwitter" | null | undefined;
        hostSuffix: string;
        id: string;
        pathPrefix: string[];
        pathTemplate: string[];
        requiredLastSegment?: string | null | undefined;
        requiredSegment?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        additionalGuidance?: string | null | undefined;
        apiEndpoint: string;
        attemptedSurface: string[];
        cliCommand: string;
        correctSurface: string;
        deterministicUrlShape: string;
        exactPath: string[];
        externalSocialPostPlatform?: "facebook" | "instagram" | "linkedin" | "other" | "threads" | "tiktok" | "xTwitter" | null | undefined;
        hostSuffix: string;
        id: string;
        pathPrefix: string[];
        pathTemplate: string[];
        requiredLastSegment?: string | null | undefined;
        requiredSegment?: string | null | undefined;
    }, unknown>>>;
}, z.core.$strip>;
type UrlSurfaceMisclassificationCatalogDefinition = z.infer<typeof UrlSurfaceMisclassificationCatalogSchemaDefinition>;
/**
 * URL surface misclassification catalog. Consumers MUST route these URL shapes to the named canonical surface instead of writing them to the attempted surface.
 *
 * @openapiSchema UrlSurfaceMisclassificationCatalog
 * @endpoint GET /v1/entities/urls/surface-misclassifications
 * @contractShape url.surface-misclassification-catalog
 * @contractRole canonical
 */
export declare const UrlSurfaceMisclassificationCatalogSchema: z.ZodType<UrlSurfaceMisclassificationCatalogDefinition>;
export type UrlSurfaceMisclassificationCatalog = z.infer<typeof UrlSurfaceMisclassificationCatalogSchema>;
export {};
//# sourceMappingURL=surface-misclassification-catalog.d.ts.map