import { z } from "zod/v4";
/**
 * Knowledge panel fact name
 *
 * @openapiSchema SearchKnowledgeGraphFact
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchKnowledgeGraphAttributeSchema
 * @contractShape search.knowledge-graph-fact
 * @contractRole canonical
 */
export declare const SearchKnowledgeGraphFactSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ceo: "ceo";
    founded: "founded";
    headquarters: "headquarters";
}>, z.ZodString]>;
export type SearchKnowledgeGraphFact = z.infer<typeof SearchKnowledgeGraphFactSchema>;
//# sourceMappingURL=knowledge-graph-fact.d.ts.map