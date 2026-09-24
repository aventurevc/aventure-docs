// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingPlanChangeMutationSchemaDefinition = z.object({
    /** AI Plus or AI Pro plan to move to; the current plan cancels a scheduled change */
    plan: BillingPlanTypeSchema,
});
/**
 * Caller-selected plan for changing a continuing AI Plus or AI Pro subscription.
 *
 * @openapiSchema BillingPlanChangeMutation
 * @endpoint POST /v1/billing/plan-changes
 * @contractShape billing.plan-change-mutation
 * @contractRole canonical
 */
export const BillingPlanChangeMutationSchema = BillingPlanChangeMutationSchemaDefinition;
//# sourceMappingURL=plan-change-mutation.js.map