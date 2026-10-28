import { z } from "zod/v4";
declare const PersonEnrichmentSchemaDefinition: z.ZodObject<{
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
type PersonEnrichmentDefinition = z.infer<typeof PersonEnrichmentSchemaDefinition>;
export interface PersonEnrichmentSchemaInput extends z.input<typeof PersonEnrichmentSchemaDefinition> {
}
/**
 * Supplemental person data — addresses and URL links
 *
 * @openapiSchema PersonEnrichment
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
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
 * @contractShape person.enrichment
 * @contractRole canonical
 */
export declare const PersonEnrichmentSchema: z.ZodType<PersonEnrichmentDefinition, PersonEnrichmentSchemaInput>;
export type PersonEnrichment = z.infer<typeof PersonEnrichmentSchema>;
export {};
//# sourceMappingURL=enrichment.d.ts.map