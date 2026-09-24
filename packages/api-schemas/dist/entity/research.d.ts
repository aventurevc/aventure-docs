import { z } from "zod/v4";
declare const EntityResearchSchemaDefinition: z.ZodObject<{
    acceleratorParticipation: z.ZodArray<z.ZodType<{
        accelerator: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        acceleratorName: string;
        asOfDate: string;
        batch?: string | null | undefined;
        id: string;
        program?: string | null | undefined;
        status?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        accelerator: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        acceleratorName: string;
        asOfDate: string;
        batch?: string | null | undefined;
        id: string;
        program?: string | null | undefined;
        status?: string | null | undefined;
    }, unknown>>>;
    detail: z.ZodArray<z.ZodType<{
        asOfDate?: string | null | undefined;
        derivedRange?: {
            asOfDate: string;
            bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
            monthsFromNow: number;
            targetDate: string;
        } | null | undefined;
        discreteValue?: number | null | undefined;
        entityId: string;
        id: number;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        updatedAt?: string | null | undefined;
        valueResearchDetail?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, unknown, z.core.$ZodTypeInternals<{
        asOfDate?: string | null | undefined;
        derivedRange?: {
            asOfDate: string;
            bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
            monthsFromNow: number;
            targetDate: string;
        } | null | undefined;
        discreteValue?: number | null | undefined;
        entityId: string;
        id: number;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        updatedAt?: string | null | undefined;
        valueResearchDetail?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, unknown>>>;
    snippet: z.ZodArray<z.ZodObject<{
        compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            characterCount: z.ZodInt;
            meetsRequirements: z.ZodBoolean;
            violation: z.ZodArray<z.ZodString>;
            wordCount: z.ZodInt;
        }, z.core.$strip>>>;
        entityId: z.ZodUUID;
        id: z.ZodInt;
        text: z.ZodString;
        textType: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
type EntityResearchDefinition = z.infer<typeof EntityResearchSchemaDefinition>;
/**
 * Combined entity research disclosure: governed detail rows, research text snippets, and joined accelerator participation.
 *
 * @openapiSchema EntityResearch
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/search
 * @usedBySchema EntityDetailSchema
 * @contractShape entity.research
 * @contractRole canonical
 */
export declare const EntityResearchSchema: z.ZodType<EntityResearchDefinition>;
export type EntityResearch = z.infer<typeof EntityResearchSchema>;
export {};
//# sourceMappingURL=research.d.ts.map