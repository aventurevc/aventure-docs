import { z } from "zod/v4";
declare const LookupJobMentionSchemaDefinition: z.ZodObject<{
    currentRole: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        associationId: z.ZodInt;
        endDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entityAddress: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
        entityId: z.ZodUUID;
        entityIsPublic: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        entityLogo: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
            logoSquareVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
            logoVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("../entity/image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
            logoSquareVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
            logoVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("../entity/image.ts").EntityImageSchemaInput>>;
        entityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entityOperatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entitySlug: z.ZodString;
        entityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
        entityUrlLink: z.ZodArray<z.ZodObject<{
            crawlCdnProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                akamai: "akamai";
                awsCloudfront: "awsCloudfront";
                azureCdn: "azureCdn";
                bunny: "bunny";
                cdn77: "cdn77";
                cdnetworks: "cdnetworks";
                cloudflare: "cloudflare";
                digitalocean: "digitalocean";
                fastly: "fastly";
                gcore: "gcore";
                googlecloudCdn: "googlecloudCdn";
                incapsula: "incapsula";
                keycdn: "keycdn";
                leaseweb: "leaseweb";
                netlify: "netlify";
                none: "none";
                stackpath: "stackpath";
                sucuri: "sucuri";
                unknown: "unknown";
                vercel: "vercel";
            }>>>;
            crawlRenderMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                jsEnhanced: "jsEnhanced";
                jsRequired: "jsRequired";
                static: "static";
            }>>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
                personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            }, z.core.$strip>>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            statusChecked: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            url: z.ZodString;
            urlType: z.ZodString;
        }, z.core.$strip>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        personAddress: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
        personId: z.ZodUUID;
        personImage: z.ZodType<{
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("../person/image.ts").PersonImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("../person/image.ts").PersonImageSchemaInput>>;
        personName: z.ZodString;
        personSlug: z.ZodString;
        personUrlLink: z.ZodArray<z.ZodObject<{
            crawlCdnProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                akamai: "akamai";
                awsCloudfront: "awsCloudfront";
                azureCdn: "azureCdn";
                bunny: "bunny";
                cdn77: "cdn77";
                cdnetworks: "cdnetworks";
                cloudflare: "cloudflare";
                digitalocean: "digitalocean";
                fastly: "fastly";
                gcore: "gcore";
                googlecloudCdn: "googlecloudCdn";
                incapsula: "incapsula";
                keycdn: "keycdn";
                leaseweb: "leaseweb";
                netlify: "netlify";
                none: "none";
                stackpath: "stackpath";
                sucuri: "sucuri";
                unknown: "unknown";
                vercel: "vercel";
            }>>>;
            crawlRenderMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                jsEnhanced: "jsEnhanced";
                jsRequired: "jsRequired";
                static: "static";
            }>>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
                personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            }, z.core.$strip>>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            statusChecked: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            url: z.ZodString;
            urlType: z.ZodString;
        }, z.core.$strip>>;
        score: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        startDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        titleFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        titleId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        titleLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        titleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    enrichmentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    entity: z.ZodArray<z.ZodType<{
        acquirer?: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
        core: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
        coveringRunId?: string | null | undefined;
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
                    codeText?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    edition?: string | null | undefined;
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
                typeInvestor?: ({
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
                typeRegulatory?: ({
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
                applicability?: "NOT_APPLICABLE" | "RECORDED" | "UNKNOWN" | null | undefined;
                currency?: string | null | undefined;
                currentValuation?: {
                    amount: string;
                    asOfDate?: string | null | undefined;
                    basis?: "postMoney" | "preMoney" | "reported" | null | undefined;
                    currency?: string | null | undefined;
                    postMoneyUsd?: string | null | undefined;
                    referenceValue?: string | null | undefined;
                    source: "fundraiseRound" | "researchDetail";
                    sourceRef: string;
                } | null | undefined;
                disclosedStage?: string | null | undefined;
                disclosedStageTransactionId?: string | null | undefined;
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedAmountRoundCount?: number | null | undefined;
                totalRaisedRoundCount?: number | null | undefined;
                totalRaisedUsd?: number | null | undefined;
                totalRaisedUsdRoundCount?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
            headquartersAddressId?: number | null | undefined;
            headquartersRemoteAsOf?: string | null | undefined;
            publicControllingParentId?: string | null | undefined;
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
                acquirer?: {
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                        logoSquareVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                        logoVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
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
                core: {
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                        logoSquareVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                        logoVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
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
                    applicability?: "NOT_APPLICABLE" | "RECORDED" | "UNKNOWN" | null | undefined;
                    currency?: string | null | undefined;
                    currentValuation?: {
                        amount: string;
                        asOfDate?: string | null | undefined;
                        basis?: "postMoney" | "preMoney" | "reported" | null | undefined;
                        currency?: string | null | undefined;
                        postMoneyUsd?: string | null | undefined;
                        referenceValue?: string | null | undefined;
                        source: "fundraiseRound" | "researchDetail";
                        sourceRef: string;
                    } | null | undefined;
                    disclosedStage?: string | null | undefined;
                    disclosedStageTransactionId?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedAmountRoundCount?: number | null | undefined;
                    totalRaisedRoundCount?: number | null | undefined;
                    totalRaisedUsd?: number | null | undefined;
                    totalRaisedUsdRoundCount?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
            } | null | undefined;
            financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
            id: string;
            investor?: {
                amountInvested?: number | null | undefined;
                createdAt: string;
                financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
                id: string;
                investor: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                investorName?: string | null | undefined;
                investorSlug?: string | null | undefined;
                leadInvestor: boolean;
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                transactionId: string;
                updatedAt: string;
            }[] | null | undefined;
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
            rawInvestorCount?: number | null | undefined;
            rawRoundLabel?: string | null | undefined;
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
            unsupportedField?: ("amountRaised" | "currency" | "dateAnnounced" | "dateFundingComplete" | "dateInvestorExit" | "financialInstrumentType" | "investorCount" | "round" | "roundType" | "status" | "valuationPostMoney" | "valuationPreMoney")[] | undefined;
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        profileStatus?: {
            headline: string;
            isAcquired?: boolean | null | undefined;
            isClosed?: boolean | null | undefined;
            isTerminal?: boolean | null | undefined;
        } | undefined;
        provider?: {
            entity: {
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                    logoSquareVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
                    logoVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
            headquarters?: {
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
            relationshipType: "fundManagerFirm" | "productService";
        } | null | undefined;
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
                        logoSquareVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                        logoVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
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
                decimalValue?: string | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                measurementBasis?: string | null | undefined;
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                reportingScope?: string | null | undefined;
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
    }, import("../entity/list.ts").EntityListSchemaInput, z.core.$ZodTypeInternals<{
        acquirer?: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
        core: {
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
        coveringRunId?: string | null | undefined;
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
                    codeText?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    edition?: string | null | undefined;
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
                typeInvestor?: ({
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
                typeRegulatory?: ({
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
                applicability?: "NOT_APPLICABLE" | "RECORDED" | "UNKNOWN" | null | undefined;
                currency?: string | null | undefined;
                currentValuation?: {
                    amount: string;
                    asOfDate?: string | null | undefined;
                    basis?: "postMoney" | "preMoney" | "reported" | null | undefined;
                    currency?: string | null | undefined;
                    postMoneyUsd?: string | null | undefined;
                    referenceValue?: string | null | undefined;
                    source: "fundraiseRound" | "researchDetail";
                    sourceRef: string;
                } | null | undefined;
                disclosedStage?: string | null | undefined;
                disclosedStageTransactionId?: string | null | undefined;
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedAmountRoundCount?: number | null | undefined;
                totalRaisedRoundCount?: number | null | undefined;
                totalRaisedUsd?: number | null | undefined;
                totalRaisedUsdRoundCount?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
            headquartersAddressId?: number | null | undefined;
            headquartersRemoteAsOf?: string | null | undefined;
            publicControllingParentId?: string | null | undefined;
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
                acquirer?: {
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                        logoSquareVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                        logoVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
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
                core: {
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                        logoSquareVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                        logoVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
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
                    applicability?: "NOT_APPLICABLE" | "RECORDED" | "UNKNOWN" | null | undefined;
                    currency?: string | null | undefined;
                    currentValuation?: {
                        amount: string;
                        asOfDate?: string | null | undefined;
                        basis?: "postMoney" | "preMoney" | "reported" | null | undefined;
                        currency?: string | null | undefined;
                        postMoneyUsd?: string | null | undefined;
                        referenceValue?: string | null | undefined;
                        source: "fundraiseRound" | "researchDetail";
                        sourceRef: string;
                    } | null | undefined;
                    disclosedStage?: string | null | undefined;
                    disclosedStageTransactionId?: string | null | undefined;
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: string | null | undefined;
                    totalRaised: number;
                    totalRaisedAmountRoundCount?: number | null | undefined;
                    totalRaisedRoundCount?: number | null | undefined;
                    totalRaisedUsd?: number | null | undefined;
                    totalRaisedUsdRoundCount?: number | null | undefined;
                    unconvertedRoundCount: number;
                } | null | undefined;
            } | null | undefined;
            financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
            id: string;
            investor?: {
                amountInvested?: number | null | undefined;
                createdAt: string;
                financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
                id: string;
                investor: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                investorName?: string | null | undefined;
                investorSlug?: string | null | undefined;
                leadInvestor: boolean;
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                transactionId: string;
                updatedAt: string;
            }[] | null | undefined;
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
            rawInvestorCount?: number | null | undefined;
            rawRoundLabel?: string | null | undefined;
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
            unsupportedField?: ("amountRaised" | "currency" | "dateAnnounced" | "dateFundingComplete" | "dateInvestorExit" | "financialInstrumentType" | "investorCount" | "round" | "roundType" | "status" | "valuationPostMoney" | "valuationPreMoney")[] | undefined;
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        profileStatus?: {
            headline: string;
            isAcquired?: boolean | null | undefined;
            isClosed?: boolean | null | undefined;
            isTerminal?: boolean | null | undefined;
        } | undefined;
        provider?: {
            entity: {
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                    logoSquareVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
                    logoVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
            headquarters?: {
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
            relationshipType: "fundManagerFirm" | "productService";
        } | null | undefined;
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
                        logoSquareVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                        logoVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
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
                decimalValue?: string | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                measurementBasis?: string | null | undefined;
                publicSource?: {
                    lastFetchedAt?: string | null | undefined;
                    publishedAt?: string | null | undefined;
                    recordedAt: string;
                    sourceDetail: string;
                } | null | undefined;
                reportingScope?: string | null | undefined;
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
    }, import("../entity/list.ts").EntityListSchemaInput>>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    identification: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        acceptedOwner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        }, z.core.$strip>>>;
        candidate: z.ZodArray<z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            domainAgreement: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                CONFLICT: "CONFLICT";
                MATCH: "MATCH";
                UNKNOWN: "UNKNOWN";
            }>>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            nameAgreement: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            domainAgreement: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                CONFLICT: "CONFLICT";
                MATCH: "MATCH";
                UNKNOWN: "UNKNOWN";
            }>>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            nameAgreement: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        detail: z.ZodString;
        deterministicMatch: z.ZodOptional<z.ZodBoolean>;
        duplicate: z.ZodArray<z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            domainAgreement: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                CONFLICT: "CONFLICT";
                MATCH: "MATCH";
                UNKNOWN: "UNKNOWN";
            }>>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            nameAgreement: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        enrichmentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        filing: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            deduped: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            jobId: z.ZodUUID;
            maxRuntimeSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mode: z.ZodString;
            statusUrl: z.ZodString;
        }, z.core.$strip>>>;
        filingRefusal: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
            CLASSIFICATION_INACTIVE_TAG: "CLASSIFICATION_INACTIVE_TAG";
            DUPLICATE_CREATE_REVIEW: "DUPLICATE_CREATE_REVIEW";
            NEWS_SOURCE_URL: "NEWS_SOURCE_URL";
            STRICT_URL_LOOKUP: "STRICT_URL_LOOKUP";
            URL_DUPLICATE: "URL_DUPLICATE";
        }>, z.ZodString]> & {
            enum: {
                CLASSIFICATION_INACTIVE_TAG: "CLASSIFICATION_INACTIVE_TAG";
                DUPLICATE_CREATE_REVIEW: "DUPLICATE_CREATE_REVIEW";
                NEWS_SOURCE_URL: "NEWS_SOURCE_URL";
                STRICT_URL_LOOKUP: "STRICT_URL_LOOKUP";
                URL_DUPLICATE: "URL_DUPLICATE";
            };
        }>>;
        filingRefusalDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        filingResolution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            acceptedValue: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            action: z.ZodEnum<{
                authenticate: "authenticate";
                removeParameter: "removeParameter";
                reviewCandidates: "reviewCandidates";
                setField: "setField";
                setParameter: "setParameter";
                useEndpoint: "useEndpoint";
            }>;
            endpoint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fieldPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            parameter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            retryable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>>;
        inserted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        languageModelSettled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        match: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataCompletionCoverage: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            domainAgreement: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                CONFLICT: "CONFLICT";
                MATCH: "MATCH";
                UNKNOWN: "UNKNOWN";
            }>>>;
            duplicateBasis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                JUDGED: "JUDGED";
                SHARED_FACT: "SHARED_FACT";
                STUB: "STUB";
            }>>>;
            duplicateProbability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            nameAgreement: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput, z.core.$ZodTypeInternals<{
                externalId?: string | null | undefined;
                id: string;
                name?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicPath?: string | null | undefined;
                reason: string[];
                score?: number | undefined;
                slug?: string | null | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            }, import("../search/duplicate-candidate-score.ts").SearchDuplicateCandidateScoreSchemaInput>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        officialUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodEnum<{
            MATCHED: "MATCHED";
            NEEDS_REVIEW: "NEEDS_REVIEW";
            NO_MATCH: "NO_MATCH";
        }>;
        urlHostForm: z.ZodArray<z.ZodType<{
            concluded: boolean;
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            landingHost?: string | null | undefined;
            outcome?: "noResponse" | "refusal" | "rejection" | "success" | "transient" | null | undefined;
            status?: string | null | undefined;
            submittedUrl: string;
            url: string;
        }, import("../url/host-form-resolution.ts").UrlHostFormResolutionSchemaInput, z.core.$ZodTypeInternals<{
            concluded: boolean;
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            landingHost?: string | null | undefined;
            outcome?: "noResponse" | "refusal" | "rejection" | "success" | "transient" | null | undefined;
            status?: string | null | undefined;
            submittedUrl: string;
            url: string;
        }, import("../url/host-form-resolution.ts").UrlHostFormResolutionSchemaInput>>>;
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
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "stageName" | null | undefined;
        }[];
        nameDisplay: string;
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
        urlLink?: {
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
        }[] | null | undefined;
    }, import("../person/person.ts").PersonSchemaInput, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "stageName" | null | undefined;
        }[];
        nameDisplay: string;
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
        urlLink?: {
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
        }[] | null | undefined;
    }, import("../person/person.ts").PersonSchemaInput>>>;
    shell: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    shellDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LookupJobMentionDefinition = z.infer<typeof LookupJobMentionSchemaDefinition>;
export interface LookupJobMentionSchemaInput extends z.input<typeof LookupJobMentionSchemaDefinition> {
}
/**
 * One company or person a source names, which stored record it is, and, from a standard article job or streaming lookup, the new record created when it is new (a company public and a person hidden unless the lookup's publishCreated says otherwise). Bulk lookup only identifies names and creates no records.
 *
 * @openapiSchema LookupJobMention
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobSchema
 * @usedBySchema MentionLookupSchema
 * @contractShape lookup.job-mention
 * @contractRole canonical
 */
export declare const LookupJobMentionSchema: z.ZodType<LookupJobMentionDefinition, LookupJobMentionSchemaInput>;
export type LookupJobMention = z.infer<typeof LookupJobMentionSchema>;
export {};
//# sourceMappingURL=job-mention.d.ts.map