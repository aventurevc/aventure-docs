// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ExternalSocialPostPlatformSchema } from "../external/social-post-platform.js";
const UrlSurfaceMisclassificationRouteSchemaDefinition = z.object({
    /** Additional routing guidance for agents and API clients. */
    additionalGuidance: z.string().nullish(),
    /** Canonical API endpoint or discovery endpoint. */
    apiEndpoint: z.string(),
    /** Attempted write surfaces this route rejects. */
    attemptedSurface: z.array(z.string()),
    /** Canonical aventure-cli guidance. */
    cliCommand: z.string(),
    /** Canonical aVenture write surface. */
    correctSurface: z.string(),
    /** Human-readable deterministic URL shape. */
    deterministicUrlShape: z.string(),
    /** Exact path segments, when the whole path must match. */
    exactPath: z.array(z.string()),
    /** Publishing platform for an external-social permalink route. */
    externalSocialPostPlatform: ExternalSocialPostPlatformSchema.nullish(),
    /** Host suffix matched against the submitted URL host. */
    hostSuffix: z.string(),
    /** Stable YAML key for this route. */
    id: z.string(),
    /** Required leading path segments. */
    pathPrefix: z.array(z.string()),
    /** Exact external-social permalink template. Literals match exactly, * matches one nonblank segment, and @* matches one @handle segment. */
    pathTemplate: z.array(z.string()),
    /** Required final path segment, when applicable. */
    requiredLastSegment: z.string().nullish(),
    /** Required path segment at any position, for shapes whose discriminating segment follows a variable owner handle. */
    requiredSegment: z.string().nullish(),
});
/**
 * One deterministic URL shape and the canonical surface it must be routed to.
 *
 * @openapiSchema UrlSurfaceMisclassificationRoute
 * @endpoint GET /v1/entities/urls/surface-misclassifications
 * @usedBySchema UrlSurfaceMisclassificationCatalogSchema
 * @contractShape url.surface-misclassification-route
 * @contractRole canonical
 */
export const UrlSurfaceMisclassificationRouteSchema = UrlSurfaceMisclassificationRouteSchemaDefinition;
//# sourceMappingURL=surface-misclassification-route.js.map