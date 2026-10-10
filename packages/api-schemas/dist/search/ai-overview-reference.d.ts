import { z } from "zod/v4";
declare const SearchAiOverviewReferenceSchemaDefinition: z.ZodObject<{
    index: z.ZodInt;
    snippet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type SearchAiOverviewReferenceDefinition = z.infer<typeof SearchAiOverviewReferenceSchemaDefinition>;
export interface SearchAiOverviewReferenceSchemaInput extends z.input<typeof SearchAiOverviewReferenceSchemaDefinition> {
}
/**
 * One page Google's AI Overview cites
 *
 * @openapiSchema SearchAiOverviewReference
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchAiOverviewSchema
 * @contractShape search.ai-overview-reference
 * @contractRole canonical
 */
export declare const SearchAiOverviewReferenceSchema: z.ZodType<SearchAiOverviewReferenceDefinition, SearchAiOverviewReferenceSchemaInput>;
export type SearchAiOverviewReference = z.infer<typeof SearchAiOverviewReferenceSchema>;
export {};
//# sourceMappingURL=ai-overview-reference.d.ts.map