import { z } from "zod/v4";
declare const IdentificationSchemaDefinition: z.ZodObject<{
    candidate: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    detail: z.ZodString;
    duplicate: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    match: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
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
}, z.core.$strip>;
type IdentificationDefinition = z.infer<typeof IdentificationSchemaDefinition>;
/**
 * Which existing company or person record a subject is, how that was settled, and the candidates considered, most probable first.
 *
 * @openapiSchema Identification
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/people/lookup
 * @contractShape identification.identification
 * @contractRole canonical
 */
export declare const IdentificationSchema: z.ZodType<IdentificationDefinition>;
export type Identification = z.infer<typeof IdentificationSchema>;
export {};
//# sourceMappingURL=identification.d.ts.map