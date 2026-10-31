// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationSourceSchema } from "./valuation-source.js";
import { ValuationTypeSchema } from "../valuation/type.js";
/**
 * Current eligible valuation with its own amount, basis, currency and source date.
 *
 * @openapiSchema EntityValuation
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundingDetailSchema
 * @contractShape entity.valuation
 * @contractRole canonical
 */
export const EntityValuationSchema = z.object({
    /** Native source amount as a plain decimal JSON string, preserving stored precision without JSON-number rounding or Long truncation. */
    amount: z.string().regex(/^-?[0-9]+(\.[0-9]+)?$/),
    /** Source-effective year, month, day or timestamp; null when the observation is undated. */
    asOfDate: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Source-stated basis; null when legacy evidence did not state one. Reported is not silently post-money. */
    basis: ValuationTypeSchema.nullish(),
    /** The observation's own ISO currency. Null means unknown, never the entity currency or USD. */
    currency: z.string().nullish(),
    /** Post-money amount in USD as a plain decimal JSON string under the existing ECB/World Bank conversion policy; derived only from same-source pre-money plus raised when needed; null for pre-money-only without raised, unknown currency, or unavailable foreign-currency date/rate. Never substitutes an older observation. */
    postMoneyUsd: z
        .string()
        .regex(/^-?[0-9]+(\.[0-9]+)?$/)
        .nullish(),
    /** Original research qualifier, retained without interpreting a fiscal/forecast period as currency. */
    referenceValue: z.string().nullish(),
    source: EntityValuationSourceSchema,
    sourceRef: z.string(),
});
//# sourceMappingURL=valuation.js.map