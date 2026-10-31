import { z } from "zod/v4";
/**
 * Precomputed professional-graph document for one person: career context per associated entity (entity facts, recent news, colleagues, similar entities with key people), plus co-investors. Lists are capped and pre-ranked server-side; the response is the display order. Served from a precomputed store with member names, images, and slugs hydrated from live person records at read time; computedAt is null only when the document has not been materialized yet.
 *
 * @openapiSchema PersonGraph
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonDetailSchema
 * @contractShape person.graph
 * @contractRole canonical
 */
export declare const PersonGraphSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type PersonGraph = z.infer<typeof PersonGraphSchema>;
//# sourceMappingURL=graph.d.ts.map