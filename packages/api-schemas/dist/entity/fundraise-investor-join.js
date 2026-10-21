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
    /** Investor identity, nested: investor.entityId for a firm/fund investor or investor.personId for an angel — exactly one is set. investorName and investorSlug on this row name that investor; never read each id separately. */
    investor: EntityPersonOwnerSchema,
    /** Investor display name, read from the investor's own entity record (brand name, else legal name) or person record (full name). Omitted when that record holds no name. */
    investorName: z.string().nullish(),
    /** Investor profile slug, read from the investor's own entity or person record; open the profile with it instead of resolving investor ids one by one. */
    investorSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
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
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema PageEntityFundraiseInvestorJoinSchema
 * @contractShape entity.fundraise-investor-join
 * @contractRole canonical
 */
export const EntityFundraiseInvestorJoinSchema = EntityFundraiseInvestorJoinSchemaDefinition;
//# sourceMappingURL=fundraise-investor-join.js.map