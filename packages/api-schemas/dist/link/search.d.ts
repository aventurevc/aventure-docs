import { z } from "zod/v4";
declare const LinkSearchSchemaDefinition: z.ZodObject<{
    query: z.ZodString;
    related: z.ZodType<{
        entity: {
            interpretation: {
                confidence: "HIGH" | "LOW" | "MEDIUM";
                execution: {
                    modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                    modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
                };
                fallbackUsed: boolean;
                filter: {
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
                    urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
                    yearFoundedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                };
                interpretation: string;
                sort: {
                    order: {
                        descending: boolean;
                        field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
                    }[];
                    relevance?: "keyword" | "semantic" | null | undefined;
                };
                unsupported?: string | null | undefined;
            };
            result: {
                content: {
                    core: {
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
                            urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                        }[];
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
                            fundingDetail?: {
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
                        }[];
                        detail: {
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
                        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                    } | null | undefined;
                }[];
                number: number;
                size: number;
                totalElements: number;
                totalPages: number;
            };
        };
        news: {
            content: {
                author?: string | null | undefined;
                category?: string | null | undefined;
                createdAt?: string | null | undefined;
                excerpt?: string | null | undefined;
                externalNewsArticle?: boolean | null | undefined;
                id: number;
                newsImageThumbnail?: string | null | undefined;
                newsUrlOriginal?: string | null | undefined;
                pendingApproval?: number | null | undefined;
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
        };
        person: {
            interpretation: {
                confidence: "HIGH" | "LOW" | "MEDIUM";
                execution: {
                    modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                    modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
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
                        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                    } | null | undefined;
                    slug: string;
                    source: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    };
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
        };
        provenance: {
            entity: {
                modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
            };
            news: {
                modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
            };
            person: {
                modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
            };
        };
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            interpretation: {
                confidence: "HIGH" | "LOW" | "MEDIUM";
                execution: {
                    modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                    modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
                };
                fallbackUsed: boolean;
                filter: {
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
                    urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
                    yearFoundedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                };
                interpretation: string;
                sort: {
                    order: {
                        descending: boolean;
                        field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
                    }[];
                    relevance?: "keyword" | "semantic" | null | undefined;
                };
                unsupported?: string | null | undefined;
            };
            result: {
                content: {
                    core: {
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
                            urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                        }[];
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
                            fundingDetail?: {
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
                        }[];
                        detail: {
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
                        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                    } | null | undefined;
                }[];
                number: number;
                size: number;
                totalElements: number;
                totalPages: number;
            };
        };
        news: {
            content: {
                author?: string | null | undefined;
                category?: string | null | undefined;
                createdAt?: string | null | undefined;
                excerpt?: string | null | undefined;
                externalNewsArticle?: boolean | null | undefined;
                id: number;
                newsImageThumbnail?: string | null | undefined;
                newsUrlOriginal?: string | null | undefined;
                pendingApproval?: number | null | undefined;
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
        };
        person: {
            interpretation: {
                confidence: "HIGH" | "LOW" | "MEDIUM";
                execution: {
                    modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                    modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
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
                        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                    } | null | undefined;
                    slug: string;
                    source: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    };
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
        };
        provenance: {
            entity: {
                modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
            };
            news: {
                modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
            };
            person: {
                modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
                modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
            };
        };
    }, unknown>>;
    url: z.ZodString;
}, z.core.$strip>;
type LinkSearchDefinition = z.infer<typeof LinkSearchSchemaDefinition>;
/**
 * Search results related to a shared article or page URL: the fetched URL, the search query synthesized from the page content, and the federated entity, person, and news results for that query.
 *
 * @openapiSchema LinkSearch
 * @endpoint GET /v1/search/link
 * @contractShape link.search
 * @contractRole canonical
 */
export declare const LinkSearchSchema: z.ZodType<LinkSearchDefinition>;
export type LinkSearch = z.infer<typeof LinkSearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map