// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
import { EntityFundingDetailSchema } from "../entity/funding-detail.js";
const InvestorPortfolioRecipientSchemaDefinition = z.object({
    entity: EntitySchema,
    funding: EntityFundingDetailSchema,
});
/**
 * Recipient identity with canonical recorded funding coverage.
 *
 * @openapiSchema InvestorPortfolioRecipient
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PageInvestorPortfolioRecipientSchema
 * @contractShape investor.portfolio-recipient
 * @contractRole canonical
 */
export const InvestorPortfolioRecipientSchema = InvestorPortfolioRecipientSchemaDefinition;
//# sourceMappingURL=portfolio-recipient.js.map