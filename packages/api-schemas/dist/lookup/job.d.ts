import { z } from "zod/v4";
declare const LookupJobSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    jobId: z.ZodUUID;
    mention: z.ZodArray<z.ZodType<{
        failureReason?: string | null | undefined;
        identification?: {
            candidate: {
                dataCompletionCoverage?: number | null | undefined;
                duplicateBasis?: "JUDGED" | "SHARED_FACT" | "STUB" | null | undefined;
                duplicateProbability?: number | null | undefined;
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                probability?: number | null | undefined;
                record: {
                    externalId?: string | null | undefined;
                    id: string;
                    name?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicPath?: string | null | undefined;
                    reason: string[];
                    score: number;
                    slug?: string | null | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                };
                updatedAt?: string | null | undefined;
            }[];
            detail: string;
            duplicate: {
                dataCompletionCoverage?: number | null | undefined;
                duplicateBasis?: "JUDGED" | "SHARED_FACT" | "STUB" | null | undefined;
                duplicateProbability?: number | null | undefined;
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                probability?: number | null | undefined;
                record: {
                    externalId?: string | null | undefined;
                    id: string;
                    name?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicPath?: string | null | undefined;
                    reason: string[];
                    score: number;
                    slug?: string | null | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                };
                updatedAt?: string | null | undefined;
            }[];
            match?: {
                dataCompletionCoverage?: number | null | undefined;
                duplicateBasis?: "JUDGED" | "SHARED_FACT" | "STUB" | null | undefined;
                duplicateProbability?: number | null | undefined;
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                probability?: number | null | undefined;
                record: {
                    externalId?: string | null | undefined;
                    id: string;
                    name?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicPath?: string | null | undefined;
                    reason: string[];
                    score: number;
                    slug?: string | null | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                };
                updatedAt?: string | null | undefined;
            } | null | undefined;
            matchConfidence?: number | null | undefined;
            matchEvidenceProbability?: number | null | undefined;
            officialUrl?: string | null | undefined;
            stage: "DETERMINISTIC" | "JUDGMENT" | "WEB_EVIDENCE";
            status: "MATCHED" | "NEEDS_REVIEW" | "NO_MATCH";
        } | null | undefined;
        mentionType: "COMPANY" | "PERSON";
        name: string;
        shell?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        shellDetail?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        failureReason?: string | null | undefined;
        identification?: {
            candidate: {
                dataCompletionCoverage?: number | null | undefined;
                duplicateBasis?: "JUDGED" | "SHARED_FACT" | "STUB" | null | undefined;
                duplicateProbability?: number | null | undefined;
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                probability?: number | null | undefined;
                record: {
                    externalId?: string | null | undefined;
                    id: string;
                    name?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicPath?: string | null | undefined;
                    reason: string[];
                    score: number;
                    slug?: string | null | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                };
                updatedAt?: string | null | undefined;
            }[];
            detail: string;
            duplicate: {
                dataCompletionCoverage?: number | null | undefined;
                duplicateBasis?: "JUDGED" | "SHARED_FACT" | "STUB" | null | undefined;
                duplicateProbability?: number | null | undefined;
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                probability?: number | null | undefined;
                record: {
                    externalId?: string | null | undefined;
                    id: string;
                    name?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicPath?: string | null | undefined;
                    reason: string[];
                    score: number;
                    slug?: string | null | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                };
                updatedAt?: string | null | undefined;
            }[];
            match?: {
                dataCompletionCoverage?: number | null | undefined;
                duplicateBasis?: "JUDGED" | "SHARED_FACT" | "STUB" | null | undefined;
                duplicateProbability?: number | null | undefined;
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                probability?: number | null | undefined;
                record: {
                    externalId?: string | null | undefined;
                    id: string;
                    name?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicPath?: string | null | undefined;
                    reason: string[];
                    score: number;
                    slug?: string | null | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                };
                updatedAt?: string | null | undefined;
            } | null | undefined;
            matchConfidence?: number | null | undefined;
            matchEvidenceProbability?: number | null | undefined;
            officialUrl?: string | null | undefined;
            stage: "DETERMINISTIC" | "JUDGMENT" | "WEB_EVIDENCE";
            status: "MATCHED" | "NEEDS_REVIEW" | "NO_MATCH";
        } | null | undefined;
        mentionType: "COMPANY" | "PERSON";
        name: string;
        shell?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        shellDetail?: string | null | undefined;
    }, unknown>>>;
    source: z.ZodType<{
        sourceNewsId?: number | null | undefined;
        sourceUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        sourceNewsId?: number | null | undefined;
        sourceUrl?: string | null | undefined;
    }, unknown>>;
    state: z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        RUNNING: "RUNNING";
        UNKNOWN: "UNKNOWN";
    }>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type LookupJobDefinition = z.infer<typeof LookupJobSchemaDefinition>;
/**
 * An async lookup job's state and, once COMPLETED, every company and person the article names, each identified against stored records.
 *
 * @openapiSchema LookupJob
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @contractShape lookup.job
 * @contractRole canonical
 */
export declare const LookupJobSchema: z.ZodType<LookupJobDefinition>;
export type LookupJob = z.infer<typeof LookupJobSchema>;
export {};
//# sourceMappingURL=job.d.ts.map