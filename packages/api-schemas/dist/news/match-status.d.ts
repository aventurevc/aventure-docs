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
export declare const NewsMatchStatusSchema: z.ZodEnum<{
    approved: "approved";
    "auto-match": "auto-match";
    "needs-review": "needs-review";
    rejected: "rejected";
}>;
export type NewsMatchStatus = z.infer<typeof NewsMatchStatusSchema>;
//# sourceMappingURL=match-status.d.ts.map