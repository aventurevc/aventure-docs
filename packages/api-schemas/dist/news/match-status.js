// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * auto-match = linked by the matcher; needs-review = awaiting a reviewer; approved; rejected
 *
 * @openapiSchema NewsMatchStatus
 * @endpoint GET /v1/news/lookup
 * @endpoint GET /v1/news/{newsId}
 * @usedBySchema NewsResolvedEntityLinkSchema
 * @usedBySchema NewsResolvedPersonLinkSchema
 * @contractShape news.match-status
 * @contractRole canonical
 */
export const NewsMatchStatusSchema = z.enum(["auto-match", "needs-review", "approved", "rejected"]);
//# sourceMappingURL=match-status.js.map