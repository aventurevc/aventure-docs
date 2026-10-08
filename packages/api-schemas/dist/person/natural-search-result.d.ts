import { z } from "zod/v4";
declare const PersonNaturalSearchResultSchemaDefinition: z.ZodObject<{
    interpretation: z.ZodType<{
        confidence: "HIGH" | "LOW" | "MEDIUM";
        execution: {
            modeRequested: string;
            modeUsed: string;
        };
        fallbackUsed: boolean;
        filter: {
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
            personId?: string[] | undefined;
            personName?: string[] | undefined;
            role?: string | null | undefined;
            search?: string | null | undefined;
            semanticQuery?: string | null | undefined;
            status?: string | null | undefined;
        };
        interpretation: string;
        sort: {
            order: {
                descending: boolean;
                field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
                sortKey?: string | null | undefined;
            }[];
            relevance?: "keyword" | "semantic" | null | undefined;
        };
        unsupported?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        confidence: "HIGH" | "LOW" | "MEDIUM";
        execution: {
            modeRequested: string;
            modeUsed: string;
        };
        fallbackUsed: boolean;
        filter: {
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
            personId?: string[] | undefined;
            personName?: string[] | undefined;
            role?: string | null | undefined;
            search?: string | null | undefined;
            semanticQuery?: string | null | undefined;
            status?: string | null | undefined;
        };
        interpretation: string;
        sort: {
            order: {
                descending: boolean;
                field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
                sortKey?: string | null | undefined;
            }[];
            relevance?: "keyword" | "semantic" | null | undefined;
        };
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
            sourceJson?: string | undefined;
            sourceText?: string | undefined;
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
            sourceJson?: string | undefined;
            sourceText?: string | undefined;
            sourceType: string;
        } | null | undefined;
    }, unknown>>>;
    result: z.ZodType<{
        content: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson?: string | undefined;
                sourceText?: string | undefined;
                sourceType: string;
            } | null | undefined;
            slug: string;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown, z.core.$ZodTypeInternals<{
        content: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson?: string | undefined;
                sourceText?: string | undefined;
                sourceType: string;
            } | null | undefined;
            slug: string;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown>>;
    searchRequestId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
type PersonNaturalSearchResultDefinition = z.infer<typeof PersonNaturalSearchResultSchemaDefinition>;
/**
 * Natural-language people search result: planner interpretation plus the canonical person page produced by the person list engine.
 *
 * @openapiSchema PersonNaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape person.natural-search-result
 * @contractRole canonical
 */
export declare const PersonNaturalSearchResultSchema: z.ZodType<PersonNaturalSearchResultDefinition>;
export type PersonNaturalSearchResult = z.infer<typeof PersonNaturalSearchResultSchema>;
export {};
//# sourceMappingURL=natural-search-result.d.ts.map