import { z } from "zod/v4";
declare const SearchModeExecutionSchemaDefinition: z.ZodObject<{
    modeRequested: z.ZodType<string, unknown, z.core.$ZodTypeInternals<string, unknown>>;
    modeUsed: z.ZodType<string, unknown, z.core.$ZodTypeInternals<string, unknown>>;
}, z.core.$strip>;
type SearchModeExecutionDefinition = z.infer<typeof SearchModeExecutionSchemaDefinition>;
/**
 * Search strategy requested by the caller and executed by the canonical engine.
 *
 * @openapiSchema SearchModeExecution
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
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