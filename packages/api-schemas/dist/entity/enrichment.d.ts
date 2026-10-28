import { z } from "zod/v4";
declare const EntityEnrichmentSchemaDefinition: z.ZodObject<{
    address: z.ZodArray<z.ZodObject<{
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
    fundingDetail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    headquartersAddressId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    headquartersRemoteAsOf: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    text: z.ZodType<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, import("./text-bundle.ts").EntityTextBundleSchemaInput, z.core.$ZodTypeInternals<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, import("./text-bundle.ts").EntityTextBundleSchemaInput>>;
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
type EntityEnrichmentDefinition = z.infer<typeof EntityEnrichmentSchemaDefinition>;
export interface EntityEnrichmentSchemaInput extends z.input<typeof EntityEnrichmentSchemaDefinition> {
}
/**
 * Supplemental entity data — addresses, classification tags, funding, text content, and URL links
 *
 * @openapiSchema EntityEnrichment
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.enrichment
 * @contractRole canonical
 */
export declare const EntityEnrichmentSchema: z.ZodType<EntityEnrichmentDefinition, EntityEnrichmentSchemaInput>;
export type EntityEnrichment = z.infer<typeof EntityEnrichmentSchema>;
export {};
//# sourceMappingURL=enrichment.d.ts.map