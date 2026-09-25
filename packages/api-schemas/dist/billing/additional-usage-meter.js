// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingAdditionalUsageTypeSchema } from "./additional-usage-type.js";
const BillingAdditionalUsageMeterSchemaDefinition = z.object({
    /** Price of those units in cents. */
    amountCents: z.number(),
    quantity: z.int(),
    type: BillingAdditionalUsageTypeSchema,
});
/**
 * One meter's additional usage this UTC month.
 *
 * @openapiSchema BillingAdditionalUsageMeter
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingAdditionalUsageSchema
 * @contractShape billing.additional-usage-meter
 * @contractRole canonical
 */
export const BillingAdditionalUsageMeterSchema = BillingAdditionalUsageMeterSchemaDefinition;
//# sourceMappingURL=additional-usage-meter.js.map