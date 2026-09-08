import { z } from "zod/v4";
declare const StageFrequencySchemaDefinition: z.ZodObject<{
    count: z.ZodInt;
    stage: z.ZodString;
}, z.core.$strip>;
type StageFrequencyDefinition = z.infer<typeof StageFrequencySchemaDefinition>;
/**
 * Canonical equity stage derived from a transaction calculatedRoundLabel, with deal frequency ranked by count descending.
 *
 * @openapiSchema StageFrequency
 * @endpoint GET /v1/entities/detail/investor-activity
 * @endpoint GET /v1/people/detail/investor-activity
 * @usedBySchema EntityFundraiseInvestorActivitySchema
 * @contractShape stage.frequency
 * @contractRole canonical
 */
export declare const StageFrequencySchema: z.ZodType<StageFrequencyDefinition>;
export type StageFrequency = z.infer<typeof StageFrequencySchema>;
export {};
//# sourceMappingURL=frequency.d.ts.map