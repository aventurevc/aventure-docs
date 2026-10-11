import { z } from "zod/v4";
/**
 * Google's knowledge panel for the entity the query names
 *
 * @openapiSchema SearchKnowledgeGraph
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.knowledge-graph
 * @contractRole canonical
 */
export declare const SearchKnowledgeGraphSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SearchKnowledgeGraph = z.infer<typeof SearchKnowledgeGraphSchema>;
//# sourceMappingURL=knowledge-graph.d.ts.map