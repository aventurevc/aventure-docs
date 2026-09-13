import { z } from "zod/v4";
/**
 * Harness run kind: full enrichment loop or bounded micro-task
 *
 * @openapiSchema HarnessRunType
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
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