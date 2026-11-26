// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingChangeTimingTypeSchema } from "./change-timing-type.js";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingPlanChangeMutationSchemaDefinition = z.object({
    /** The pendingChangeRevision of the scheduled change this request undoes, sent with the current plan while a change is pending; a token that does not match the currently scheduled target plan and effective second answers 409, including when no matching schedule remains. Re-scheduling the same plan for the same second reuses the token. */
    pendingChangeRevision: z.string().nullish(),
    /** AI Plus or AI Pro plan to move to; the current plan cancels a scheduled change */
    plan: BillingPlanTypeSchema,
    /** Unix epoch-second timestamp from an immediate-change preview that pins its prorated amount on confirmation; omit it for period-end changes or without a preview */
    prorationDate: z.number().int().nullish(),
    /** When the change applies: IMMEDIATE prorates now, PERIOD_END schedules for renewal. Defaults to IMMEDIATE for upgrades or metered accounts, PERIOD_END for downgrades. */
    timing: BillingChangeTimingTypeSchema.nullish(),
});
/**
 * Caller-selected plan for changing a continuing AI Plus or AI Pro subscription.
 *
 * @openapiSchema BillingPlanChangeMutation
 * @endpoint POST /v1/billing/plan-change-previews
 * @endpoint POST /v1/billing/plan-changes
 * @contractShape billing.plan-change-mutation
 * @contractRole canonical
 */
export const BillingPlanChangeMutationSchema = BillingPlanChangeMutationSchemaDefinition;
//# sourceMappingURL=plan-change-mutation.js.map