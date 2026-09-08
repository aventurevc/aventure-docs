// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentRelationSchema } from "./relation.js";
import { ContentTypeSchema } from "./type.js";
const ContentSchemaDefinition = z.object({
    /** Canonical URL when known. */
    canonicalUrl: z.string().nullish(),
    /** Stable content id scoped by contentType. */
    contentId: z.string(),
    /** Public content source type. */
    contentType: ContentTypeSchema,
    /** Content row creation instant when known. */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Publication or source activity instant when known. */
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** How this content relates to the requested owner. */
    relation: ContentRelationSchema.nullish(),
    /** Registrable source domain when known. */
    sourceDomain: z.string().nullish(),
    /** Publication, platform owner, or source label. */
    sourceName: z.string().nullish(),
    /** Short summary or excerpt when known. */
    summary: z.string().nullish(),
    /** Human title or best available display label. webPage rows restate the page URL when the crawl captured no label; renderers may humanize that fallback. */
    title: z.string(),
    /** Single canonical topic key (web-crawl section vocabulary) or source category (repository language); null when the source has no classified topic. */
    topic: z.string().nullish(),
    /** Content row update instant when known. */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Primary URL for this content card. */
    url: z.string().nullish(),
    /** Best-effort content year used by the year filter. */
    year: z.int().nullish(),
});
/**
 * Canonical public content card across news, blog posts, social posts, repositories, websites, pages, and research papers.
 *
 * @openapiSchema Content
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema PageContentSchema
 * @usedBySchema PageResultContentSchema
 * @contractShape content.content
 * @contractRole canonical
 */
export const ContentSchema = ContentSchemaDefinition;
//# sourceMappingURL=content.js.map