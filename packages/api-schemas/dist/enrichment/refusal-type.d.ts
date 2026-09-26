import { z } from "zod/v4";
/**
 * Why a batch enrichment filed no run: NOT_FOUND for an unknown record; ALLOWANCE_EXHAUSTED when the record's company or person research allowance is spent and additional usage is off or at its spend cap or prepaid credit; AMBIGUOUS when the record's profile matches more than one current record; SUBSCRIPTION_REQUIRED when the subscription stopped covering research mid-batch, such as additional usage while past due
 *
 * @openapiSchema EnrichmentRefusalType
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentSchema
 * @contractShape enrichment.refusal-type
 * @contractRole canonical
 */
export declare const EnrichmentRefusalTypeSchema: z.ZodEnum<{
    ALLOWANCE_EXHAUSTED: "ALLOWANCE_EXHAUSTED";
    AMBIGUOUS: "AMBIGUOUS";
    NOT_FOUND: "NOT_FOUND";
    SUBSCRIPTION_REQUIRED: "SUBSCRIPTION_REQUIRED";
}>;
export type EnrichmentRefusalType = z.infer<typeof EnrichmentRefusalTypeSchema>;
//# sourceMappingURL=refusal-type.d.ts.map