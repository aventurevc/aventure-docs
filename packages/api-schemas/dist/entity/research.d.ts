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
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
            typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
            updatedAt?: string | null | undefined;
        };
        acceleratorName: string;
        asOfDate: string;
        batch?: string | null | undefined;
        id: string;
        program?: string | null | undefined;
        publicUrl?: string | null | undefined;
        status?: string | null | undefined;
    }, import("./accelerator-participation.ts").EntityAcceleratorParticipationSchemaInput, z.core.$ZodTypeInternals<{
        accelerator: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
            typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
            updatedAt?: string | null | undefined;
        };
        acceleratorName: string;
        asOfDate: string;
        batch?: string | null | undefined;
        id: string;
        program?: string | null | undefined;
        publicUrl?: string | null | undefined;
        status?: string | null | undefined;
    }, import("./accelerator-participation.ts").EntityAcceleratorParticipationSchemaInput>>>;
    detail: z.ZodArray<z.ZodType<{
        asOfDate?: string | null | undefined;
        currentEligible?: boolean | null | undefined;
        decimalValue?: string | null | undefined;
        derivedRange?: {
            asOfDate: string;
            bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
            monthsFromNow: number;
            targetDate: string;
        } | null | undefined;
        discreteValue?: number | null | undefined;
        entityId: string;
        id: number;
        measurementBasis?: string | null | undefined;
        publicSource?: {
            lastFetchedAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            recordedAt: string;
            sourceDetail: string;
        } | null | undefined;
        reportingScope?: string | null | undefined;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        updatedAt?: string | null | undefined;
        valueResearchDetail?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, import("./research-detail.ts").EntityResearchDetailSchemaInput, z.core.$ZodTypeInternals<{
        asOfDate?: string | null | undefined;
        currentEligible?: boolean | null | undefined;
        decimalValue?: string | null | undefined;
        derivedRange?: {
            asOfDate: string;
            bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
            monthsFromNow: number;
            targetDate: string;
        } | null | undefined;
        discreteValue?: number | null | undefined;
        entityId: string;
        id: number;
        measurementBasis?: string | null | undefined;
        publicSource?: {
            lastFetchedAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            recordedAt: string;
            sourceDetail: string;
        } | null | undefined;
        reportingScope?: string | null | undefined;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        updatedAt?: string | null | undefined;
        valueResearchDetail?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, import("./research-detail.ts").EntityResearchDetailSchemaInput>>>;
    financial: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        currency: string | null;
        entityId: string;
        functionalCurrency: string | null;
        id: number;
        period: string;
        revenue: string | null;
        year: number;
    }, import("./financial.ts").EntityFinancialSchemaInput, z.core.$ZodTypeInternals<{
        currency: string | null;
        entityId: string;
        functionalCurrency: string | null;
        id: number;
        period: string;
        revenue: string | null;
        year: number;
    }, import("./financial.ts").EntityFinancialSchemaInput>>>>>;
    marketMultiple: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        peerGroup: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            asOfDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
            computedAt: z.ZodISODateTime;
            ebitdaMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            evToEbit: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            evToEbitda: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            evToFreeCashFlow: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            evToGrossProfit: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            evToRevenue: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            freeCashFlowMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            grossMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            netMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            operatingMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            peerCount: z.ZodInt;
            priceToEarnings: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            revenueGrowthYoy: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                sampleCount: z.ZodInt;
            }, z.core.$strip>>>;
            selfIncluded: z.ZodBoolean;
            valuedPeerCount: z.ZodInt;
        }, z.core.$strip>>>;
        valuation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            cashAndShortTermInvestmentsUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            closePriceUsd: z.ZodNumber;
            computedAt: z.ZodISODateTime;
            ebitdaMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            enterpriseValueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            evToEbit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            evToEbitda: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            evToFreeCashFlow: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            evToGrossProfit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            evToRevenue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            exchange: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            freeCashFlowMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            grossMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmEbitdaUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmEbitUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmFreeCashFlowUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmGrossProfitUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmNetIncomeUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmOperatingCashFlowUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ltmRevenueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            marketCapUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            netDebtUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            netMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            operatingMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            priceDate: z.ZodISODate;
            priceSource: z.ZodString;
            priceStatus: z.ZodString;
            priceToEarnings: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            revenueGrowthYoy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sharesOutstanding: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ticker: z.ZodString;
            totalDebtUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    snippet: z.ZodArray<z.ZodObject<{
        compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            characterCount: z.ZodInt;
            meetsRequirements: z.ZodBoolean;
            violation: z.ZodArray<z.ZodString>;
            wordCount: z.ZodInt;
        }, z.core.$strip>>>;
        entityId: z.ZodUUID;
        id: z.ZodInt;
        isCurrent: z.ZodOptional<z.ZodBoolean>;
        isPrimary: z.ZodOptional<z.ZodBoolean>;
        publicSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            recordedAt: z.ZodISODateTime;
            sourceDetail: z.ZodString;
        }, z.core.$strip>>>;
        text: z.ZodString;
        textType: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        visible: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
type EntityResearchDefinition = z.infer<typeof EntityResearchSchemaDefinition>;
export interface EntityResearchSchemaInput extends z.input<typeof EntityResearchSchemaDefinition> {
}
/**
 * Research findings for an entity: structured research details, written research snippets, and accelerator participation.
 *
 * @openapiSchema EntityResearch
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @contractShape entity.research
 * @contractRole canonical
 */
export declare const EntityResearchSchema: z.ZodType<EntityResearchDefinition, EntityResearchSchemaInput>;
export type EntityResearch = z.infer<typeof EntityResearchSchema>;
export {};
//# sourceMappingURL=research.d.ts.map