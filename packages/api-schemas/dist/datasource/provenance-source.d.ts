import { z } from "zod/v4";
/**
 * Write provenance supplied on mutation query parameters.
 *
 * @openapiSchema DatasourceProvenanceSource
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-source
 * @contractRole canonical
 */
export declare const DatasourceProvenanceSourceSchema: z.ZodObject<{
    actorType: z.ZodOptional<z.ZodEnum<{
        agent: "agent";
        employee: "employee";
    }>>;
    agentChassis: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agentModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceDetail: z.ZodString;
    sourceProvider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceProviderSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceType: z.ZodEnum<{
        api: "api";
        aventureStaff: "aventureStaff";
        blogArticle: "blogArticle";
        firstPartyWebsite: "firstPartyWebsite";
        import: "import";
        llm: "llm";
        manual: "manual";
        newsArticle: "newsArticle";
        relatedPartyWebsite: "relatedPartyWebsite";
        requestChangeForm: "requestChangeForm";
        thirdPartyWebsite: "thirdPartyWebsite";
    }>;
}, z.core.$strip>;
export type DatasourceProvenanceSource = z.infer<typeof DatasourceProvenanceSourceSchema>;
//# sourceMappingURL=provenance-source.d.ts.map