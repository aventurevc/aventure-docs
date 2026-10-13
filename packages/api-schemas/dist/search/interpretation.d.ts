import { z } from "zod/v4";
declare const SearchInterpretationSchemaDefinition: z.ZodObject<{
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    execution: z.ZodType<{
        modeRequested: string;
        modeUsed: string;
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: string;
        modeUsed: string;
    }, unknown>>;
    fallbackUsed: z.ZodBoolean;
    filter: z.ZodType<{
        acceleratorBrand?: string[] | undefined;
        acceleratorCohort?: string[] | undefined;
        acceleratorName?: string[] | undefined;
        acceleratorStatus?: string[] | undefined;
        affinity?: string[] | undefined;
        closedLast?: boolean | undefined;
        employeeCountRange?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        }[] | undefined;
        entityId?: string[] | undefined;
        entityName?: string[] | undefined;
        featured?: boolean | null | undefined;
        fundraiseActivity?: {
            amountInvestedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            amountRaisedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            dateAnnouncedRange?: {
                max?: string | null | undefined;
                min?: string | null | undefined;
            } | null | undefined;
            investedCompanyName?: string[] | undefined;
            investedCountry?: string[] | undefined;
            investedIndustry?: string[] | undefined;
            investedRound?: string[] | undefined;
            investorActivity?: {
                averageAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                largestAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                smallestAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                totalAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                totalInvestmentRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
            } | undefined;
            investorName?: string[] | undefined;
            lastRoundYearRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            rankByInvestmentActivity?: boolean | null | undefined;
            round?: string[] | undefined;
            totalRaisedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            valuationRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
        } | undefined;
        hasFundraising?: boolean | null | undefined;
        headquartersCity?: string[] | undefined;
        headquartersCountry?: string[] | undefined;
        headquartersState?: string[] | undefined;
        industry?: string[] | undefined;
        letter?: string | null | undefined;
        location?: string[] | undefined;
        logoOption?: {
            sortPriority?: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST" | undefined;
        } | undefined;
        mainProduct?: string[] | undefined;
        operatingStatus?: ("Acquired" | "Acquired Subsidiary" | "Closed" | "Closed (Acquihire)" | "Inactive" | "Operating")[] | undefined;
        person?: string[] | undefined;
        portfolioHeadquartersCity?: string[] | undefined;
        portfolioHeadquartersCountry?: string[] | undefined;
        portfolioHeadquartersState?: string[] | undefined;
        qualityGate?: "COMPANY_LISTING_READY" | "NONE" | undefined;
        semanticQuery?: string | null | undefined;
        slug?: string[] | undefined;
        stage?: string[] | undefined;
        suppressNonOperating?: boolean | null | undefined;
        suppressZeroTotalRaised?: boolean | null | undefined;
        tag?: string[] | undefined;
        textSearch?: string | null | undefined;
        typeCustomer?: string[] | undefined;
        typeModel?: string[] | undefined;
        typeOwnership?: string[] | undefined;
        typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | undefined;
        typeRevenue?: string[] | undefined;
        typeTechnologyUsed?: string[] | undefined;
        url?: string | null | undefined;
        urlDomain?: string | null | undefined;
        urlMatchMode?: "domain" | "hostPath" | null | undefined;
        urlType?: string | null | undefined;
        yearFoundedRange?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        }[] | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        acceleratorBrand?: string[] | undefined;
        acceleratorCohort?: string[] | undefined;
        acceleratorName?: string[] | undefined;
        acceleratorStatus?: string[] | undefined;
        affinity?: string[] | undefined;
        closedLast?: boolean | undefined;
        employeeCountRange?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        }[] | undefined;
        entityId?: string[] | undefined;
        entityName?: string[] | undefined;
        featured?: boolean | null | undefined;
        fundraiseActivity?: {
            amountInvestedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            amountRaisedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            dateAnnouncedRange?: {
                max?: string | null | undefined;
                min?: string | null | undefined;
            } | null | undefined;
            investedCompanyName?: string[] | undefined;
            investedCountry?: string[] | undefined;
            investedIndustry?: string[] | undefined;
            investedRound?: string[] | undefined;
            investorActivity?: {
                averageAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                largestAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                smallestAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                totalAmountInvestedUsdRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                totalInvestmentRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
            } | undefined;
            investorName?: string[] | undefined;
            lastRoundYearRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            rankByInvestmentActivity?: boolean | null | undefined;
            round?: string[] | undefined;
            totalRaisedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
            valuationRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
        } | undefined;
        hasFundraising?: boolean | null | undefined;
        headquartersCity?: string[] | undefined;
        headquartersCountry?: string[] | undefined;
        headquartersState?: string[] | undefined;
        industry?: string[] | undefined;
        letter?: string | null | undefined;
        location?: string[] | undefined;
        logoOption?: {
            sortPriority?: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST" | undefined;
        } | undefined;
        mainProduct?: string[] | undefined;
        operatingStatus?: ("Acquired" | "Acquired Subsidiary" | "Closed" | "Closed (Acquihire)" | "Inactive" | "Operating")[] | undefined;
        person?: string[] | undefined;
        portfolioHeadquartersCity?: string[] | undefined;
        portfolioHeadquartersCountry?: string[] | undefined;
        portfolioHeadquartersState?: string[] | undefined;
        qualityGate?: "COMPANY_LISTING_READY" | "NONE" | undefined;
        semanticQuery?: string | null | undefined;
        slug?: string[] | undefined;
        stage?: string[] | undefined;
        suppressNonOperating?: boolean | null | undefined;
        suppressZeroTotalRaised?: boolean | null | undefined;
        tag?: string[] | undefined;
        textSearch?: string | null | undefined;
        typeCustomer?: string[] | undefined;
        typeModel?: string[] | undefined;
        typeOwnership?: string[] | undefined;
        typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | undefined;
        typeRevenue?: string[] | undefined;
        typeTechnologyUsed?: string[] | undefined;
        url?: string | null | undefined;
        urlDomain?: string | null | undefined;
        urlMatchMode?: "domain" | "hostPath" | null | undefined;
        urlType?: string | null | undefined;
        yearFoundedRange?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        }[] | undefined;
    }, unknown>>;
    intent: z.ZodEnum<{
        comparison: "comparison";
        discovery: "discovery";
        peer: "peer";
        profile: "profile";
    }>;
    interpretation: z.ZodString;
    sort: z.ZodType<{
        order: {
            descending: boolean;
            field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "RECENT_INVESTMENT_AT" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
            sortKey?: string | null | undefined;
        }[];
        relevance?: "keyword" | "semantic" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        order: {
            descending: boolean;
            field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "RECENT_INVESTMENT_AT" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
            sortKey?: string | null | undefined;
        }[];
        relevance?: "keyword" | "semantic" | null | undefined;
    }, unknown>>;
    subjectEntityName: z.ZodArray<z.ZodString>;
    unsupported: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchInterpretationDefinition = z.infer<typeof SearchInterpretationSchemaDefinition>;
/**
 * Structured interpretation of a natural-language entity search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate.
 *
 * @openapiSchema SearchInterpretation
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.interpretation
 * @contractRole canonical
 */
export declare const SearchInterpretationSchema: z.ZodType<SearchInterpretationDefinition>;
export type SearchInterpretation = z.infer<typeof SearchInterpretationSchema>;
export {};
//# sourceMappingURL=interpretation.d.ts.map