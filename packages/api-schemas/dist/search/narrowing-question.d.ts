import { z } from "zod/v4";
declare const SearchNarrowingQuestionSchemaDefinition: z.ZodObject<{
    dimension: z.ZodUnion<readonly [z.ZodEnum<{
        place: "place";
        size: "size";
        type: "type";
    }>, z.ZodString]> & {
        enum: {
            place: "place";
            size: "size";
            type: "type";
        };
    };
    key: z.ZodString;
    option: z.ZodArray<z.ZodType<{
        count: number;
        entityFilter: {
            acceleratorBrand?: string[] | undefined;
            acceleratorCohort?: string[] | undefined;
            acceleratorName?: string[] | undefined;
            acceleratorParticipation?: {
                acceleratorEntityId: string;
                detail: {
                    batch: string;
                    program?: string | null | undefined;
                };
            }[] | undefined;
            acceleratorStatus?: string[] | undefined;
            affinity?: string[] | undefined;
            closedLast?: boolean | undefined;
            employeeCountRange?: {
                matchMode?: string | null | undefined;
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
                dateFundingCompleteRange?: {
                    max?: string | null | undefined;
                    min?: string | null | undefined;
                } | null | undefined;
                investedAmountRaisedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
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
                investorEntityId?: string[] | undefined;
                investorFamilyEntityId?: string[] | undefined;
                investorName?: string[] | undefined;
                investorNameMatch?: "any" | "every" | null | undefined;
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
            investorPopulation?: boolean | null | undefined;
            letter?: string | null | undefined;
            location?: string[] | undefined;
            logoOption?: {
                sortPriority?: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST" | undefined;
            } | undefined;
            mainProduct?: string[] | undefined;
            noteworthyOnly?: boolean | undefined;
            operatingStatus?: ("Acquired" | "Acquired Subsidiary" | "Closed" | "Closed (Acquihire)" | "Inactive" | "Operating")[] | undefined;
            originCountry?: string[] | undefined;
            person?: string[] | undefined;
            portfolioHeadquartersCity?: string[] | undefined;
            portfolioHeadquartersCountry?: string[] | undefined;
            portfolioHeadquartersState?: string[] | undefined;
            qualityGate?: "COMPANY_LISTING_READY" | "NONE" | undefined;
            rankByProminence?: boolean | null | undefined;
            slug?: string[] | undefined;
            stage?: string[] | undefined;
            standardizedClassification?: {
                category: string;
                code?: number | null | undefined;
                codeText?: string | null | undefined;
                edition?: string | null | undefined;
                hasEdition?: boolean | null | undefined;
            }[] | undefined;
            suppressLateStage?: boolean | null | undefined;
            suppressNonOperating?: boolean | null | undefined;
            suppressZeroTotalRaised?: boolean | null | undefined;
            tag?: string[] | undefined;
            textSearch?: string | null | undefined;
            typeCustomer?: string[] | undefined;
            typeInvestor?: string[] | undefined;
            typeModel?: string[] | undefined;
            typeOwnership?: string[] | undefined;
            typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | undefined;
            typeRegulatory?: string[] | undefined;
            typeRevenue?: string[] | undefined;
            typeTechnologyUsed?: string[] | undefined;
            uniqueId?: {
                identifier?: string | null | undefined;
                idType: string;
            }[] | undefined;
            url?: string | null | undefined;
            urlDomain?: string | null | undefined;
            urlMatchMode?: "domain" | "hostPath" | null | undefined;
            urlType?: string | null | undefined;
            yearFoundedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
        };
        label: string;
        level?: string | null | undefined;
    }, import("./narrowing-option.ts").SearchNarrowingOptionSchemaInput, z.core.$ZodTypeInternals<{
        count: number;
        entityFilter: {
            acceleratorBrand?: string[] | undefined;
            acceleratorCohort?: string[] | undefined;
            acceleratorName?: string[] | undefined;
            acceleratorParticipation?: {
                acceleratorEntityId: string;
                detail: {
                    batch: string;
                    program?: string | null | undefined;
                };
            }[] | undefined;
            acceleratorStatus?: string[] | undefined;
            affinity?: string[] | undefined;
            closedLast?: boolean | undefined;
            employeeCountRange?: {
                matchMode?: string | null | undefined;
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
                dateFundingCompleteRange?: {
                    max?: string | null | undefined;
                    min?: string | null | undefined;
                } | null | undefined;
                investedAmountRaisedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
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
                investorEntityId?: string[] | undefined;
                investorFamilyEntityId?: string[] | undefined;
                investorName?: string[] | undefined;
                investorNameMatch?: "any" | "every" | null | undefined;
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
            investorPopulation?: boolean | null | undefined;
            letter?: string | null | undefined;
            location?: string[] | undefined;
            logoOption?: {
                sortPriority?: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST" | undefined;
            } | undefined;
            mainProduct?: string[] | undefined;
            noteworthyOnly?: boolean | undefined;
            operatingStatus?: ("Acquired" | "Acquired Subsidiary" | "Closed" | "Closed (Acquihire)" | "Inactive" | "Operating")[] | undefined;
            originCountry?: string[] | undefined;
            person?: string[] | undefined;
            portfolioHeadquartersCity?: string[] | undefined;
            portfolioHeadquartersCountry?: string[] | undefined;
            portfolioHeadquartersState?: string[] | undefined;
            qualityGate?: "COMPANY_LISTING_READY" | "NONE" | undefined;
            rankByProminence?: boolean | null | undefined;
            slug?: string[] | undefined;
            stage?: string[] | undefined;
            standardizedClassification?: {
                category: string;
                code?: number | null | undefined;
                codeText?: string | null | undefined;
                edition?: string | null | undefined;
                hasEdition?: boolean | null | undefined;
            }[] | undefined;
            suppressLateStage?: boolean | null | undefined;
            suppressNonOperating?: boolean | null | undefined;
            suppressZeroTotalRaised?: boolean | null | undefined;
            tag?: string[] | undefined;
            textSearch?: string | null | undefined;
            typeCustomer?: string[] | undefined;
            typeInvestor?: string[] | undefined;
            typeModel?: string[] | undefined;
            typeOwnership?: string[] | undefined;
            typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | undefined;
            typeRegulatory?: string[] | undefined;
            typeRevenue?: string[] | undefined;
            typeTechnologyUsed?: string[] | undefined;
            uniqueId?: {
                identifier?: string | null | undefined;
                idType: string;
            }[] | undefined;
            url?: string | null | undefined;
            urlDomain?: string | null | undefined;
            urlMatchMode?: "domain" | "hostPath" | null | undefined;
            urlType?: string | null | undefined;
            yearFoundedRange?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            }[] | undefined;
        };
        label: string;
        level?: string | null | undefined;
    }, import("./narrowing-option.ts").SearchNarrowingOptionSchemaInput>>>;
    prompt: z.ZodString;
}, z.core.$strip>;
type SearchNarrowingQuestionDefinition = z.infer<typeof SearchNarrowingQuestionSchemaDefinition>;
export interface SearchNarrowingQuestionSchemaInput extends z.input<typeof SearchNarrowingQuestionSchemaDefinition> {
}
/**
 * One narrowing question and its optional answers.
 *
 * @openapiSchema SearchNarrowingQuestion
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchNarrowingSchema
 * @contractShape search.narrowing-question
 * @contractRole canonical
 */
export declare const SearchNarrowingQuestionSchema: z.ZodType<SearchNarrowingQuestionDefinition, SearchNarrowingQuestionSchemaInput>;
export type SearchNarrowingQuestion = z.infer<typeof SearchNarrowingQuestionSchema>;
export {};
//# sourceMappingURL=narrowing-question.d.ts.map