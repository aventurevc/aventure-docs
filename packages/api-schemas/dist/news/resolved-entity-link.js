// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
const NewsResolvedEntityLinkSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    href: z.string().nullish(),
    internal: z.boolean(),
    matchScore: z.number().nullish(),
    matchType: z.string().nullish(),
    mention: z.string().nullish(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    typeRecord: EntityTypeSchema.nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Resolved entity mention in news content - hyperlink to an entity detected in article text - matchType: composite format "status:score|quote=evidence|user=email|at=timestamp" - m...
 *
 * @openapiSchema NewsResolvedEntityLink
 * @endpoint GET /v1/news/detail
 * @usedBySchema NewsDetailSchema
 * @contractShape news.resolved-entity-link
 * @contractRole canonical
 */
export const NewsResolvedEntityLinkSchema = NewsResolvedEntityLinkSchemaDefinition;
//# sourceMappingURL=resolved-entity-link.js.map