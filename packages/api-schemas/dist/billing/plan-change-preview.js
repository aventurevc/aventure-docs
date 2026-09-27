// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPaymentMethodSchema } from "./payment-method.js";
import { BillingPlanTypeSchema } from "./plan-type.js";
import { BillingRecurringPriceSchema } from "./recurring-price.js";
const BillingPlanChangePreviewSchemaDefinition = z.object({
    /** Amount charged on confirmation in the currency's minor unit, after credit for unused time; 0 when the change waits for the period end */
    amountDue: z.number().int(),
    /** ISO 4217 currency code. */
    currency: z.string(),
    /** When the plan would take effect: now, or the current period end */
    effectiveAt: z.iso.datetime({ offset: true }),
    /** Card Stripe charges; absent when no card is on file */
    paymentMethod: BillingPaymentMethodSchema.nullish(),
    /** Plan the subscription would move to */
    plan: BillingPlanTypeSchema,
    /** Recurring charge after the change */
    recurringPrice: BillingRecurringPriceSchema,
});
/**
 * Preview of POST /v1/billing/plan-changes for the same plan: the amount charged on confirmation, when the plan takes effect, the renewal price after it, and the card that pays.
 *
 * @openapiSchema BillingPlanChangePreview
 * @endpoint POST /v1/billing/plan-change-previews
 * @contractShape billing.plan-change-preview
 * @contractRole canonical
 */
export const BillingPlanChangePreviewSchema = BillingPlanChangePreviewSchemaDefinition;
//# sourceMappingURL=plan-change-preview.js.map