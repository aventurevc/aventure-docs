import { z } from "zod/v4";
declare const PersonDetailSchemaDefinition: z.ZodObject<{
    articleCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    association: z.ZodArray<z.ZodObject<{
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
        }, import("./image.ts").PersonImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("./image.ts").PersonImageSchemaInput>>;
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
    }, z.core.$strip>>;
    blogPost: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
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
    }, import("../blog/post.ts").BlogPostSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("../blog/post.ts").BlogPostSchemaInput>>>>>;
    core: z.ZodType<{
        bioUpdatedAt?: string | null | undefined;
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
    }, import("./person.ts").PersonSchemaInput, z.core.$ZodTypeInternals<{
        bioUpdatedAt?: string | null | undefined;
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
    }, import("./person.ts").PersonSchemaInput>>;
    coveringRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
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
    }, import("./enrichment.ts").PersonEnrichmentSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./enrichment.ts").PersonEnrichmentSchemaInput>>;
    graph: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        careerContext: z.ZodArray<z.ZodType<{
            colleague: {
                isCurrent?: boolean | null | undefined;
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                    pictureVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
                    decimalValue?: string | null | undefined;
                    measurementBasis?: string | null | undefined;
                    numericValue?: number | null | undefined;
                    referenceValue?: string | null | undefined;
                    reportingScope?: string | null | undefined;
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
                titleMention?: {
                    end: number;
                    entity?: {
                        createdAt: string;
                        entityId: string;
                        href?: string | null | undefined;
                        internal: boolean;
                        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
                        mention?: string | null | undefined;
                        slug?: string | null | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt: string;
                    } | null | undefined;
                    person?: {
                        createdAt: string;
                        href?: string | null | undefined;
                        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
                        mention?: string | null | undefined;
                        personId: string;
                        slug?: string | null | undefined;
                        updatedAt: string;
                    } | null | undefined;
                    start: number;
                }[] | undefined;
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
                };
                keyPerson: {
                    isCurrent?: boolean | null | undefined;
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                        pictureVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    titleName?: string | null | undefined;
                }[];
            }[];
        }, import("./graph-career-context.ts").PersonGraphCareerContextSchemaInput, z.core.$ZodTypeInternals<{
            colleague: {
                isCurrent?: boolean | null | undefined;
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                    pictureVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
                    decimalValue?: string | null | undefined;
                    measurementBasis?: string | null | undefined;
                    numericValue?: number | null | undefined;
                    referenceValue?: string | null | undefined;
                    reportingScope?: string | null | undefined;
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
                titleMention?: {
                    end: number;
                    entity?: {
                        createdAt: string;
                        entityId: string;
                        href?: string | null | undefined;
                        internal: boolean;
                        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
                        mention?: string | null | undefined;
                        slug?: string | null | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt: string;
                    } | null | undefined;
                    person?: {
                        createdAt: string;
                        href?: string | null | undefined;
                        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
                        mention?: string | null | undefined;
                        personId: string;
                        slug?: string | null | undefined;
                        updatedAt: string;
                    } | null | undefined;
                    start: number;
                }[] | undefined;
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
                };
                keyPerson: {
                    isCurrent?: boolean | null | undefined;
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                        pictureVariant?: {
                            contentType: string;
                            height: number;
                            path: string;
                            width: number;
                        }[] | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    titleName?: string | null | undefined;
                }[];
            }[];
        }, import("./graph-career-context.ts").PersonGraphCareerContextSchemaInput>>>;
        coInvestor: z.ZodArray<z.ZodType<{
            overlapCount: number;
            person: {
                isCurrent?: boolean | null | undefined;
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                    pictureVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
            transactionId?: string | null | undefined;
        }, import("./graph-co-investor.ts").PersonGraphCoInvestorSchemaInput, z.core.$ZodTypeInternals<{
            overlapCount: number;
            person: {
                isCurrent?: boolean | null | undefined;
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                    pictureVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
            transactionId?: string | null | undefined;
        }, import("./graph-co-investor.ts").PersonGraphCoInvestorSchemaInput>>>;
        computedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    investment: z.ZodArray<z.ZodType<{
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
    }, import("./investment.ts").PersonInvestmentSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./investment.ts").PersonInvestmentSchemaInput>>>;
    investorActivity: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        acquiredRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        attributedInvestmentCount: z.ZodInt;
        averageAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        closedRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        currentPortfolioCount: z.ZodInt;
        largestAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        operatingRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        portfolioCompanyCount: z.ZodInt;
        publicRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        smallestAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        topInvestmentStage: z.ZodArray<z.ZodType<{
            count: number;
            stage: string;
        }, import("../stage/frequency.ts").StageFrequencySchemaInput, z.core.$ZodTypeInternals<{
            count: number;
            stage: string;
        }, import("../stage/frequency.ts").StageFrequencySchemaInput>>>;
        totalAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        totalInvestment: z.ZodInt;
        totalPortfolioExit: z.ZodInt;
        totalWriteOff: z.ZodInt;
    }, z.core.$strip>>>;
    nameAlias: z.ZodArray<z.ZodType<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "stageName" | null | undefined;
    }, import("../entity/name-alias-person-alias-type.ts").EntityNameAliasPersonAliasTypeSchemaInput, z.core.$ZodTypeInternals<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "stageName" | null | undefined;
    }, import("../entity/name-alias-person-alias-type.ts").EntityNameAliasPersonAliasTypeSchemaInput>>>;
    similar: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
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
                pictureVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "live" | "precomputed";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, import("./similarity-result.ts").PersonSimilarityResultSchemaInput, z.core.$ZodTypeInternals<{
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
                pictureVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
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
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "live" | "precomputed";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, import("./similarity-result.ts").PersonSimilarityResultSchemaInput>>>>>;
}, z.core.$strip>;
type PersonDetailDefinition = z.infer<typeof PersonDetailSchemaDefinition>;
export interface PersonDetailSchemaInput extends z.input<typeof PersonDetailSchemaDefinition> {
}
/**
 * Composed person wrapper: core identity + enrichment + associations + investments. Access core fields via .core (for example .core.slug or .core.nameFull).
 *
 * @openapiSchema PersonDetail
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema FederatedSearchSchema
 * @usedBySchema PagePersonDetailSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape person.detail
 * @contractRole canonical
 */
export declare const PersonDetailSchema: z.ZodType<PersonDetailDefinition, PersonDetailSchemaInput>;
export type PersonDetail = z.infer<typeof PersonDetailSchema>;
export {};
//# sourceMappingURL=detail.d.ts.map