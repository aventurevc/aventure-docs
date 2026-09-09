import { z } from "zod/v4";
declare const PersonNaturalSearchResultSchemaDefinition: z.ZodObject<{
    interpretation: z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>;
    result: z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>;
}, z.core.$strip>;
type PersonNaturalSearchResultDefinition = z.infer<typeof PersonNaturalSearchResultSchemaDefinition>;
/**
 * Natural-language people search result: planner interpretation plus the canonical person page produced by the person list engine.
 *
 * @openapiSchema PersonNaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape person.natural-search-result
 * @contractRole canonical
 */
export declare const PersonNaturalSearchResultSchema: z.ZodType<PersonNaturalSearchResultDefinition>;
export type PersonNaturalSearchResult = z.infer<typeof PersonNaturalSearchResultSchema>;
export {};
//# sourceMappingURL=natural-search-result.d.ts.map