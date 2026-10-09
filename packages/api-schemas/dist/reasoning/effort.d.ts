import { z } from "zod/v4";
/**
 * Reasoning effort level, lowest to highest: `minimal`, `low`, `medium`, `high`, `xhigh`, `max`. A model receives the nearest level it supports.
 *
 * @openapiSchema ReasoningEffort
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedNaturalSearchSchema
 * @usedBySchema NaturalSearchSchema
 * @contractShape reasoning.effort
 * @contractRole canonical
 */
export declare const ReasoningEffortSchema: z.ZodUnion<readonly [z.ZodEnum<{
    high: "high";
    low: "low";
    max: "max";
    medium: "medium";
    minimal: "minimal";
    xhigh: "xhigh";
}>, z.ZodString]>;
export type ReasoningEffort = z.infer<typeof ReasoningEffortSchema>;
//# sourceMappingURL=effort.d.ts.map