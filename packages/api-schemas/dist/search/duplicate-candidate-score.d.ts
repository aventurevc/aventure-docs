import { z } from "zod/v4";
declare const SearchDuplicateCandidateScoreSchemaDefinition: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodArray<z.ZodString>;
    score: z.ZodInt;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
}, z.core.$strip>;
type SearchDuplicateCandidateScoreDefinition = z.infer<typeof SearchDuplicateCandidateScoreSchemaDefinition>;
/**
 * Duplicate candidate scoring result. Use id/name/slug/typeRecord/reason to decide whether the candidate is the requested record. score ranks review priority; it does not prove absence.
 *
 * @openapiSchema SearchDuplicateCandidateScore
 * @standardProblemResponse
 * @usedBySchema DuplicateCreateReviewSchema
 * @contractShape search.duplicate-candidate-score
 * @contractRole canonical
 */
export declare const SearchDuplicateCandidateScoreSchema: z.ZodType<SearchDuplicateCandidateScoreDefinition>;
export type SearchDuplicateCandidateScore = z.infer<typeof SearchDuplicateCandidateScoreSchema>;
export {};
//# sourceMappingURL=duplicate-candidate-score.d.ts.map