import { z } from "zod/v4";
declare const EntityListResearchSchemaDefinition: z.ZodObject<{
    acceleratorParticipation: z.ZodArray<z.ZodType<{
        accelerator: {
            createdAt?: string | null | undefined;
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
            createdAt?: string | null | undefined;
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
        createdAt?: string | null | undefined;
        creator?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
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
        createdAt?: string | null | undefined;
        creator?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
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
}, z.core.$strip>;
type EntityListResearchDefinition = z.infer<typeof EntityListResearchSchemaDefinition>;
/**
 * Nested research projection owned by EntityList rows, excluding snippet text.
 *
 * @openapiSchema EntityListResearch
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityListSchema
 * @contractShape entity.list-research
 * @contractRole canonical
 */
export declare const EntityListResearchSchema: z.ZodType<EntityListResearchDefinition>;
export type EntityListResearch = z.infer<typeof EntityListResearchSchema>;
export {};
//# sourceMappingURL=list-research.d.ts.map