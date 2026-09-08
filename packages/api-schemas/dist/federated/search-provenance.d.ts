import { z } from "zod/v4";
declare const FederatedSearchProvenanceSchemaDefinition: z.ZodObject<{
    entity: z.ZodType<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown>>;
    news: z.ZodType<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown>>;
    person: z.ZodType<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown>>;
}, z.core.$strip>;
type FederatedSearchProvenanceDefinition = z.infer<typeof FederatedSearchProvenanceSchemaDefinition>;
/**
 * Requested and executed search strategy for every federated scope.
 *
 * @openapiSchema FederatedSearchProvenance
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-provenance
 * @contractRole canonical
 */
export declare const FederatedSearchProvenanceSchema: z.ZodType<FederatedSearchProvenanceDefinition>;
export type FederatedSearchProvenance = z.infer<typeof FederatedSearchProvenanceSchema>;
export {};
//# sourceMappingURL=search-provenance.d.ts.map