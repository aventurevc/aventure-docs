import { z } from "zod/v4";
declare const SearchModeExecutionSchemaDefinition: z.ZodObject<{
    modeRequested: z.ZodEnum<{
        auto: "auto";
        exact: "exact";
        keyword: "keyword";
        natural: "natural";
        semantic: "semantic";
    }>;
    modeUsed: z.ZodEnum<{
        auto: "auto";
        exact: "exact";
        keyword: "keyword";
        natural: "natural";
        semantic: "semantic";
    }>;
}, z.core.$strip>;
type SearchModeExecutionDefinition = z.infer<typeof SearchModeExecutionSchemaDefinition>;
/**
 * Search strategy requested by the caller and executed by the canonical engine.
 *
 * @openapiSchema SearchModeExecution
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchProvenanceSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.mode-execution
 * @contractRole canonical
 */
export declare const SearchModeExecutionSchema: z.ZodType<SearchModeExecutionDefinition>;
export type SearchModeExecution = z.infer<typeof SearchModeExecutionSchema>;
export {};
//# sourceMappingURL=mode-execution.d.ts.map