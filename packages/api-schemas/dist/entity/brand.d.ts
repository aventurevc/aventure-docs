import { z } from "zod/v4";
declare const EntityBrandSchemaDefinition: z.ZodObject<{
    classification: z.ZodType<{
        geoLocationExposure?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        industry?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        mainProduct?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        standardizedClassification?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            category: string;
            code?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            entityClassificationId?: number | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            level?: number | null | undefined;
            name: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        tag?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeCustomer?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeModel?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeOwnership?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeRevenue?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeTechnologyUsed?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        geoLocationExposure?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        industry?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        mainProduct?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        standardizedClassification?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            category: string;
            code?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            entityClassificationId?: number | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            level?: number | null | undefined;
            name: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        tag?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeCustomer?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeModel?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeOwnership?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeRevenue?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeTechnologyUsed?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
    }, unknown>>;
    core: z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>>;
}, z.core.$strip>;
type EntityBrandDefinition = z.infer<typeof EntityBrandSchemaDefinition>;
/**
 * Thin company brand read: names and logos under core, current website and social URLs, and current classification tags.
 *
 * @openapiSchema EntityBrand
 * @endpoint GET /v1/entities/brand
 * @contractShape entity.brand
 * @contractRole canonical
 */
export declare const EntityBrandSchema: z.ZodType<EntityBrandDefinition>;
export type EntityBrand = z.infer<typeof EntityBrandSchema>;
export {};
//# sourceMappingURL=brand.d.ts.map