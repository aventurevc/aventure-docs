import { z } from "zod/v4";
declare const SearchOrderingEntityFilterSortableSchemaDefinition: z.ZodObject<{
    order: z.ZodArray<z.ZodType<{
        descending: boolean;
        field: string;
        sortKey?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        descending: boolean;
        field: string;
        sortKey?: string | null | undefined;
    }, unknown>>>;
    relevance: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        keyword: "keyword";
        semantic: "semantic";
    }>>>;
}, z.core.$strip>;
type SearchOrderingEntityFilterSortableDefinition = z.infer<typeof SearchOrderingEntityFilterSortableSchemaDefinition>;
/**
 * Ordering applied to a search result page: an optional relevance rank that precedes the sortable-column terms.
 *
 * @openapiSchema SearchOrderingEntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.ordering-entity-filter-sortable
 * @contractRole canonical
 */
export declare const SearchOrderingEntityFilterSortableSchema: z.ZodType<SearchOrderingEntityFilterSortableDefinition>;
export type SearchOrderingEntityFilterSortable = z.infer<typeof SearchOrderingEntityFilterSortableSchema>;
export {};
//# sourceMappingURL=ordering-entity-filter-sortable.d.ts.map