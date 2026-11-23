// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Whether a driver pushes estimated revenue up or down relative to the prior.
 *
 * @openapiSchema RevenueDriverDirection
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema RevenueDriverContributionSchema
 * @contractShape revenue.driver-direction
 * @contractRole canonical
 */
export const RevenueDriverDirectionSchema = z.enum(["up", "down"]);
//# sourceMappingURL=driver-direction.js.map