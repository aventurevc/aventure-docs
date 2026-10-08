import { z } from "zod/v4";
declare const NaturalSearchResultSchemaDefinition: z.ZodObject<{
    answer: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        citation: z.ZodArray<z.ZodType<{
            entityId: string;
            source: string;
            sourceId: string;
        }, unknown, z.core.$ZodTypeInternals<{
            entityId: string;
            source: string;
            sourceId: string;
        }, unknown>>>;
        confidence: z.ZodEnum<{
            HIGH: "HIGH";
            LOW: "LOW";
            MEDIUM: "MEDIUM";
        }>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        paragraph: z.ZodArray<z.ZodType<{
            citation: {
                entityId: string;
                source: string;
                sourceId: string;
            }[];
            text: string;
            topic?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            citation: {
                entityId: string;
                source: string;
                sourceId: string;
            }[];
            text: string;
            topic?: string | null | undefined;
        }, unknown>>>;
        relatedQuery: z.ZodArray<z.ZodString>;
        shareable: z.ZodBoolean;
        text: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
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
            rankByProminence?: boolean | null | undefined;
            semanticQuery?: string | null | undefined;
            slug?: string[] | undefined;
            stage?: string[] | undefined;
            suppressLateStage?: boolean | null | undefined;
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
        };
        intent: "comparison" | "discovery" | "peer" | "profile";
        interpretation: string;
        sort: {
            order: {
                descending: boolean;
                field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "RECENT_INVESTMENT_AT" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
                sortKey?: string | null | undefined;
            }[];
            relevance?: "keyword" | "semantic" | null | undefined;
        };
        subjectEntityName: string[];
        unsupported?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
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
            rankByProminence?: boolean | null | undefined;
            semanticQuery?: string | null | undefined;
            slug?: string[] | undefined;
            stage?: string[] | undefined;
            suppressLateStage?: boolean | null | undefined;
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
        };
        intent: "comparison" | "discovery" | "peer" | "profile";
        interpretation: string;
        sort: {
            order: {
                descending: boolean;
                field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "RECENT_INVESTMENT_AT" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
                sortKey?: string | null | undefined;
            }[];
            relevance?: "keyword" | "semantic" | null | undefined;
        };
        subjectEntityName: string[];
        unsupported?: string | null | undefined;
    }, unknown>>;
    investment: z.ZodArray<z.ZodType<{
        evidence: {
            fundManagerRelationshipSource?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            fundraiseTransaction: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        currency?: string | null | undefined;
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: string | null | undefined;
                        totalRaised: number;
                        totalRaisedUsd?: number | null | undefined;
                        unconvertedRoundCount: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            };
            fundraiseTransactionSource?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            investorJoinSource?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
        };
        investor: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceType: string;
        } | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        evidence: {
            fundManagerRelationshipSource?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            fundraiseTransaction: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        currency?: string | null | undefined;
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: string | null | undefined;
                        totalRaised: number;
                        totalRaisedUsd?: number | null | undefined;
                        unconvertedRoundCount: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            };
            fundraiseTransactionSource?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            investorJoinSource?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
        };
        investor: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceType: string;
        } | null | undefined;
    }, unknown>>>;
    judgment: z.ZodArray<z.ZodType<{
        entityId: string;
        matchedOffering?: {
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
            typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
            updatedAt?: string | null | undefined;
        } | null | undefined;
        probability: number;
        webUrl: string[];
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        matchedOffering?: {
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
            typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
            updatedAt?: string | null | undefined;
        } | null | undefined;
        probability: number;
        webUrl: string[];
    }, unknown>>>;
    passage: z.ZodArray<z.ZodType<{
        entityId: string;
        label: string;
        publishedAt?: string | null | undefined;
        score: number;
        source: string;
        sourceId: string;
        text: string;
        url?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        label: string;
        publishedAt?: string | null | undefined;
        score: number;
        source: string;
        sourceId: string;
        text: string;
        url?: string | null | undefined;
    }, unknown>>>;
    peer: z.ZodArray<z.ZodType<{
        entity: {
            core: {
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    currency?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedUsd?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: string;
                }[];
                urlLinkSuppressedCount: number;
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        currency?: string | null | undefined;
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: string | null | undefined;
                        totalRaised: number;
                        totalRaisedUsd?: number | null | undefined;
                        unconvertedRoundCount: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
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
                    publicSource?: {
                        lastFetchedAt?: string | null | undefined;
                        publishedAt?: string | null | undefined;
                        recordedAt: string;
                        sourceDetail: string;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
            };
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceType: string;
            } | null | undefined;
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            curatedAsOf?: string | null | undefined;
            curatedRelationshipType?: string | null | undefined;
            curatedSource?: string | null | undefined;
            derivedFromEntityId?: string | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "computed" | "curated" | "derived" | "precomputed" | "semantic";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            core: {
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    currency?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedUsd?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: string;
                }[];
                urlLinkSuppressedCount: number;
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        currency?: string | null | undefined;
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: string | null | undefined;
                        totalRaised: number;
                        totalRaisedUsd?: number | null | undefined;
                        unconvertedRoundCount: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
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
                    publicSource?: {
                        lastFetchedAt?: string | null | undefined;
                        publishedAt?: string | null | undefined;
                        recordedAt: string;
                        sourceDetail: string;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
            };
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceType: string;
            } | null | undefined;
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            curatedAsOf?: string | null | undefined;
            curatedRelationshipType?: string | null | undefined;
            curatedSource?: string | null | undefined;
            derivedFromEntityId?: string | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "computed" | "curated" | "derived" | "precomputed" | "semantic";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, unknown>>>;
    pendingWebQuery: z.ZodArray<z.ZodString>;
    result: z.ZodType<{
        content: {
            core: {
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    currency?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedUsd?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: string;
                }[];
                urlLinkSuppressedCount: number;
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        currency?: string | null | undefined;
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: string | null | undefined;
                        totalRaised: number;
                        totalRaisedUsd?: number | null | undefined;
                        unconvertedRoundCount: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
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
                    publicSource?: {
                        lastFetchedAt?: string | null | undefined;
                        publishedAt?: string | null | undefined;
                        recordedAt: string;
                        sourceDetail: string;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
            };
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceType: string;
            } | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown, z.core.$ZodTypeInternals<{
        content: {
            core: {
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    currency?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedUsd?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: string;
                }[];
                urlLinkSuppressedCount: number;
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        currency?: string | null | undefined;
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: string | null | undefined;
                        totalRaised: number;
                        totalRaisedUsd?: number | null | undefined;
                        unconvertedRoundCount: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
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
                        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
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
                    publicSource?: {
                        lastFetchedAt?: string | null | undefined;
                        publishedAt?: string | null | undefined;
                        recordedAt: string;
                        sourceDetail: string;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
            };
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceType: string;
            } | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown>>;
    searchRequestId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    subject: z.ZodArray<z.ZodType<{
        core: {
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
            typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                currency?: string | null | undefined;
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedUsd?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: string;
            }[];
            urlLinkSuppressedCount: number;
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
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
                    typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    currency?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedUsd?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        research: {
            acceleratorParticipation: {
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
                    typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
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
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceType: string;
        } | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        core: {
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
            typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                currency?: string | null | undefined;
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedUsd?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: string;
            }[];
            urlLinkSuppressedCount: number;
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
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
                    typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    currency?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedUsd?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        research: {
            acceleratorParticipation: {
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
                    typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
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
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceType: string;
        } | null | undefined;
    }, unknown>>>;
}, z.core.$strip>;
type NaturalSearchResultDefinition = z.infer<typeof NaturalSearchResultSchemaDefinition>;
/**
 * Natural-language entity search result: planner interpretation plus the canonical entity list page produced by EntityListService.
 *
 * @openapiSchema NaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape natural.search-result
 * @contractRole canonical
 */
export declare const NaturalSearchResultSchema: z.ZodType<NaturalSearchResultDefinition>;
export type NaturalSearchResult = z.infer<typeof NaturalSearchResultSchema>;
export {};
//# sourceMappingURL=search-result.d.ts.map