import { z } from "zod/v4";
/**
 * Full read/storage source type for field-level provenance rows. Write query parameters use DatasourceWritableDataSourceType.
 *
 * @openapiSchema DatasourceDataSourceType
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceProvenanceSourceSchema
 * @contractShape datasource.data-source-type
 * @contractRole canonical
 */
export declare const DatasourceDataSourceTypeSchema: z.ZodEnum<{
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
export type DatasourceDataSourceType = z.infer<typeof DatasourceDataSourceTypeSchema>;
//# sourceMappingURL=data-source-type.d.ts.map