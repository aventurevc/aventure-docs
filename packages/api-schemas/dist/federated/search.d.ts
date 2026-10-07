import { z } from "zod/v4";
declare const FederatedSearchSchemaDefinition: z.ZodObject<{
    entity: z.ZodType<{
        answer?: {
            citation: {
                entityId: string;
                source: string;
                sourceId: string;
            }[];
            confidence: "HIGH" | "LOW" | "MEDIUM";
            paragraph: {
                citation: {
                    entityId: string;
                    source: string;
                    sourceId: string;
                }[];
                text: string;
                topic?: string | null | undefined;
            }[];
            relatedQuery: string[];
            text: string;
        } | null | undefined;
        interpretation: {
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
                    investorName?: string[] | undefined;
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
            };
            intent: "comparison" | "discovery" | "peer" | "profile";
            interpretation: string;
            sort: {
                order: {
                    descending: boolean;
                    field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "RECENT_INVESTMENT_AT" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
                }[];
                relevance?: "keyword" | "semantic" | null | undefined;
            };
            subjectEntityName: string[];
            unsupported?: string | null | undefined;
        };
        judgment: {
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
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
                            stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                    sourceJson: string;
                    sourceText: string;
                    sourceType: string;
                } | null | undefined;
            };
            probability: number;
            webUrl: string[];
        }[];
        passage: {
            entityId: string;
            label: string;
            publishedAt?: string | null | undefined;
            score: number;
            source: string;
            sourceId: string;
            text: string;
            url?: string | null | undefined;
        }[];
        peer: {
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
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
                            stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                    sourceJson: string;
                    sourceText: string;
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
        }[];
        pendingWebQuery: string[];
        result: {
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
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
                            stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                    sourceJson: string;
                    sourceText: string;
                    sourceType: string;
                } | null | undefined;
            }[];
            number: number;
            size: number;
            totalElements: number;
            totalPages: number;
        };
        subject: {
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
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                sourceJson: string;
                sourceText: string;
                sourceType: string;
            } | null | undefined;
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        answer?: {
            citation: {
                entityId: string;
                source: string;
                sourceId: string;
            }[];
            confidence: "HIGH" | "LOW" | "MEDIUM";
            paragraph: {
                citation: {
                    entityId: string;
                    source: string;
                    sourceId: string;
                }[];
                text: string;
                topic?: string | null | undefined;
            }[];
            relatedQuery: string[];
            text: string;
        } | null | undefined;
        interpretation: {
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
                    investorName?: string[] | undefined;
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
            };
            intent: "comparison" | "discovery" | "peer" | "profile";
            interpretation: string;
            sort: {
                order: {
                    descending: boolean;
                    field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "RECENT_INVESTMENT_AT" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
                }[];
                relevance?: "keyword" | "semantic" | null | undefined;
            };
            subjectEntityName: string[];
            unsupported?: string | null | undefined;
        };
        judgment: {
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
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
                            stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                    sourceJson: string;
                    sourceText: string;
                    sourceType: string;
                } | null | undefined;
            };
            probability: number;
            webUrl: string[];
        }[];
        passage: {
            entityId: string;
            label: string;
            publishedAt?: string | null | undefined;
            score: number;
            source: string;
            sourceId: string;
            text: string;
            url?: string | null | undefined;
        }[];
        peer: {
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
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
                            stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                    sourceJson: string;
                    sourceText: string;
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
        }[];
        pendingWebQuery: string[];
        result: {
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
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
                            stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                    sourceJson: string;
                    sourceText: string;
                    sourceType: string;
                } | null | undefined;
            }[];
            number: number;
            size: number;
            totalElements: number;
            totalPages: number;
        };
        subject: {
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
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
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
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
                sourceJson: string;
                sourceText: string;
                sourceType: string;
            } | null | undefined;
        }[];
    }, unknown>>;
    entityDetail: z.ZodArray<z.ZodObject<{
        core: z.ZodObject<{
            defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            id: z.ZodUUID;
            image: z.ZodType<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            }, unknown>>;
            lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            nameAlias: z.ZodArray<z.ZodType<{
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }, unknown>>>;
            nameBrand: z.ZodString;
            nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                hasAnalysis: z.ZodBoolean;
                hasEmployees: z.ZodBoolean;
                hasFundraising: z.ZodBoolean;
                hasNews: z.ZodBoolean;
                productServiceSlug: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
            slug: z.ZodString;
            typeRecord: z.ZodEnum<{
                "Business Line": "Business Line";
                Company: "Company";
                Fund: "Fund";
                Government: "Government";
                "Investment Firm": "Investment Firm";
                Nonprofit: "Nonprofit";
                Organization: "Organization";
                Product: "Product";
                Service: "Service";
            }>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>;
        enrichment: z.ZodType<{
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
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
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
        }, unknown, z.core.$ZodTypeInternals<{
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
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
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
        }, unknown>>;
        fundraiseRound: z.ZodArray<z.ZodType<{
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
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
        }, unknown, z.core.$ZodTypeInternals<{
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
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
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
        }, unknown>>>;
        newsArticle: z.ZodArray<z.ZodType<{
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }, unknown>>>;
        person: z.ZodArray<z.ZodType<{
            articleCount?: number | null | undefined;
            association: {
                associationId: number;
                endDate?: string | null | undefined;
                entityAddress: {
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
                entityId: string;
                entityLogo: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                entityName?: string | null | undefined;
                entityOperatingStatus?: string | null | undefined;
                entitySlug: string;
                entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                entityUrlLink: {
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
                isCurrent?: boolean | null | undefined;
                personAddress: {
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
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                personName: string;
                personSlug: string;
                personUrlLink: {
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
                score?: number | null | undefined;
                startDate?: string | null | undefined;
                titleFunction?: string | null | undefined;
                titleId?: number | null | undefined;
                titleLevel?: string | null | undefined;
                titleName?: string | null | undefined;
            }[];
            core: {
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
                    sourceJson: string;
                    sourceText: string;
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
            };
            investment: {
                amount?: number | null | undefined;
                company: {
                    entity: {
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
                    headquartersCity?: string | null | undefined;
                    headquartersCountry?: string | null | undefined;
                    headquartersRegion?: string | null | undefined;
                    industry?: string | null | undefined;
                };
                date?: string | null | undefined;
                fundraiseTransaction?: {
                    amountRaised?: number | null | undefined;
                    dateAnnounced?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    investorCount?: number | null | undefined;
                    nameBrand: string;
                    round?: string | null | undefined;
                    status?: string | null | undefined;
                    valuationPostMoney?: number | null | undefined;
                } | null | undefined;
                fundraiseTransactionId: string;
                id: string;
                investmentDate: string;
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
                round?: string | null | undefined;
            }[];
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
        }, unknown, z.core.$ZodTypeInternals<{
            articleCount?: number | null | undefined;
            association: {
                associationId: number;
                endDate?: string | null | undefined;
                entityAddress: {
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
                entityId: string;
                entityLogo: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                entityName?: string | null | undefined;
                entityOperatingStatus?: string | null | undefined;
                entitySlug: string;
                entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                entityUrlLink: {
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
                isCurrent?: boolean | null | undefined;
                personAddress: {
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
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                personName: string;
                personSlug: string;
                personUrlLink: {
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
                score?: number | null | undefined;
                startDate?: string | null | undefined;
                titleFunction?: string | null | undefined;
                titleId?: number | null | undefined;
                titleLevel?: string | null | undefined;
                titleName?: string | null | undefined;
            }[];
            core: {
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
                    sourceJson: string;
                    sourceText: string;
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
            };
            investment: {
                amount?: number | null | undefined;
                company: {
                    entity: {
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
                    headquartersCity?: string | null | undefined;
                    headquartersCountry?: string | null | undefined;
                    headquartersRegion?: string | null | undefined;
                    industry?: string | null | undefined;
                };
                date?: string | null | undefined;
                fundraiseTransaction?: {
                    amountRaised?: number | null | undefined;
                    dateAnnounced?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    investorCount?: number | null | undefined;
                    nameBrand: string;
                    round?: string | null | undefined;
                    status?: string | null | undefined;
                    valuationPostMoney?: number | null | undefined;
                } | null | undefined;
                fundraiseTransactionId: string;
                id: string;
                investmentDate: string;
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
                round?: string | null | undefined;
            }[];
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
        }, unknown>>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        relationship: z.ZodArray<z.ZodType<{
            asOf?: string | null | undefined;
            comparisonSignals?: {
                fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                ownership: string[];
                pricingModel: string[];
                sellsTo: string[];
                totalRaised?: number | null | undefined;
                website?: string | null | undefined;
            } | null | undefined;
            createdAt?: string | null | undefined;
            detail?: string | null | undefined;
            entity: {
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
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            publicSource?: {
                lastFetchedAt?: string | null | undefined;
                publishedAt?: string | null | undefined;
                recordedAt: string;
                sourceDetail: string;
            } | null | undefined;
            relationship: /*elided*/ any[];
            relationshipType: string;
            sourceEntityId?: string | null | undefined;
            targetEntityId?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            asOf?: string | null | undefined;
            comparisonSignals?: {
                fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                ownership: string[];
                pricingModel: string[];
                sellsTo: string[];
                totalRaised?: number | null | undefined;
                website?: string | null | undefined;
            } | null | undefined;
            createdAt?: string | null | undefined;
            detail?: string | null | undefined;
            entity: {
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
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            publicSource?: {
                lastFetchedAt?: string | null | undefined;
                publishedAt?: string | null | undefined;
                recordedAt: string;
                sourceDetail: string;
            } | null | undefined;
            relationship: any[];
            relationshipType: string;
            sourceEntityId?: string | null | undefined;
            targetEntityId?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }, unknown>>>;
        research: z.ZodType<{
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
            snippet: {
                compliance?: {
                    characterCount: number;
                    meetsRequirements: boolean;
                    violation: string[];
                    wordCount: number;
                } | null | undefined;
                entityId: string;
                id: number;
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                text: string;
                textType: string;
                updatedAt?: string | null | undefined;
            }[];
        }, unknown, z.core.$ZodTypeInternals<{
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
            snippet: {
                compliance?: {
                    characterCount: number;
                    meetsRequirements: boolean;
                    violation: string[];
                    wordCount: number;
                } | null | undefined;
                entityId: string;
                id: number;
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                text: string;
                textType: string;
                updatedAt?: string | null | undefined;
            }[];
        }, unknown>>;
        sitemap: z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        uniqueId: z.ZodArray<z.ZodType<{
            createdAt: string;
            id: number;
            identifier: string;
            idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            source?: string | null | undefined;
            updatedAt: string;
        }, unknown, z.core.$ZodTypeInternals<{
            createdAt: string;
            id: number;
            identifier: string;
            idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            source?: string | null | undefined;
            updatedAt: string;
        }, unknown>>>;
    }, z.core.$strip>>;
    news: z.ZodType<{
        content: {
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown, z.core.$ZodTypeInternals<{
        content: {
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }[];
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
    }, unknown>>;
    newsEntityMention: z.ZodArray<z.ZodType<{
        entity: {
            createdAt: string;
            entityId: string;
            href?: string | null | undefined;
            internal: boolean;
            matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
            mention?: string | null | undefined;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt: string;
        }[];
        newsId: number;
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            createdAt: string;
            entityId: string;
            href?: string | null | undefined;
            internal: boolean;
            matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
            mention?: string | null | undefined;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt: string;
        }[];
        newsId: number;
    }, unknown>>>;
    person: z.ZodType<{
        interpretation: {
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
                }[];
                relevance?: "keyword" | "semantic" | null | undefined;
            };
            unsupported?: string | null | undefined;
        };
        result: {
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
                    sourceJson: string;
                    sourceText: string;
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
        };
    }, unknown, z.core.$ZodTypeInternals<{
        interpretation: {
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
                }[];
                relevance?: "keyword" | "semantic" | null | undefined;
            };
            unsupported?: string | null | undefined;
        };
        result: {
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
                    sourceJson: string;
                    sourceText: string;
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
        };
    }, unknown>>;
    personDetail: z.ZodArray<z.ZodType<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            endDate?: string | null | undefined;
            entityAddress: {
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
            entityId: string;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
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
            isCurrent?: boolean | null | undefined;
            personAddress: {
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
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
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
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
        }[];
        core: {
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
                sourceJson: string;
                sourceText: string;
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
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
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
                headquartersCity?: string | null | undefined;
                headquartersCountry?: string | null | undefined;
                headquartersRegion?: string | null | undefined;
                industry?: string | null | undefined;
            };
            date?: string | null | undefined;
            fundraiseTransaction?: {
                amountRaised?: number | null | undefined;
                dateAnnounced?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                investorCount?: number | null | undefined;
                nameBrand: string;
                round?: string | null | undefined;
                status?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
            } | null | undefined;
            fundraiseTransactionId: string;
            id: string;
            investmentDate: string;
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
            round?: string | null | undefined;
        }[];
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            endDate?: string | null | undefined;
            entityAddress: {
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
            entityId: string;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
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
            isCurrent?: boolean | null | undefined;
            personAddress: {
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
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
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
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
        }[];
        core: {
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
                sourceJson: string;
                sourceText: string;
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
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
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
                headquartersCity?: string | null | undefined;
                headquartersCountry?: string | null | undefined;
                headquartersRegion?: string | null | undefined;
                industry?: string | null | undefined;
            };
            date?: string | null | undefined;
            fundraiseTransaction?: {
                amountRaised?: number | null | undefined;
                dateAnnounced?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                investorCount?: number | null | undefined;
                nameBrand: string;
                round?: string | null | undefined;
                status?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
            } | null | undefined;
            fundraiseTransactionId: string;
            id: string;
            investmentDate: string;
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
            round?: string | null | undefined;
        }[];
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
    }, unknown>>>;
    provenance: z.ZodType<{
        entity: {
            modeRequested: string;
            modeUsed: string;
        };
        news: {
            modeRequested: string;
            modeUsed: string;
        };
        person: {
            modeRequested: string;
            modeUsed: string;
        };
        rejection: {
            detail: string;
            field?: string | null | undefined;
            scope: "entity" | "news" | "person";
        }[];
        unavailable: ("entity" | "news" | "person")[];
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            modeRequested: string;
            modeUsed: string;
        };
        news: {
            modeRequested: string;
            modeUsed: string;
        };
        person: {
            modeRequested: string;
            modeUsed: string;
        };
        rejection: {
            detail: string;
            field?: string | null | undefined;
            scope: "entity" | "news" | "person";
        }[];
        unavailable: ("entity" | "news" | "person")[];
    }, unknown>>;
}, z.core.$strip>;
type FederatedSearchDefinition = z.infer<typeof FederatedSearchSchemaDefinition>;
/**
 * Federated entity, person, and news search result composed from each domain's canonical search result owner, with the strategy used for every scope.
 *
 * @openapiSchema FederatedSearch
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema LinkSearchSchema
 * @usedBySchema SharedSearchSchema
 * @contractShape federated.search
 * @contractRole canonical
 */
export declare const FederatedSearchSchema: z.ZodType<FederatedSearchDefinition>;
export type FederatedSearch = z.infer<typeof FederatedSearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map