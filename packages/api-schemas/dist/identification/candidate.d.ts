import { z } from "zod/v4";
/**
 * One existing record considered as the subject.
 *
 * @openapiSchema IdentificationCandidate
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSchema
 * @contractShape identification.candidate
 * @contractRole canonical
 */
export declare const IdentificationCandidateSchema: z.ZodObject<{
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    record: z.ZodType<{
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
    }, unknown>>;
}, z.core.$strip>;
export type IdentificationCandidate = z.infer<typeof IdentificationCandidateSchema>;
//# sourceMappingURL=candidate.d.ts.map