import { z } from "zod/v4";
declare const PersonSimilarityResultSchemaDefinition: z.ZodObject<{
    currentRole: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        }, import("../entity/image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
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
        }, import("../entity/image.ts").EntityImageSchemaInput>>;
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
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("./image.ts").PersonImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("./image.ts").PersonImageSchemaInput>>;
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
    }, z.core.$strip>>>;
    person: z.ZodType<{
        bioUpdatedAt?: string | null | undefined;
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
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
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameDisplay: string;
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
            sourceType: string;
        } | null | undefined;
        slug: string;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, import("./person.ts").PersonSchemaInput, z.core.$ZodTypeInternals<{
        bioUpdatedAt?: string | null | undefined;
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
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
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameDisplay: string;
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
            sourceType: string;
        } | null | undefined;
        slug: string;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, import("./person.ts").PersonSchemaInput>>;
    similarity: z.ZodType<{
        compositeScore?: number | null | undefined;
        cosineScore?: number | null | undefined;
        matchedSectionWeight?: number | null | undefined;
        origin: "live" | "precomputed";
        rank: number;
        sharedSectionCount?: number | null | undefined;
    }, import("./similarity-context.ts").PersonSimilarityContextSchemaInput, z.core.$ZodTypeInternals<{
        compositeScore?: number | null | undefined;
        cosineScore?: number | null | undefined;
        matchedSectionWeight?: number | null | undefined;
        origin: "live" | "precomputed";
        rank: number;
        sharedSectionCount?: number | null | undefined;
    }, import("./similarity-context.ts").PersonSimilarityContextSchemaInput>>;
}, z.core.$strip>;
type PersonSimilarityResultDefinition = z.infer<typeof PersonSimilarityResultSchemaDefinition>;
export interface PersonSimilarityResultSchemaInput extends z.input<typeof PersonSimilarityResultSchemaDefinition> {
}
/**
 * Similar person list row with the provenance that explains why it appears. Rows carry the canonical Person projection; load full detail through the person detail endpoints.
 *
 * @openapiSchema PersonSimilarityResult
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
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
 * @usedBySchema PagePersonSimilarityResultSchema
 * @usedBySchema PersonDetailSchema
 * @contractShape person.similarity-result
 * @contractRole canonical
 */
export declare const PersonSimilarityResultSchema: z.ZodType<PersonSimilarityResultDefinition, PersonSimilarityResultSchemaInput>;
export type PersonSimilarityResult = z.infer<typeof PersonSimilarityResultSchema>;
export {};
//# sourceMappingURL=similarity-result.d.ts.map