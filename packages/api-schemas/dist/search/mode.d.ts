import { z } from "zod/v4";
declare const SearchModeSchemaDefinition: z.ZodUnion<readonly [z.ZodEnum<{
    auto: "auto";
    exact: "exact";
    hybrid: "hybrid";
    keyword: "keyword";
    natural: "natural";
    semantic: "semantic";
}>, z.ZodString]>;
type SearchModeDefinition = z.infer<typeof SearchModeSchemaDefinition>;
/**
 * Search strategy for a natural-language search request. `auto` keeps the server pipeline (exact-name shortcut first, planner otherwise); `exact` matches entity or person names exactly with no planner and no embedding; `keyword` runs full-text search; `semantic` runs vector similarity; `natural` always runs the language-model planner; `hybrid` fuses keyword and semantic rankings by reciprocal rank. Entity and person natural-search support every mode but `hybrid`; news and federated search accept only `auto` and `keyword`; content search accepts `auto` (topic, type, relation, and year words become filters and any other words rank by full text), `keyword` (the full text of articles, posts, and fetched pages), `semantic` (one entity's or person's library pages by vector similarity of their fetched bodies), and `hybrid` (that owner's keyword and semantic rankings fused).
 *
 * @openapiSchema SearchMode
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema NaturalSearchSchema
 * @usedBySchema SearchModeExecutionSchema
 * @contractShape search.mode
 * @contractRole canonical
 */
export declare const SearchModeSchema: z.ZodType<SearchModeDefinition>;
export type SearchMode = z.infer<typeof SearchModeSchema>;
export {};
//# sourceMappingURL=mode.d.ts.map