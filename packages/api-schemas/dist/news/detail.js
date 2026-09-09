// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSchema } from "./news.js";
import { NewsResolvedEntityLinkSchema } from "./resolved-entity-link.js";
import { NewsResolvedPersonLinkSchema } from "./resolved-person-link.js";
const NewsDetailSchemaDefinition = z.object({
    content: z.string().nullish(),
    core: NewsSchema,
    /** Resolved entity mentions — read-only display projections. News mutations attach entities only via flat entityJoinId values, never these nested objects. */
    entityMentionResolved: z.array(NewsResolvedEntityLinkSchema),
    externalId: z.string().nullish(),
    linkedContent: z.string().nullish(),
    /** Resolved person mentions — read-only display projections. News mutations attach people only via flat personId/personSlug values, never these nested objects. */
    personMentionResolved: z.array(NewsResolvedPersonLinkSchema),
});
/**
 * Canonical news detail owner
 *
 * @openapiSchema NewsDetail
 * @endpoint GET /v1/news/detail
 * @endpoint GET /v1/news/lookup
 * @contractShape news.detail
 * @contractRole canonical
 */
export const NewsDetailSchema = NewsDetailSchemaDefinition;
//# sourceMappingURL=detail.js.map