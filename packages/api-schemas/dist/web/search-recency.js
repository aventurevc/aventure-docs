// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Result recency window: the past day, week, month, or year.
 *
 * @openapiSchema WebSearchRecency
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSchema
 * @contractShape web.search-recency
 * @contractRole canonical
 */
export const WebSearchRecencySchema = z.enum(["DAY", "WEEK", "MONTH", "YEAR"]);
//# sourceMappingURL=search-recency.js.map