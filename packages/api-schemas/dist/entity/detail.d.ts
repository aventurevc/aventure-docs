import { z } from "zod/v4";
/**
 * Full entity detail response: core entity, enrichment, governed research, relationships, external identifiers, fundraising, news, people, and sitemap eligibility. Core identity and naming fields live under core.
 *
 * @openapiSchema EntityDetail
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema EntityResolutionSchema
 * @usedBySchema PageEntityDetailSchema
 * @contractShape entity.detail
 * @contractRole canonical
 */
export declare const EntityDetailSchema: z.ZodObject<{
    core: z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
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
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
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
        pendingApproval?: number | null | undefined;
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
        pendingApproval?: number | null | undefined;
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
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
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
        pendingApproval?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
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
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "huggingface" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
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
        pendingApproval?: number | null | undefined;
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
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        relationship: /*elided*/ any[];
        relationshipType: string;
        source?: string | null | undefined;
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
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        relationship: any[];
        relationshipType: string;
        source?: string | null | undefined;
        sourceEntityId?: string | null | undefined;
        targetEntityId?: string | null | undefined;
        updatedAt?: string | null | undefined;
    }, unknown>>>;
    research: z.ZodType<{
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
        snippet: {
            compliance?: {
                characterCount: number;
                meetsRequirements: boolean;
                violation: string[];
                wordCount: number;
            } | null | undefined;
            createdAt?: string | null | undefined;
            entityId: string;
            id: number;
            isCurrent: boolean;
            isPrimary: boolean;
            text: string;
            textType: string;
            updatedAt?: string | null | undefined;
            visible: boolean;
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
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
        snippet: {
            compliance?: {
                characterCount: number;
                meetsRequirements: boolean;
                violation: string[];
                wordCount: number;
            } | null | undefined;
            createdAt?: string | null | undefined;
            entityId: string;
            id: number;
            isCurrent: boolean;
            isPrimary: boolean;
            text: string;
            textType: string;
            updatedAt?: string | null | undefined;
            visible: boolean;
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
}, z.core.$strip>;
export type EntityDetail = z.infer<typeof EntityDetailSchema>;
//# sourceMappingURL=detail.d.ts.map