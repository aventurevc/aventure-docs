import { z } from "zod/v4";
declare const LookupJobMentionSchemaDefinition: z.ZodObject<{
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    identification: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        candidate: z.ZodArray<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>;
        detail: z.ZodString;
        duplicate: z.ZodArray<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>;
        match: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>>;
        matchConfidence: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        matchEvidenceProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        officialUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stage: z.ZodEnum<{
            DETERMINISTIC: "DETERMINISTIC";
            JUDGMENT: "JUDGMENT";
            WEB_EVIDENCE: "WEB_EVIDENCE";
        }>;
        status: z.ZodEnum<{
            MATCHED: "MATCHED";
            NEEDS_REVIEW: "NEEDS_REVIEW";
            NO_MATCH: "NO_MATCH";
        }>;
    }, z.core.$strip>>>;
    mentionType: z.ZodEnum<{
        COMPANY: "COMPANY";
        PERSON: "PERSON";
    }>;
    name: z.ZodString;
    shell: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    shellDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LookupJobMentionDefinition = z.infer<typeof LookupJobMentionSchemaDefinition>;
/**
 * One company or person the article names, which stored record it is, and the hidden shell record filed for it when it is new.
 *
 * @openapiSchema LookupJobMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @usedBySchema LookupJobSchema
 * @contractShape lookup.job-mention
 * @contractRole canonical
 */
export declare const LookupJobMentionSchema: z.ZodType<LookupJobMentionDefinition>;
export type LookupJobMention = z.infer<typeof LookupJobMentionSchema>;
export {};
//# sourceMappingURL=job-mention.d.ts.map