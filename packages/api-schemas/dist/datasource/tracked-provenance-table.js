// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const DatasourceTrackedProvenanceTableSchema = z.enum([
    "entity",
    "person",
    "newsArticle",
    "entityPersonJoin",
    "newsArticleEntityJoin",
    "newsArticlePersonJoin",
    "entityRelationship",
    "entityTypeJoin",
    "entityAddressJoin",
    "entityClassificationJoin",
    "entityDetail",
    "entityResearchSnippets",
    "personAddressJoin",
    "fundraiseTransaction",
    "fundraiseTransactionInvestorJoin",
    "text",
    "urlLink",
    "deployTarget",
]);
//# sourceMappingURL=tracked-provenance-table.js.map