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
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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