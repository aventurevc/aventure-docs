// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchAccessTypeSchemaKnownMembers = z.enum([
    "INCLUDED",
    "ADDITIONAL_USAGE",
    "EXHAUSTED",
    "PLAN_REQUIRED",
    "BILLING_BLOCKED",
]);
/**
 * What filing one more research run does now. `INCLUDED`: the plan's monthly allowance covers it. `ADDITIONAL_USAGE`: the allowance is spent or withheld, and the run is billed as additional usage (prepaid credit or invoice). `EXHAUSTED`: the plan's allowance is spent and no additional usage can pay for it (off, spend cap reached, or prepaid credit below the unit price); filing answers 429. `PLAN_REQUIRED`: the plan includes no research and no additional usage can pay for it; filing answers 402 or 429. `BILLING_BLOCKED`: a paid plan is past due, unpaid, incomplete, or paused, or an additional-usage invoice is unpaid; filing answers 402.
 *
 * @openapiSchema ResearchAccessType
 * @endpoint GET /v1/billing/ai-credits
 * @endpoint GET /v1/billing/subscription
 * @endpoint POST /v1/directory/exports
 * @usedBySchema ResearchAllowanceSchema
 * @contractShape research.access-type
 * @contractRole canonical
 */
export const ResearchAccessTypeSchema = Object.assign(z.union([ResearchAccessTypeSchemaKnownMembers, z.string()]), { enum: ResearchAccessTypeSchemaKnownMembers.enum });
//# sourceMappingURL=access-type.js.map