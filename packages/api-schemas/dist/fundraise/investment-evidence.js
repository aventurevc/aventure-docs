// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceSourceMetadataSchema } from "../datasource/source-metadata.js";
import { EntityFundraiseTransactionSchema } from "../entity/fundraise-transaction.js";
const FundraiseInvestmentEvidenceSchemaDefinition = z.object({
    /** Source metadata of a managed-fund relationship, when used. */
    fundManagerRelationshipSource: DatasourceSourceMetadataSchema.nullish(),
    /** Recorded round with investor-specific and source attribution. */
    fundraiseTransaction: EntityFundraiseTransactionSchema,
    /** Source metadata of the fundraise transaction. */
    fundraiseTransactionSource: DatasourceSourceMetadataSchema.nullish(),
    /** Source metadata of the selected investment participation. */
    investorJoinSource: DatasourceSourceMetadataSchema.nullish(),
});
/**
 * Canonical transaction, participation attribution, and their owning source metadata.
 *
 * @openapiSchema FundraiseInvestmentEvidence
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchInvestmentSchema
 * @contractShape fundraise.investment-evidence
 * @contractRole canonical
 */
export const FundraiseInvestmentEvidenceSchema = FundraiseInvestmentEvidenceSchemaDefinition;
//# sourceMappingURL=investment-evidence.js.map