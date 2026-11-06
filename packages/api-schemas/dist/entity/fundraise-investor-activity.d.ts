import { z } from "zod/v4";
/**
 * Investor-perspective activity aggregate for entity and person investors.
 *
 * @openapiSchema EntityFundraiseInvestorActivity
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
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
 * @contractShape entity.fundraise-investor-activity
 * @contractRole canonical
 */
export declare const EntityFundraiseInvestorActivitySchema: z.ZodObject<{
    acquiredRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    attributedInvestmentCount: z.ZodInt;
    averageAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    closedRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    currentPortfolioCount: z.ZodInt;
    largestAmountInvestedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    operatingRecipientCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    portfolio: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        ambiguousSectorCount: z.ZodInt;
        classifiedRecipientCount: z.ZodInt;
        observedAt: z.ZodISODateTime;
        outcome: z.ZodUnion<readonly [z.ZodEnum<{
            ACQUIRED: "ACQUIRED";
            CLOSED: "CLOSED";
            OPERATING: "OPERATING";
            PUBLIC: "PUBLIC";
            UNKNOWN: "UNKNOWN";
        }>, z.ZodString]> & {
            enum: {
                ACQUIRED: "ACQUIRED";
                CLOSED: "CLOSED";
                OPERATING: "OPERATING";
                PUBLIC: "PUBLIC";
                UNKNOWN: "UNKNOWN";
            };
        };
        rankableRecipientCount: z.ZodInt;
        recipient: z.ZodLazy<z.ZodType<{
            content?: {
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
                funding: {
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
                };
            }[] | undefined;
            empty?: boolean | undefined;
            first?: boolean | undefined;
            last?: boolean | undefined;
            number?: number | undefined;
            numberOfElements?: number | undefined;
            pageable?: {
                offset?: number | undefined;
                paged?: boolean | undefined;
                pageNumber?: number | undefined;
                pageSize?: number | undefined;
                sort?: {
                    empty?: boolean | undefined;
                    sorted?: boolean | undefined;
                    unsorted?: boolean | undefined;
                } | undefined;
                unpaged?: boolean | undefined;
            } | undefined;
            size?: number | undefined;
            sort?: {
                empty?: boolean | undefined;
                sorted?: boolean | undefined;
                unsorted?: boolean | undefined;
            } | undefined;
            totalElements?: number | undefined;
            totalPages?: number | undefined;
        }, import("../pagination/schemas.ts").PageInvestorPortfolioRecipientSchemaInput, z.core.$ZodTypeInternals<{
            content?: {
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
                funding: {
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
                };
            }[] | undefined;
            empty?: boolean | undefined;
            first?: boolean | undefined;
            last?: boolean | undefined;
            number?: number | undefined;
            numberOfElements?: number | undefined;
            pageable?: {
                offset?: number | undefined;
                paged?: boolean | undefined;
                pageNumber?: number | undefined;
                pageSize?: number | undefined;
                sort?: {
                    empty?: boolean | undefined;
                    sorted?: boolean | undefined;
                    unsorted?: boolean | undefined;
                } | undefined;
                unpaged?: boolean | undefined;
            } | undefined;
            size?: number | undefined;
            sort?: {
                empty?: boolean | undefined;
                sorted?: boolean | undefined;
                unsorted?: boolean | undefined;
            } | undefined;
            totalElements?: number | undefined;
            totalPages?: number | undefined;
        }, import("../pagination/schemas.ts").PageInvestorPortfolioRecipientSchemaInput>>>;
        recipientCount: z.ZodInt;
        sector: z.ZodLazy<z.ZodType<{
            content?: {
                industry: {
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
                };
                recipientCount: number;
            }[] | undefined;
            empty?: boolean | undefined;
            first?: boolean | undefined;
            last?: boolean | undefined;
            number?: number | undefined;
            numberOfElements?: number | undefined;
            pageable?: {
                offset?: number | undefined;
                paged?: boolean | undefined;
                pageNumber?: number | undefined;
                pageSize?: number | undefined;
                sort?: {
                    empty?: boolean | undefined;
                    sorted?: boolean | undefined;
                    unsorted?: boolean | undefined;
                } | undefined;
                unpaged?: boolean | undefined;
            } | undefined;
            size?: number | undefined;
            sort?: {
                empty?: boolean | undefined;
                sorted?: boolean | undefined;
                unsorted?: boolean | undefined;
            } | undefined;
            totalElements?: number | undefined;
            totalPages?: number | undefined;
        }, import("../pagination/schemas.ts").PageInvestorPortfolioSectorSchemaInput, z.core.$ZodTypeInternals<{
            content?: {
                industry: {
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
                };
                recipientCount: number;
            }[] | undefined;
            empty?: boolean | undefined;
            first?: boolean | undefined;
            last?: boolean | undefined;
            number?: number | undefined;
            numberOfElements?: number | undefined;
            pageable?: {
                offset?: number | undefined;
                paged?: boolean | undefined;
                pageNumber?: number | undefined;
                pageSize?: number | undefined;
                sort?: {
                    empty?: boolean | undefined;
                    sorted?: boolean | undefined;
                    unsorted?: boolean | undefined;
                } | undefined;
                unpaged?: boolean | undefined;
            } | undefined;
            size?: number | undefined;
            sort?: {
                empty?: boolean | undefined;
                sorted?: boolean | undefined;
                unsorted?: boolean | undefined;
            } | undefined;
            totalElements?: number | undefined;
            totalPages?: number | undefined;
        }, import("../pagination/schemas.ts").PageInvestorPortfolioSectorSchemaInput>>>;
        unknownSectorCount: z.ZodInt;
    }, z.core.$strip>>>>;
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
}, z.core.$strip>;
export type EntityFundraiseInvestorActivity = z.infer<typeof EntityFundraiseInvestorActivitySchema>;
//# sourceMappingURL=fundraise-investor-activity.d.ts.map