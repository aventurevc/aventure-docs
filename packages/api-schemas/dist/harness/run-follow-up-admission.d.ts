import { z } from "zod/v4";
/**
 * Durable admission state for one terminal run generation's follow-up work
 *
 * @openapiSchema HarnessRunFollowUpAdmission
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research/runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint GET /v1/research/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunFollowUpSchema
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-follow-up-admission
 * @contractRole canonical
 */
export declare const HarnessRunFollowUpAdmissionSchema: z.ZodEnum<{
    PENDING: "PENDING";
    REJECTED: "REJECTED";
    SETTLED: "SETTLED";
    UNTRACKED: "UNTRACKED";
}>;
export type HarnessRunFollowUpAdmission = z.infer<typeof HarnessRunFollowUpAdmissionSchema>;
//# sourceMappingURL=run-follow-up-admission.d.ts.map