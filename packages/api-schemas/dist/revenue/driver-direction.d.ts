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
export declare const RevenueDriverDirectionSchema: z.ZodEnum<{
    down: "down";
    up: "up";
}>;
export type RevenueDriverDirection = z.infer<typeof RevenueDriverDirectionSchema>;
//# sourceMappingURL=driver-direction.d.ts.map