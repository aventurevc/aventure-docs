// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UrlSurfaceMisclassificationRouteSchema } from "./surface-misclassification-route.js";
const UrlSurfaceMisclassificationCatalogSchemaDefinition = z.object({
    /** Binary asset file extensions (no leading dot) — an asset is not a web page. */
    assetExtension: z.array(z.string()),
    /** Pure news/press-wire hosts. An article path on these is a news record, never a URL link; the outlet's own root stays a valid website. */
    newsArticleHost: z.array(z.string()),
    /** Domain-marketplace / for-sale / parking hosts — the domain is unowned, never a URL. */
    parkingHost: z.array(z.string()),
    /** Deterministic URL path routes whose canonical surface is not the attempted write surface. */
    route: z.array(UrlSurfaceMisclassificationRouteSchema),
});
/**
 * URL surface misclassification catalog. Consumers MUST route these URL shapes to the named canonical surface instead of writing them to the attempted surface.
 *
 * @openapiSchema UrlSurfaceMisclassificationCatalog
 * @endpoint GET /v1/entities/urls/surface-misclassifications
 * @contractShape url.surface-misclassification-catalog
 * @contractRole canonical
 */
export const UrlSurfaceMisclassificationCatalogSchema = UrlSurfaceMisclassificationCatalogSchemaDefinition;
//# sourceMappingURL=surface-misclassification-catalog.js.map