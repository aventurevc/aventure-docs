import { z } from "zod/v4";
declare const PersonGraphSchemaDefinition: z.ZodObject<{
    careerContext: z.ZodArray<z.ZodType<{
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
            asOfDate: string;
            fact: {
                asOfDate?: string | null | undefined;
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
            pendingApproval?: number | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }[];
        similarEntity: {
            entity: {
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
    }, unknown, z.core.$ZodTypeInternals<{
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
            asOfDate: string;
            fact: {
                asOfDate?: string | null | undefined;
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
            pendingApproval?: number | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }[];
        similarEntity: {
            entity: {
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
    }, unknown>>>;
    coInvestor: z.ZodArray<z.ZodType<{
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
        } | null | undefined;
        transactionId?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
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
        } | null | undefined;
        transactionId?: string | null | undefined;
    }, unknown>>>;
    computedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type PersonGraphDefinition = z.infer<typeof PersonGraphSchemaDefinition>;
/**
 * Precomputed professional-graph document for one person: career context per associated entity (entity facts, recent news, colleagues, similar entities with key people), plus co-investors. Lists are capped and pre-ranked server-side; the response is the display order. Served from a precomputed store with member names, images, and slugs hydrated from live person records at read time; computedAt is null only when the document has not been materialized yet.
 *
 * @openapiSchema PersonGraph
 * @endpoint GET /v1/people/{personId}/graph
 * @contractShape person.graph
 * @contractRole canonical
 */
export declare const PersonGraphSchema: z.ZodType<PersonGraphDefinition>;
export type PersonGraph = z.infer<typeof PersonGraphSchema>;
export {};
//# sourceMappingURL=graph.d.ts.map