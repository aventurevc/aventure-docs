import { z } from "zod/v4";
declare const EntityBrandSchemaDefinition: z.ZodObject<{
    classification: z.ZodType<{
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
    }, import("./classification.ts").EntityClassificationSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./classification.ts").EntityClassificationSchemaInput>>;
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
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
type EntityBrandDefinition = z.infer<typeof EntityBrandSchemaDefinition>;
export interface EntityBrandSchemaInput extends z.input<typeof EntityBrandSchemaDefinition> {
}
/**
 * Thin company brand read: names and logos under core, current website and social URLs, and current classification tags.
 *
 * @openapiSchema EntityBrand
 * @endpoint GET /v1/entities/brand
 * @contractShape entity.brand
 * @contractRole canonical
 */
export declare const EntityBrandSchema: z.ZodType<EntityBrandDefinition, EntityBrandSchemaInput>;
export type EntityBrand = z.infer<typeof EntityBrandSchema>;
export {};
//# sourceMappingURL=brand.d.ts.map