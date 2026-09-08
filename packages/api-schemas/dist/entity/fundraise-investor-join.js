// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "./person-owner.js";
import { FundraiseFinancialInstrumentTypeSchema } from "../fundraise/financial-instrument-type.js";
const EntityFundraiseInvestorJoinSchemaDefinition = z.object({
    /** Investor-level attributed amount invested in the fundraise transaction currency. Serialized as a plain JSON number such as 220000 or 123456.78; no currency sign, currency code, comma grouping, or abbreviated amount text is valid. */
    amountInvested: z.number().nullish(),
    /** Created timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Financial instrument/vehicle for this investor's participation in the round (e.g. SAFE, Preferred Stock, Convertible Note). Distinct from the round-level financialInstrumentType: a single round can record different vehicles per investor join — e.g. an accelerator batch holding a capped SAFE and an uncapped-MFN SAFE as two joins. */
    financialInstrumentType: FundraiseFinancialInstrumentTypeSchema.nullish(),
    /** Fundraise investor join identifier */
    id: z.uuid(),
    /** Investor identity, nested: investor.entityId for a firm/fund investor or investor.personId for an angel — exactly one is set. Read responses carry ids only, never flat investor* fields or names; resolve display names with GET /v1/entities/detail or GET /v1/people/detail. */
    investor: EntityPersonOwnerSchema,
    /** Whether this investor is the lead investor for the round — the lead/anchor investor that set the round terms or made the primary commitment. */
    leadInvestor: z.boolean(),
    /** Fundraise transaction identifier */
    transactionId: z.uuid(),
    /** Updated timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Canonical fundraise investor join row for API serialization
 *
 * @openapiSchema EntityFundraiseInvestorJoin
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins/{joinId}
 * @usedBySchema PageEntityFundraiseInvestorJoinSchema
 * @contractShape entity.fundraise-investor-join
 * @contractRole canonical
 */
export const EntityFundraiseInvestorJoinSchema = EntityFundraiseInvestorJoinSchemaDefinition;
//# sourceMappingURL=fundraise-investor-join.js.map