// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const NEWS_ENDPOINT = "/v1/news";
/**
 * Request-side query params for `GET /v1/news`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/news
 * @contractShape news.param
 * @contractRole canonical
 */
export const NewsParamSchema = PageParamSchema.extend({
    /** Author initial filter. */
    authorInitial: z.string().optional(),
    /** News category slug to include or exclude. */
    category: z.string().optional(),
    /** Cursor token returned by the previous thin page. */
    cursor: z.string().optional(),
    /** Exclude one news article by id. */
    excludeId: z.int().optional(),
    /** Deprecated author-initial alias; use authorInitial. */
    letter: z.string().optional(),
    /** Response mode; use thin for cursor-paginated index reads. */
    mode: z.string().optional(),
    "owner.entityId": z.uuid().optional(),
    "owner.personId": z.uuid().optional(),
    /** Earliest publication date, inclusive. */
    publishedAfter: z.iso.date().optional(),
    /** Latest publication date, inclusive. */
    publishedBefore: z.iso.date().optional(),
    /** Full-text news search term. */
    search: z.string().optional(),
}).check(({ value, issues }) => {
    if (value.cursor !== undefined && value.cursor !== "" && value.sort !== undefined) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: ["sort"],
            input: value.sort,
            message: "sort is not supported when cursor is provided",
        });
    }
});
//# sourceMappingURL=param.js.map