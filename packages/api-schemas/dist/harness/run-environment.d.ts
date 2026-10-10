import { z } from "zod/v4";
/**
 * Owning API environment
 *
 * @openapiSchema HarnessRunEnvironment
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/harness/runs
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/web/search
 * @usedBySchema HarnessRunSchema
 * @usedBySchema SearchSchema
 * @contractShape harness.run-environment
 * @contractRole canonical
 */
export declare const HarnessRunEnvironmentSchema: z.ZodEnum<{
    development: "development";
    production: "production";
    staging: "staging";
    unassigned: "unassigned";
}>;
export type HarnessRunEnvironment = z.infer<typeof HarnessRunEnvironmentSchema>;
//# sourceMappingURL=run-environment.d.ts.map