import { z } from "zod/v4";
/**
 * Canonical address record for entity and person payloads
 *
 * @openapiSchema Address
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/addresses
 * @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/people/{personId}/addresses
 * @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema PersonEnrichmentSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape address.address
 * @contractRole canonical
 */
export declare const AddressSchema: z.ZodObject<{
    address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    association: z.ZodOptional<z.ZodArray<z.ZodType<{
        endDate?: string | null | undefined;
        id: number;
        isCurrent: boolean;
        role?: "domicile" | "dominant" | "origin" | null | undefined;
        startDate?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        endDate?: string | null | undefined;
        id: number;
        isCurrent: boolean;
        role?: "domicile" | "dominant" | "origin" | null | undefined;
        startDate?: string | null | undefined;
    }, unknown>>>>;
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
}, z.core.$strip>;
export type Address = z.infer<typeof AddressSchema>;
//# sourceMappingURL=address.d.ts.map