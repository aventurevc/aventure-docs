// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LocationDirectoryEntrySchema } from "./directory-entry.js";
import { LocationSlugResolutionSchema } from "./slug-resolution.js";
import { PageResultLocationDirectoryEntrySchema, PageResultSitemapUrlSlotSchema, } from "../pagination/schemas.js";
const LocationSitemapSchemaDefinition = z.object({
    company: PageResultSitemapUrlSlotSchema.nullish(),
    /** Opaque continuation for the next company URL-slot page. */
    companyNextCursor: z.string().nullish(),
    directory: PageResultLocationDirectoryEntrySchema,
    directoryLetterCount: z.record(z.string(), z.number().int()),
    location: LocationDirectoryEntrySchema.nullish(),
    locationLetterCount: z.record(z.string(), z.number().int()).nullish(),
    requestedLetter: z.string(),
    resolvedDirectoryLetter: z.string(),
    resolvedLocationLetter: z.string().nullish(),
    scope: z.string(),
    slugResolution: LocationSlugResolutionSchema.nullish(),
});
/**
 * Batch sitemap response with directory, exact letter counts, and optional company URL slots
 *
 * @openapiSchema LocationSitemap
 * @endpoint POST /v1/addresses/locations/batch
 * @contractShape location.sitemap
 * @contractRole canonical
 */
export const LocationSitemapSchema = LocationSitemapSchemaDefinition;
//# sourceMappingURL=sitemap.js.map