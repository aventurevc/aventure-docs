import { z } from "zod/v4";
declare const FederatedSearchProvenanceSchemaDefinition: z.ZodObject<{
    answerUnavailable: z.ZodBoolean;
    entity: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, {
        modeRequested: string;
        modeUsed: string;
    }, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, {
        modeRequested: string;
        modeUsed: string;
    }>>;
    news: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, {
        modeRequested: string;
        modeUsed: string;
    }, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, {
        modeRequested: string;
        modeUsed: string;
    }>>;
    person: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, {
        modeRequested: string;
        modeUsed: string;
    }, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, {
        modeRequested: string;
        modeUsed: string;
    }>>;
    rejection: z.ZodArray<z.ZodType<{
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, {
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, z.core.$ZodTypeInternals<{
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }, {
        detail: string;
        field?: string | null | undefined;
        scope: "entity" | "news" | "person";
    }>>>;
    unavailable: z.ZodArray<z.ZodEnum<{
        entity: "entity";
        news: "news";
        person: "person";
    }>>;
}, z.core.$strip>;
type FederatedSearchProvenanceDefinition = z.infer<typeof FederatedSearchProvenanceSchemaDefinition>;
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
export declare const FederatedSearchProvenanceSchema: z.ZodType<FederatedSearchProvenanceDefinition, z.input<typeof FederatedSearchProvenanceSchemaDefinition>>;
export type FederatedSearchProvenance = z.infer<typeof FederatedSearchProvenanceSchema>;
export {};
//# sourceMappingURL=search-provenance.d.ts.map