// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LocationSitemapBatchSchemaDefinition = z.object({
    /** Opaque continuation from companyNextCursor; keeps deep company traversal keyset-based. */
    cursor: z.string().nullish(),
    letter: z.string(),
    /** Accepted location scope tokens for path and batch inputs */
    scope: z.enum([
        "country",
        "COUNTRY",
        "countries",
        "COUNTRIES",
        "state",
        "STATE",
        "states",
        "STATES",
        "city",
        "CITY",
        "cities",
        "CITIES",
    ]),
    slug: z.string().nullish(),
});
/**
 * Request body for batch sitemap hydration
 *
 * @openapiSchema LocationSitemapBatch
 * @endpoint POST /v1/addresses/locations/batch
 * @contractShape location.sitemap-batch
 * @contractRole canonical
 */
export const LocationSitemapBatchSchema = LocationSitemapBatchSchemaDefinition;
//# sourceMappingURL=sitemap-batch.js.map