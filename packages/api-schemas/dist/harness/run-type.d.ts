import { z } from "zod/v4";
/**
 * Research run kind: a caller-filed research request or a narrower scheduled run
 *
 * @openapiSchema HarnessRunType
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-type
 * @contractRole canonical
 */
export declare const HarnessRunTypeSchema: z.ZodEnum<{
    ENRICHMENT: "ENRICHMENT";
    TASK: "TASK";
}>;
export type HarnessRunType = z.infer<typeof HarnessRunTypeSchema>;
//# sourceMappingURL=run-type.d.ts.map