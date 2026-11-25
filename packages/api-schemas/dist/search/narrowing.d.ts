import { z } from "zod/v4";
/**
 * Questions that narrow a broad company-category search, in display order. Each option is a structured EntityFilter fragment: merge its one field into FederatedNaturalSearch.entityFilter (replacing that field) and run the same query again; the answered dimension is then not asked and the next may be. Counts come from a bounded sample of the candidate set, not the whole directory.
 *
 * @openapiSchema SearchNarrowing
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape search.narrowing
 * @contractRole canonical
 */
export declare const SearchNarrowingSchema: z.ZodObject<{
    candidateCount: z.ZodNumber;
    question: z.ZodArray<z.ZodType<{
        dimension: string;
        key: string;
        option: {
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
        }[];
        prompt: string;
    }, import("./narrowing-question.ts").SearchNarrowingQuestionSchemaInput, z.core.$ZodTypeInternals<{
        dimension: string;
        key: string;
        option: {
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
        }[];
        prompt: string;
    }, import("./narrowing-question.ts").SearchNarrowingQuestionSchemaInput>>>;
    sampleCount: z.ZodInt;
}, z.core.$strip>;
export interface SearchNarrowingSchemaInput extends z.input<typeof SearchNarrowingSchema> {
}
export type SearchNarrowing = z.infer<typeof SearchNarrowingSchema>;
//# sourceMappingURL=narrowing.d.ts.map