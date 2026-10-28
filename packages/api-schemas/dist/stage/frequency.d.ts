import { z } from "zod/v4";
declare const StageFrequencySchemaDefinition: z.ZodObject<{
    count: z.ZodInt;
    stage: z.ZodString;
}, z.core.$strip>;
type StageFrequencyDefinition = z.infer<typeof StageFrequencySchemaDefinition>;
export interface StageFrequencySchemaInput extends z.input<typeof StageFrequencySchemaDefinition> {
}
/**
 * Canonical equity stage derived from a transaction calculatedRoundLabel, with deal frequency ranked by count descending.
 *
 * @openapiSchema StageFrequency
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseInvestorActivitySchema
 * @contractShape stage.frequency
 * @contractRole canonical
 */
export declare const StageFrequencySchema: z.ZodType<StageFrequencyDefinition, StageFrequencySchemaInput>;
export type StageFrequency = z.infer<typeof StageFrequencySchema>;
export {};
//# sourceMappingURL=frequency.d.ts.map