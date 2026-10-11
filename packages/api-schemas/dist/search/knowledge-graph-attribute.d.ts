import { z } from "zod/v4";
declare const SearchKnowledgeGraphAttributeSchemaDefinition: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodEnum<{
        ceo: "ceo";
        founded: "founded";
        headquarters: "headquarters";
    }>, z.ZodString]>;
    value: z.ZodString;
}, z.core.$strip>;
type SearchKnowledgeGraphAttributeDefinition = z.infer<typeof SearchKnowledgeGraphAttributeSchemaDefinition>;
export interface SearchKnowledgeGraphAttributeSchemaInput extends z.input<typeof SearchKnowledgeGraphAttributeSchemaDefinition> {
}
/**
 * One fact Google's knowledge panel states
 *
 * @openapiSchema SearchKnowledgeGraphAttribute
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchKnowledgeGraphSchema
 * @contractShape search.knowledge-graph-attribute
 * @contractRole canonical
 */
export declare const SearchKnowledgeGraphAttributeSchema: z.ZodType<SearchKnowledgeGraphAttributeDefinition, SearchKnowledgeGraphAttributeSchemaInput>;
export type SearchKnowledgeGraphAttribute = z.infer<typeof SearchKnowledgeGraphAttributeSchema>;
export {};
//# sourceMappingURL=knowledge-graph-attribute.d.ts.map