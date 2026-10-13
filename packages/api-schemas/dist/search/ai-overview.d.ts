import { z } from "zod/v4";
/**
 * Google's AI Overview for a web search: its generated answer and the pages it cites
 *
 * @openapiSchema SearchAiOverview
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.ai-overview
 * @contractRole canonical
 */
export declare const SearchAiOverviewSchema: z.ZodObject<{
    reference: z.ZodArray<z.ZodType<{
        index: number;
        snippet?: string | null | undefined;
        source?: string | null | undefined;
        title: string;
        url: string;
    }, import("./ai-overview-reference.ts").SearchAiOverviewReferenceSchemaInput, z.core.$ZodTypeInternals<{
        index: number;
        snippet?: string | null | undefined;
        source?: string | null | undefined;
        title: string;
        url: string;
    }, import("./ai-overview-reference.ts").SearchAiOverviewReferenceSchemaInput>>>;
    text: z.ZodString;
}, z.core.$strip>;
export type SearchAiOverview = z.infer<typeof SearchAiOverviewSchema>;
//# sourceMappingURL=ai-overview.d.ts.map