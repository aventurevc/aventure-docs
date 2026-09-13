import { z } from "zod/v4";
/**
 * Owning API environment
 *
 * @openapiSchema HarnessRunEnvironment
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
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