import { z } from "zod/v4";
/**
 * The original search request and the interpretation the reader wants checked.
 *
 * @openapiSchema ResearchRunSearchContext
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunCreateSchema
 * @contractShape research.run-search-context
 * @contractRole canonical
 */
export declare const ResearchRunSearchContextSchema: z.ZodObject<{
    interpretation: z.ZodType<{
        confidence: "HIGH" | "LOW" | "MEDIUM";
        execution: {
            modeRequested: string;
            modeUsed: string;
        };
        fallbackUsed: boolean;
        filter: {
            acceleratorBrand?: string[] | undefined;
            acceleratorCohort?: string[] | undefined;
            acceleratorName?: string[] | undefined;
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
            semanticQuery?: string | null | undefined;
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
        intent: "comparison" | "discovery" | "peer" | "profile";
        interpretation: string;
        personAssociation?: {
            additionalAssociation?: {
                entityFilter?: {
                    acceleratorBrand?: string[] | undefined;
                    acceleratorCohort?: string[] | undefined;
                    acceleratorName?: string[] | undefined;
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
                } | null | undefined;
                isCurrent?: boolean | null | undefined;
                personTitle?: string[] | undefined;
            } | null | undefined;
            arrayFilter?: {
                amountInvestedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | null | undefined;
                amountRaisedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | null | undefined;
                entityName?: string[] | null | undefined;
                investedCompany?: string[] | null | undefined;
                personTitle?: string[] | null | undefined;
                round?: string[] | null | undefined;
                totalInvestmentCount?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | null | undefined;
                typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | null | undefined;
            } | undefined;
            entityFilter?: {
                acceleratorBrand?: string[] | undefined;
                acceleratorCohort?: string[] | undefined;
                acceleratorName?: string[] | undefined;
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
            } | undefined;
            entityId?: string | null | undefined;
            entitySlug?: string | null | undefined;
            firstName?: string | null | undefined;
            includeAddress?: boolean | null | undefined;
            includeUrl?: boolean | null | undefined;
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
            isCurrent?: boolean | null | undefined;
            lastName?: string | null | undefined;
            letter?: string | null | undefined;
            nameQuery?: string | null | undefined;
            personId?: string[] | undefined;
            personName?: string[] | undefined;
            rankByEmployer?: boolean | null | undefined;
            role?: string | null | undefined;
            search?: string | null | undefined;
            semanticQuery?: string | null | undefined;
            status?: string | null | undefined;
            tenure?: "ANY" | "CURRENT" | "PAST" | null | undefined;
        } | null | undefined;
        sort: {
            order: {
                descending: boolean;
                field: string;
                sortKey?: string | null | undefined;
            }[];
            relevance?: "keyword" | "semantic" | null | undefined;
        };
        subjectEntityName: string[];
        unsupported?: string | null | undefined;
    }, import("../search/interpretation.ts").SearchInterpretationSchemaInput, z.core.$ZodTypeInternals<{
        confidence: "HIGH" | "LOW" | "MEDIUM";
        execution: {
            modeRequested: string;
            modeUsed: string;
        };
        fallbackUsed: boolean;
        filter: {
            acceleratorBrand?: string[] | undefined;
            acceleratorCohort?: string[] | undefined;
            acceleratorName?: string[] | undefined;
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
            semanticQuery?: string | null | undefined;
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
        intent: "comparison" | "discovery" | "peer" | "profile";
        interpretation: string;
        personAssociation?: {
            additionalAssociation?: {
                entityFilter?: {
                    acceleratorBrand?: string[] | undefined;
                    acceleratorCohort?: string[] | undefined;
                    acceleratorName?: string[] | undefined;
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
                } | null | undefined;
                isCurrent?: boolean | null | undefined;
                personTitle?: string[] | undefined;
            } | null | undefined;
            arrayFilter?: {
                amountInvestedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | null | undefined;
                amountRaisedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | null | undefined;
                entityName?: string[] | null | undefined;
                investedCompany?: string[] | null | undefined;
                personTitle?: string[] | null | undefined;
                round?: string[] | null | undefined;
                totalInvestmentCount?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | null | undefined;
                typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | null | undefined;
            } | undefined;
            entityFilter?: {
                acceleratorBrand?: string[] | undefined;
                acceleratorCohort?: string[] | undefined;
                acceleratorName?: string[] | undefined;
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
            } | undefined;
            entityId?: string | null | undefined;
            entitySlug?: string | null | undefined;
            firstName?: string | null | undefined;
            includeAddress?: boolean | null | undefined;
            includeUrl?: boolean | null | undefined;
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
            isCurrent?: boolean | null | undefined;
            lastName?: string | null | undefined;
            letter?: string | null | undefined;
            nameQuery?: string | null | undefined;
            personId?: string[] | undefined;
            personName?: string[] | undefined;
            rankByEmployer?: boolean | null | undefined;
            role?: string | null | undefined;
            search?: string | null | undefined;
            semanticQuery?: string | null | undefined;
            status?: string | null | undefined;
            tenure?: "ANY" | "CURRENT" | "PAST" | null | undefined;
        } | null | undefined;
        sort: {
            order: {
                descending: boolean;
                field: string;
                sortKey?: string | null | undefined;
            }[];
            relevance?: "keyword" | "semantic" | null | undefined;
        };
        subjectEntityName: string[];
        unsupported?: string | null | undefined;
    }, import("../search/interpretation.ts").SearchInterpretationSchemaInput>>;
    search: z.ZodType<{
        answerModel?: string | null | undefined;
        cacheMode?: "bypass" | "refresh" | "use" | undefined;
        freshness?: "auto" | "cached" | undefined;
        mode?: string | undefined;
        model?: string | null | undefined;
        query: string;
        reasoningEffort?: string | null | undefined;
    }, import("../natural/search.ts").NaturalSearchSchemaInput, z.core.$ZodTypeInternals<{
        answerModel?: string | null | undefined;
        cacheMode?: "bypass" | "refresh" | "use" | undefined;
        freshness?: "auto" | "cached" | undefined;
        mode?: string | undefined;
        model?: string | null | undefined;
        query: string;
        reasoningEffort?: string | null | undefined;
    }, import("../natural/search.ts").NaturalSearchSchemaInput>>;
}, z.core.$strip>;
export type ResearchRunSearchContext = z.infer<typeof ResearchRunSearchContextSchema>;
//# sourceMappingURL=run-search-context.d.ts.map