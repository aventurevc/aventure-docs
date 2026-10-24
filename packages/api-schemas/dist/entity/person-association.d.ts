import { z } from "zod/v4";
/**
 * One entity↔person association, naming both sides
 *
 * @openapiSchema EntityPersonAssociation
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PageEntityPersonAssociationSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape entity.person-association
 * @contractRole canonical
 */
export declare const EntityPersonAssociationSchema: z.ZodObject<{
    associationId: z.ZodInt;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityAddress: z.ZodArray<z.ZodObject<{
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
    entityId: z.ZodUUID;
    entityLogo: z.ZodType<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, import("./image.ts").EntityImageSchemaInput>>;
    entityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityOperatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entitySlug: z.ZodString;
    entityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
    entityUrlLink: z.ZodArray<z.ZodObject<{
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
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    personAddress: z.ZodArray<z.ZodObject<{
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
    personId: z.ZodUUID;
    personImage: z.ZodType<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, import("../person/image.ts").PersonImageSchemaInput, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, import("../person/image.ts").PersonImageSchemaInput>>;
    personName: z.ZodString;
    personSlug: z.ZodString;
    personUrlLink: z.ZodArray<z.ZodObject<{
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
    score: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    titleFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    titleId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    titleLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    titleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type EntityPersonAssociation = z.infer<typeof EntityPersonAssociationSchema>;
//# sourceMappingURL=person-association.d.ts.map