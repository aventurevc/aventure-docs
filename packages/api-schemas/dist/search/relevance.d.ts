import { z } from "zod/v4";
/**
 * Relevance rank that ordered a search page before any sortable column.
 *
 * @openapiSchema SearchRelevance
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchOrderingEntityFilterSortableSchema
 * @usedBySchema SearchOrderingPersonSortFieldSchema
 * @contractShape search.relevance
 * @contractRole canonical
 */
export declare const SearchRelevanceSchema: z.ZodEnum<{
    keyword: "keyword";
    semantic: "semantic";
}>;
export type SearchRelevance = z.infer<typeof SearchRelevanceSchema>;
//# sourceMappingURL=relevance.d.ts.map