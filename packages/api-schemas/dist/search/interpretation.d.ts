import { z } from "zod/v4";
declare const SearchInterpretationSchemaDefinition: z.ZodObject<{
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    execution: z.ZodType<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown>>;
    fallbackUsed: z.ZodBoolean;
    filter: z.ZodType<{
        acceleratorBrand?: string[] | undefined;
        acceleratorCohort?: string[] | undefined;
        acceleratorName?: string[] | undefined;
        acceleratorStatus?: string[] | undefined;
        affinity?: string[] | undefined;
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
            investedCompanyName?: string[] | undefined;
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
            lastRoundYearRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
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
            sortPriority: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST";
        } | undefined;
        mainProduct?: string[] | undefined;
        operatingStatus?: string[] | undefined;
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
        urlMatchMode?: "domain" | "hostPath" | undefined;
        urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
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
            investedCompanyName?: string[] | undefined;
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
            lastRoundYearRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
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
            sortPriority: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST";
        } | undefined;
        mainProduct?: string[] | undefined;
        operatingStatus?: string[] | undefined;
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
        urlMatchMode?: "domain" | "hostPath" | undefined;
        urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
        yearFoundedRange?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        }[] | undefined;
    }, unknown>>;
    interpretation: z.ZodString;
    sort: z.ZodType<{
        order: {
            descending: boolean;
            field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
        }[];
        relevance?: "keyword" | "semantic" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        order: {
            descending: boolean;
            field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
        }[];
        relevance?: "keyword" | "semantic" | null | undefined;
    }, unknown>>;
    unsupported: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchInterpretationDefinition = z.infer<typeof SearchInterpretationSchemaDefinition>;
/**
 * Structured interpretation of a natural-language entity search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate.
 *
 * @openapiSchema SearchInterpretation
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.interpretation
 * @contractRole canonical
 */
export declare const SearchInterpretationSchema: z.ZodType<SearchInterpretationDefinition>;
export type SearchInterpretation = z.infer<typeof SearchInterpretationSchema>;
export {};
//# sourceMappingURL=interpretation.d.ts.map