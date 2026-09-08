// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const DatasourceDataSourceTypeSchema = z.enum([
    "requestChangeForm",
    "newsArticle",
    "blogArticle",
    "firstPartyWebsite",
    "relatedPartyWebsite",
    "thirdPartyWebsite",
    "llm",
    "aventureStaff",
    "api",
    "manual",
    "import",
]);
//# sourceMappingURL=data-source-type.js.map