// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFundraiseSchema } from "../entity/fundraise.js";
import { FundraiseInvestmentAttributionSchema } from "../fundraise/investment-attribution.js";
import { PersonInvestedCompanySchema } from "./invested-company.js";
const PersonInvestmentSchemaDefinition = z.object({
    amount: z.number().nullish(),
    company: PersonInvestedCompanySchema,
    date: z.iso.datetime({ offset: true }).nullish(),
    fundraiseTransaction: EntityFundraiseSchema.nullish(),
    /** Canonical fundraise transaction UUID */
    fundraiseTransactionId: z.uuid(),
    id: z.string(),
    investmentDate: z.iso.datetime({ offset: true }),
    /** Investor-specific attribution for this person's participation in the fundraise round. amountInvested is a plain decimal number in the fundraise transaction currency and is not added to amount. */
    investorAttribution: FundraiseInvestmentAttributionSchema.nullish(),
    round: z.string().nullish(),
});
/**
 * Domain model for a person's investment in an entity (fundraise transaction)
 *
 * @openapiSchema PersonInvestment
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @usedBySchema PagePersonInvestmentSchema
 * @usedBySchema PersonDetailSchema
 * @contractShape person.investment
 * @contractRole canonical
 */
export const PersonInvestmentSchema = PersonInvestmentSchemaDefinition;
//# sourceMappingURL=investment.js.map