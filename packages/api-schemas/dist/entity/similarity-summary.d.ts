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
    urlLink: z.ZodArray<z.ZodType<{
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
    }, import("./url-link.ts").EntityUrlLinkSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./url-link.ts").EntityUrlLinkSchemaInput>>>;
}, z.core.$strip>;
type EntitySimilaritySummaryDefinition = z.infer<typeof EntitySimilaritySummarySchemaDefinition>;
export interface EntitySimilaritySummarySchemaInput extends z.input<typeof EntitySimilaritySummarySchemaDefinition> {
}
/**
 * Lean similar-entity rail row: core identity, current URL links, and similarity provenance. Use EntitySimilarityResult for full EntityList rows.
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