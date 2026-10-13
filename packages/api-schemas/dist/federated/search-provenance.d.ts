import { z } from "zod/v4";
declare const FederatedSearchProvenanceSchemaDefinition: z.ZodObject<{
    answerUnavailable: z.ZodBoolean;
    entity: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, import("../search/mode-execution.ts").SearchModeExecutionSchemaInput, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, import("../search/mode-execution.ts").SearchModeExecutionSchemaInput>>;
    news: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, import("../search/mode-execution.ts").SearchModeExecutionSchemaInput, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, import("../search/mode-execution.ts").SearchModeExecutionSchemaInput>>;
    person: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, import("../search/mode-execution.ts").SearchModeExecutionSchemaInput, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, import("../search/mode-execution.ts").SearchModeExecutionSchemaInput>>;
    rejection: z.ZodArray<z.ZodType<{
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, import("./search-rejection.ts").FederatedSearchRejectionSchemaInput, z.core.$ZodTypeInternals<{
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, import("./search-rejection.ts").FederatedSearchRejectionSchemaInput>>>;
    unavailable: z.ZodArray<z.ZodEnum<{
        entity: "entity";
        news: "news";
        person: "person";
    }>>;
}, z.core.$strip>;
type FederatedSearchProvenanceDefinition = z.infer<typeof FederatedSearchProvenanceSchemaDefinition>;
export interface FederatedSearchProvenanceSchemaInput extends z.input<typeof FederatedSearchProvenanceSchemaDefinition> {
}
/**
 * Requested and executed search strategy for every federated scope.
 *
 * @openapiSchema FederatedSearchProvenance
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-provenance
 * @contractRole canonical
 */
export declare const FederatedSearchProvenanceSchema: z.ZodType<FederatedSearchProvenanceDefinition, FederatedSearchProvenanceSchemaInput>;
export type FederatedSearchProvenance = z.infer<typeof FederatedSearchProvenanceSchema>;
export {};
//# sourceMappingURL=search-provenance.d.ts.map