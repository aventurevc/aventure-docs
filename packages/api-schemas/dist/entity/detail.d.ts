import { z } from "zod/v4";
/**
 * Full entity detail response: core entity, enrichment, governed research, relationships, external identifiers, fundraising, news, people, and sitemap eligibility. Core identity and naming fields live under core.
 *
 * @openapiSchema EntityDetail
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema EntityResolutionSchema
 * @usedBySchema FederatedSearchSchema
 * @usedBySchema PageEntityDetailSchema
 * @contractShape entity.detail
 * @contractRole canonical
 */
export declare const EntityDetailSchema: z.ZodObject<{
    core: z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, import("./image.ts").EntityImageSchemaInput>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, import("./name-alias-entity-alias-type.ts").EntityNameAliasEntityAliasTypeSchemaInput, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, import("./name-alias-entity-alias-type.ts").EntityNameAliasEntityAliasTypeSchemaInput>>>;
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
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            industry?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            mainProduct?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            standardizedClassification?: {
                category: string;
                classificationId?: number | null | undefined;
                code?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                level?: number | null | undefined;
                name: string;
                registry: string;
                updatedAt?: string | null | undefined;
            }[] | undefined;
            tag?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeCustomer?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeModel?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeOwnership?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeRevenue?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeTechnologyUsed?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
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
        headquartersAddressId?: number | null | undefined;
        headquartersRemoteAsOf?: string | null | undefined;
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
    }, import("./enrichment.ts").EntityEnrichmentSchemaInput, z.core.$ZodTypeInternals<{
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
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            industry?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            mainProduct?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            standardizedClassification?: {
                category: string;
                classificationId?: number | null | undefined;
                code?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                level?: number | null | undefined;
                name: string;
                registry: string;
                updatedAt?: string | null | undefined;
            }[] | undefined;
            tag?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeCustomer?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeModel?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeOwnership?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeRevenue?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeTechnologyUsed?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
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
        headquartersAddressId?: number | null | undefined;
        headquartersRemoteAsOf?: string | null | undefined;
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
    }, import("./enrichment.ts").EntityEnrichmentSchemaInput>>;
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
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedUsd?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
        } | null | undefined;
        financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
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
        publicSource?: {
            lastFetchedAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            recordedAt: string;
            sourceDetail: string;
        } | null | undefined;
        round?: string | null | undefined;
        roundType?: string | null | undefined;
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
    }, import("./fundraise-transaction.ts").EntityFundraiseTransactionSchemaInput, z.core.$ZodTypeInternals<{
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
        financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
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
        publicSource?: {
            lastFetchedAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            recordedAt: string;
            sourceDetail: string;
        } | null | undefined;
        round?: string | null | undefined;
        roundType?: string | null | undefined;
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
    }, import("./fundraise-transaction.ts").EntityFundraiseTransactionSchemaInput>>>;
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
    }, import("../news/news.ts").NewsSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("../news/news.ts").NewsSchemaInput>>>;
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
        blogPost?: {
            author?: string | null | undefined;
            createdAt: string;
            externalId?: string | null | undefined;
            id: string;
            isCurrent: boolean;
            lastFetchedAt?: string | null | undefined;
            mentionedEntityId: string[];
            mentionedPersonId: string[];
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            publishedAt?: string | null | undefined;
            summary?: string | null | undefined;
            summaryGeneratedAt?: string | null | undefined;
            title?: string | null | undefined;
            topic?: string | null | undefined;
            type: "aventureBlog" | "employerBlog" | "linkedin" | "medium" | "other" | "personalBlog" | "substack" | "xTwitter";
            updatedAt: string;
            url: string;
        }[] | null | undefined;
        core: {
            bioUpdatedAt?: string | null | undefined;
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
        graph?: {
            careerContext: {
                colleague: {
                    isCurrent?: boolean | null | undefined;
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    titleName?: string | null | undefined;
                }[];
                employeeCount?: {
                    asOfDate?: string | null | undefined;
                    fact: {
                        asOfDate?: string | null | undefined;
                        currentEligible?: boolean | null | undefined;
                        dataConfidence?: "high" | "low" | "medium" | null | undefined;
                        dateValue?: string | null | undefined;
                        numericValue?: number | null | undefined;
                        referenceValue?: string | null | undefined;
                        source?: string | null | undefined;
                        textValue?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                    };
                    id: string;
                } | null | undefined;
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
                };
                primaryAddress?: {
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
                } | null | undefined;
                recentNews: {
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
                similarEntity: {
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
                    };
                    keyPerson: {
                        isCurrent?: boolean | null | undefined;
                        personId: string;
                        personImage: {
                            isMonogram: boolean;
                            picture?: string | null | undefined;
                        };
                        personName: string;
                        personSlug: string;
                        titleName?: string | null | undefined;
                    }[];
                }[];
            }[];
            coInvestor: {
                overlapCount: number;
                person: {
                    isCurrent?: boolean | null | undefined;
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    titleName?: string | null | undefined;
                };
                round?: string | null | undefined;
                sharedEntity?: {
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
                transactionId?: string | null | undefined;
            }[];
            computedAt?: string | null | undefined;
        } | null | undefined;
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
        investorActivity?: {
            attributedInvestmentCount: number;
            averageAmountInvestedUsd?: number | null | undefined;
            currentPortfolioCount: number;
            largestAmountInvestedUsd?: number | null | undefined;
            portfolioCompanyCount: number;
            smallestAmountInvestedUsd?: number | null | undefined;
            topInvestmentStage: {
                count: number;
                stage: string;
            }[];
            totalAmountInvestedUsd?: number | null | undefined;
            totalInvestment: number;
            totalPortfolioExit: number;
            totalWriteOff: number;
        } | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        similar?: {
            currentRole?: {
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
            } | null | undefined;
            person: {
                bioUpdatedAt?: string | null | undefined;
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
            similarity: {
                compositeScore?: number | null | undefined;
                cosineScore?: number | null | undefined;
                matchedSectionWeight?: number | null | undefined;
                origin: "live" | "precomputed";
                rank: number;
                sharedSectionCount?: number | null | undefined;
            };
        }[] | null | undefined;
    }, import("../person/detail.ts").PersonDetailSchemaInput, z.core.$ZodTypeInternals<{
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
        blogPost?: {
            author?: string | null | undefined;
            createdAt: string;
            externalId?: string | null | undefined;
            id: string;
            isCurrent: boolean;
            lastFetchedAt?: string | null | undefined;
            mentionedEntityId: string[];
            mentionedPersonId: string[];
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            publishedAt?: string | null | undefined;
            summary?: string | null | undefined;
            summaryGeneratedAt?: string | null | undefined;
            title?: string | null | undefined;
            topic?: string | null | undefined;
            type: "aventureBlog" | "employerBlog" | "linkedin" | "medium" | "other" | "personalBlog" | "substack" | "xTwitter";
            updatedAt: string;
            url: string;
        }[] | null | undefined;
        core: {
            bioUpdatedAt?: string | null | undefined;
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
        graph?: {
            careerContext: {
                colleague: {
                    isCurrent?: boolean | null | undefined;
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    titleName?: string | null | undefined;
                }[];
                employeeCount?: {
                    asOfDate?: string | null | undefined;
                    fact: {
                        asOfDate?: string | null | undefined;
                        currentEligible?: boolean | null | undefined;
                        dataConfidence?: "high" | "low" | "medium" | null | undefined;
                        dateValue?: string | null | undefined;
                        numericValue?: number | null | undefined;
                        referenceValue?: string | null | undefined;
                        source?: string | null | undefined;
                        textValue?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                    };
                    id: string;
                } | null | undefined;
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
                };
                primaryAddress?: {
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
                } | null | undefined;
                recentNews: {
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
                similarEntity: {
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
                    };
                    keyPerson: {
                        isCurrent?: boolean | null | undefined;
                        personId: string;
                        personImage: {
                            isMonogram: boolean;
                            picture?: string | null | undefined;
                        };
                        personName: string;
                        personSlug: string;
                        titleName?: string | null | undefined;
                    }[];
                }[];
            }[];
            coInvestor: {
                overlapCount: number;
                person: {
                    isCurrent?: boolean | null | undefined;
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    titleName?: string | null | undefined;
                };
                round?: string | null | undefined;
                sharedEntity?: {
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
                transactionId?: string | null | undefined;
            }[];
            computedAt?: string | null | undefined;
        } | null | undefined;
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
        investorActivity?: {
            attributedInvestmentCount: number;
            averageAmountInvestedUsd?: number | null | undefined;
            currentPortfolioCount: number;
            largestAmountInvestedUsd?: number | null | undefined;
            portfolioCompanyCount: number;
            smallestAmountInvestedUsd?: number | null | undefined;
            topInvestmentStage: {
                count: number;
                stage: string;
            }[];
            totalAmountInvestedUsd?: number | null | undefined;
            totalInvestment: number;
            totalPortfolioExit: number;
            totalWriteOff: number;
        } | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        similar?: {
            currentRole?: {
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
            } | null | undefined;
            person: {
                bioUpdatedAt?: string | null | undefined;
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
            similarity: {
                compositeScore?: number | null | undefined;
                cosineScore?: number | null | undefined;
                matchedSectionWeight?: number | null | undefined;
                origin: "live" | "precomputed";
                rank: number;
                sharedSectionCount?: number | null | undefined;
            };
        }[] | null | undefined;
    }, import("../person/detail.ts").PersonDetailSchemaInput>>>;
    provider: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entity: z.ZodObject<{
            defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            id: z.ZodUUID;
            image: z.ZodType<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            }, import("./image.ts").EntityImageSchemaInput>>;
            lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            nameAlias: z.ZodArray<z.ZodType<{
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }, import("./name-alias-entity-alias-type.ts").EntityNameAliasEntityAliasTypeSchemaInput, z.core.$ZodTypeInternals<{
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }, import("./name-alias-entity-alias-type.ts").EntityNameAliasEntityAliasTypeSchemaInput>>>;
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
        headquarters: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            association: z.ZodOptional<z.ZodArray<z.ZodType<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, import("../address/association.ts").AddressAssociationSchemaInput, z.core.$ZodTypeInternals<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, import("../address/association.ts").AddressAssociationSchemaInput>>>>;
            city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
            }, z.core.$strip>>>;
            country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
                unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
                stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>>;
        relationshipType: z.ZodEnum<{
            fundManagerFirm: "fundManagerFirm";
            productService: "productService";
        }>;
    }, z.core.$strip>>>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    relationship: z.ZodArray<z.ZodType<{
        asOf?: string | null | undefined;
        comparisonSignals?: {
            fundingStage?: string | null | undefined;
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
    }, import("./relationship.ts").EntityRelationshipSchemaInput, z.core.$ZodTypeInternals<{
        asOf?: string | null | undefined;
        comparisonSignals?: {
            fundingStage?: string | null | undefined;
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
    }, import("./relationship.ts").EntityRelationshipSchemaInput>>>;
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
            currentEligible?: boolean | null | undefined;
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
    }, import("./research.ts").EntityResearchSchemaInput, z.core.$ZodTypeInternals<{
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
            currentEligible?: boolean | null | undefined;
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
    }, import("./research.ts").EntityResearchSchemaInput>>;
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
        idType: string;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, import("../unique/id.ts").UniqueIdSchemaInput, z.core.$ZodTypeInternals<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: string;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, import("../unique/id.ts").UniqueIdSchemaInput>>>;
}, z.core.$strip>;
export type EntityDetail = z.infer<typeof EntityDetailSchema>;
//# sourceMappingURL=detail.d.ts.map