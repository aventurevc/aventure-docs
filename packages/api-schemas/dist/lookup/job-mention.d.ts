import { z } from "zod/v4";
declare const LookupJobMentionSchemaDefinition: z.ZodObject<{
    enrichmentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    entity: z.ZodArray<z.ZodType<{
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
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
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
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
    }, unknown>>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    identification: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        candidate: z.ZodArray<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            owner: z.ZodObject<{
                entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
                personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            }, z.core.$strip>;
            probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            record: z.ZodType<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            owner: z.ZodObject<{
                entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
                personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            }, z.core.$strip>;
            probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            record: z.ZodType<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>>;
        detail: z.ZodString;
        duplicate: z.ZodArray<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            owner: z.ZodObject<{
                entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
                personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            }, z.core.$strip>;
            probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            record: z.ZodType<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>;
        enrichmentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        match: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            owner: z.ZodObject<{
                entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
                personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            }, z.core.$strip>;
            probability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            record: z.ZodType<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score: number;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, unknown>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>>;
        matchConfidence: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        matchEvidenceProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        officialUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stage: z.ZodEnum<{
            DETERMINISTIC: "DETERMINISTIC";
            JUDGMENT: "JUDGMENT";
            WEB_EVIDENCE: "WEB_EVIDENCE";
        }>;
        status: z.ZodEnum<{
            MATCHED: "MATCHED";
            NEEDS_REVIEW: "NEEDS_REVIEW";
            NO_MATCH: "NO_MATCH";
        }>;
    }, z.core.$strip>>>;
    mentionType: z.ZodEnum<{
        COMPANY: "COMPANY";
        PERSON: "PERSON";
        PRODUCT_SERVICE: "PRODUCT_SERVICE";
    }>;
    name: z.ZodString;
    person: z.ZodArray<z.ZodType<{
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
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
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
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown>>>;
    shell: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    shellDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LookupJobMentionDefinition = z.infer<typeof LookupJobMentionSchemaDefinition>;
/**
 * One company or person a source names, which stored record it is, and, from a standard article job or streaming lookup, the hidden shell record filed when it is new. Bulk lookup only identifies names and files no shells.
 *
 * @openapiSchema LookupJobMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape lookup.job-mention
 * @contractRole canonical
 */
export declare const LookupJobMentionSchema: z.ZodType<LookupJobMentionDefinition>;
export type LookupJobMention = z.infer<typeof LookupJobMentionSchema>;
export {};
//# sourceMappingURL=job-mention.d.ts.map