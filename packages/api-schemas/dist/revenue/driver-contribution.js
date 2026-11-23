// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { RevenueDriverDirectionSchema } from "./driver-direction.js";
import { SignalEvidenceClassSchema } from "../signal/evidence-class.js";
const RevenueDriverContributionSchemaDefinition = z.object({
    /** Direction this driver moves the estimate (up or down). */
    direction: RevenueDriverDirectionSchema,
    /** Optional evidence class of the underlying signal family. */
    evidenceClass: SignalEvidenceClassSchema.nullish(),
    /** Multiplicative impact on estimated median revenue relative to prior. */
    impactMultiplier: z.number().min(0),
    /** Plain-language explanation of the feature or signal driver. */
    label: z.string(),
    /** Optional underlying signal family key, such as statutoryFiling. */
    signalFamily: z.string().nullish(),
});
/**
 * One plain-language feature or signal driver's multiplicative shift on estimated revenue.
 *
 * @openapiSchema RevenueDriverContribution
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityRevenueEstimateSchema
 * @contractShape revenue.driver-contribution
 * @contractRole canonical
 */
export const RevenueDriverContributionSchema = RevenueDriverContributionSchemaDefinition;
//# sourceMappingURL=driver-contribution.js.map