import { z } from "zod/v4";
declare const FederatedSearchProvenanceSchemaDefinition: z.ZodObject<{
    entity: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, unknown>>;
    news: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, unknown>>;
    person: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, unknown>>;
    rejection: z.ZodArray<z.ZodType<{
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, unknown, z.core.$ZodTypeInternals<{
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, unknown>>>;
}, z.core.$strip>;
type FederatedSearchProvenanceDefinition = z.infer<typeof FederatedSearchProvenanceSchemaDefinition>;
/**
 * Requested and executed search strategy for every federated scope.
 *
 * @openapiSchema FederatedSearchProvenance
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-provenance
 * @contractRole canonical
 */
export declare const FederatedSearchProvenanceSchema: z.ZodType<FederatedSearchProvenanceDefinition>;
export type FederatedSearchProvenance = z.infer<typeof FederatedSearchProvenanceSchema>;
export {};
//# sourceMappingURL=search-provenance.d.ts.map