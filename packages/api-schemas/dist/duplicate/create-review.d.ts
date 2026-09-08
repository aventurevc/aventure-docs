import { z } from "zod/v4";
declare const DuplicateCreateReviewSchemaDefinition: z.ZodObject<{
    candidate: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown>>>>>;
    newsCandidate: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodInt;
        reason: z.ZodArray<z.ZodString>;
        score: z.ZodInt;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    overridePath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    threshold: z.ZodInt;
}, z.core.$strip>;
type DuplicateCreateReviewDefinition = z.infer<typeof DuplicateCreateReviewSchemaDefinition>;
/**
 * Candidate-review conflict details returned in ProblemDetail.details for create gates and deterministic lookup ambiguity. The returned candidates are the decision surface: update the matching candidate, create with duplicate override only when every candidate is distinct from the source-backed target, or block when identity is unresolved. score and threshold rank review priority; they are not proof that the requested record is absent.
 *
 * @openapiSchema DuplicateCreateReview
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape duplicate.create-review
 * @contractRole canonical
 */
export declare const DuplicateCreateReviewSchema: z.ZodType<DuplicateCreateReviewDefinition>;
export type DuplicateCreateReview = z.infer<typeof DuplicateCreateReviewSchema>;
export {};
//# sourceMappingURL=create-review.d.ts.map