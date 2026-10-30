import { z } from "zod/v4";
declare const EntitySimilaritySummarySchemaDefinition: z.ZodObject<{
    core: z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
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
        }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
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
        }, import("./image.ts").EntityImageSchemaInput>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodObject<{
            displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            name: z.ZodString;
            type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                alternativeDba: "alternativeDba";
                relatedLegal: "relatedLegal";
            }>>>;
        }, z.core.$strip>>;
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
    fundingDetail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        applicability: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            NOT_APPLICABLE: "NOT_APPLICABLE";
            RECORDED: "RECORDED";
            UNKNOWN: "UNKNOWN";
        }>>>;
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fundingRoundCount: z.ZodInt;
        investorCount: z.ZodInt;
        latestValuation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mostRecentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mostRecentDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        stage: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            Angel: "Angel";
            Bankrupt: "Bankrupt";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            "Late Stage Private": "Late Stage Private";
            Nonprofit: "Nonprofit";
            "Pre-Seed": "Pre-Seed";
            Public: "Public";
            Seed: "Seed";
            "Series A": "Series A";
            "Series B": "Series B";
            "Series C": "Series C";
            "Series D": "Series D";
            "Series E": "Series E";
            "Series F": "Series F";
            "Series G": "Series G";
            "Series H": "Series H";
            "Series I": "Series I";
            "Series J": "Series J";
            "Series K": "Series K";
            "Series L": "Series L";
            "Series M": "Series M";
            "Series N": "Series N";
            "Series O": "Series O";
            "Series P": "Series P";
            "Series Q": "Series Q";
            "Series R": "Series R";
            "Series S": "Series S";
            "Series T": "Series T";
            "Series U": "Series U";
            "Series V": "Series V";
            "Series W": "Series W";
            "Series X": "Series X";
            "Series Y": "Series Y";
            "Series Z": "Series Z";
        }>, z.ZodString]> & {
            enum: {
                Acquired: "Acquired";
                "Acquired Subsidiary": "Acquired Subsidiary";
                Angel: "Angel";
                Bankrupt: "Bankrupt";
                Fund: "Fund";
                Government: "Government";
                "Investment Firm": "Investment Firm";
                "Late Stage Private": "Late Stage Private";
                Nonprofit: "Nonprofit";
                "Pre-Seed": "Pre-Seed";
                Public: "Public";
                Seed: "Seed";
                "Series A": "Series A";
                "Series B": "Series B";
                "Series C": "Series C";
                "Series D": "Series D";
                "Series E": "Series E";
                "Series F": "Series F";
                "Series G": "Series G";
                "Series H": "Series H";
                "Series I": "Series I";
                "Series J": "Series J";
                "Series K": "Series K";
                "Series L": "Series L";
                "Series M": "Series M";
                "Series N": "Series N";
                "Series O": "Series O";
                "Series P": "Series P";
                "Series Q": "Series Q";
                "Series R": "Series R";
                "Series S": "Series S";
                "Series T": "Series T";
                "Series U": "Series U";
                "Series V": "Series V";
                "Series W": "Series W";
                "Series X": "Series X";
                "Series Y": "Series Y";
                "Series Z": "Series Z";
            };
        }>>;
        totalRaised: z.ZodNumber;
        totalRaisedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        unconvertedRoundCount: z.ZodInt;
    }, z.core.$strip>>>;
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
    }, import("./similarity-context.ts").EntitySimilarityContextSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./similarity-context.ts").EntitySimilarityContextSchemaInput>>;
    urlLink: z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>;
type EntitySimilaritySummaryDefinition = z.infer<typeof EntitySimilaritySummarySchemaDefinition>;
export interface EntitySimilaritySummarySchemaInput extends z.input<typeof EntitySimilaritySummarySchemaDefinition> {
}
/**
 * Lean similar-entity rail row: core identity, current URL links, funding totals, and similarity provenance. Use EntitySimilarityResult for full EntityList rows.
 *
 * @openapiSchema EntitySimilaritySummary
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @usedBySchema PageEntitySimilaritySummarySchema
 * @contractShape entity.similarity-summary
 * @contractRole canonical
 */
export declare const EntitySimilaritySummarySchema: z.ZodType<EntitySimilaritySummaryDefinition, EntitySimilaritySummarySchemaInput>;
export type EntitySimilaritySummary = z.infer<typeof EntitySimilaritySummarySchema>;
export {};
//# sourceMappingURL=similarity-summary.d.ts.map