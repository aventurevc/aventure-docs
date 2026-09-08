import { z } from "zod/v4";
/**
 * Domain resource whose field-level provenance is tracked
 *
 * @openapiSchema DatasourceTrackedProvenanceTable
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/latest
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.tracked-provenance-table
 * @contractRole canonical
 */
export declare const DatasourceTrackedProvenanceTableSchema: z.ZodEnum<{
    deployTarget: "deployTarget";
    entity: "entity";
    entityAddressJoin: "entityAddressJoin";
    entityClassificationJoin: "entityClassificationJoin";
    entityDetail: "entityDetail";
    entityPersonJoin: "entityPersonJoin";
    entityRelationship: "entityRelationship";
    entityResearchSnippets: "entityResearchSnippets";
    entityTypeJoin: "entityTypeJoin";
    fundraiseTransaction: "fundraiseTransaction";
    fundraiseTransactionInvestorJoin: "fundraiseTransactionInvestorJoin";
    newsArticle: "newsArticle";
    newsArticleEntityJoin: "newsArticleEntityJoin";
    newsArticlePersonJoin: "newsArticlePersonJoin";
    person: "person";
    personAddressJoin: "personAddressJoin";
    text: "text";
    urlLink: "urlLink";
}>;
export type DatasourceTrackedProvenanceTable = z.infer<typeof DatasourceTrackedProvenanceTableSchema>;
//# sourceMappingURL=tracked-provenance-table.d.ts.map