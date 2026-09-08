// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LocationIdentifierSchema } from "./identifier.js";
/**
 * Single directory entry (country/state/city) for sitemap
 *
 * @openapiSchema LocationDirectoryEntry
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @usedBySchema PageLocationDirectoryEntrySchema
 * @usedBySchema PageResultLocationDirectoryEntrySchema
 * @contractShape location.directory-entry
 * @contractRole canonical
 */
export const LocationDirectoryEntrySchema = z.object({
    canonicalSlug: z.string(),
    entityCount: z.number().int(),
    identifier: LocationIdentifierSchema,
    /** Per-location entity provenance watermark: MAX over the location's member companies of COALESCE(lastModifiedAt, createdAt), computed by the stored directory rebuild. Absent until that rebuild has run for the row. */
    latestUpdatedAt: z.iso.datetime({ offset: true }).nullish(),
    name: z.string(),
    parentLabel: z.string().nullish(),
    slug: z.string(),
});
//# sourceMappingURL=directory-entry.js.map