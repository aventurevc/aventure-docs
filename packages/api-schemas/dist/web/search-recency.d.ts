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
export declare const WebSearchRecencySchema: z.ZodEnum<{
    DAY: "DAY";
    MONTH: "MONTH";
    WEEK: "WEEK";
    YEAR: "YEAR";
}>;
export type WebSearchRecency = z.infer<typeof WebSearchRecencySchema>;
//# sourceMappingURL=search-recency.d.ts.map