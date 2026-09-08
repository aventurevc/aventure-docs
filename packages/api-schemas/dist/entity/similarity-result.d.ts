import { z } from "zod/v4";
declare const EntitySimilarityResultSchemaDefinition: z.ZodObject<{
    entity: z.ZodType<{
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
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
    }, unknown, z.core.$ZodTypeInternals<{
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
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
    }, unknown>>;
    similarity: z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>;
}, z.core.$strip>;
type EntitySimilarityResultDefinition = z.infer<typeof EntitySimilarityResultSchemaDefinition>;
/**
 * Similar entity list row with the provenance that explains why it appears. Rows carry the EntityList projection; load full detail through the entity detail endpoints.
 *
 * @openapiSchema EntitySimilarityResult
 * @endpoint GET /v1/entities/detail/similar
 * @usedBySchema PageEntitySimilarityResultSchema
 * @contractShape entity.similarity-result
 * @contractRole canonical
 */
export declare const EntitySimilarityResultSchema: z.ZodType<EntitySimilarityResultDefinition>;
export type EntitySimilarityResult = z.infer<typeof EntitySimilarityResultSchema>;
export {};
//# sourceMappingURL=similarity-result.d.ts.map