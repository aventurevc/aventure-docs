import { z } from "zod/v4";
/**
 * Owning API environment
 *
 * @openapiSchema HarnessRunEnvironment
 * @endpoint GET /v1/research-runs
 * @endpoint GET /v1/research-runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @endpoint POST /v1/research-runs
 * @usedBySchema HarnessRunSchema
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