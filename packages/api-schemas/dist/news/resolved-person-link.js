// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsResolvedPersonLinkSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    href: z.string().nullish(),
    matchScore: z.number().nullish(),
    matchType: z.string().nullish(),
    mention: z.string().nullish(),
    /** Canonical person UUID */
    personId: z.uuid(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Resolved person mention in news content - hyperlink to a person detected in article text
 *
 * @openapiSchema NewsResolvedPersonLink
 * @endpoint GET /v1/news/detail
 * @endpoint GET /v1/news/lookup
 * @usedBySchema NewsDetailSchema
 * @contractShape news.resolved-person-link
 * @contractRole canonical
 */
export const NewsResolvedPersonLinkSchema = NewsResolvedPersonLinkSchemaDefinition;
//# sourceMappingURL=resolved-person-link.js.map