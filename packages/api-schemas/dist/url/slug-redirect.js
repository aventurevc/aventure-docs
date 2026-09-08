// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const UrlSlugRedirectSchemaDefinition = z.object({
    /** Redirect row creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** New public URL, e.g., /companies/new-slug */
    newUrl: z.string(),
    /** Old public URL, e.g., /companies/old-slug */
    oldUrl: z.string(),
    /** Redirect row id */
    redirectId: z.int(),
    /** HTTP redirect type; permanent 301 */
    redirectType: z.int(),
    /** Redirect row update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * URL slug redirect row
 *
 * @openapiSchema UrlSlugRedirect
 * @endpoint GET /v1/entities/{entityId}/slug/redirects
 * @endpoint GET /v1/news/{newsId}/slug/redirects
 * @endpoint GET /v1/people/{personId}/slug/redirects
 * @usedBySchema PageUrlSlugRedirectSchema
 * @contractShape url.slug-redirect
 * @contractRole canonical
 */
export const UrlSlugRedirectSchema = UrlSlugRedirectSchemaDefinition;
//# sourceMappingURL=slug-redirect.js.map