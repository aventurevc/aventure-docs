import { z } from "zod/v4";
/**
 * The current entity a fund or product/service is offered by: a fund's manager firm, a product/service's provider, through its current primary edge to a live, listed provider. Null on every other entity type.
 *
 * @openapiSchema EntityProvider
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.provider
 * @contractRole canonical
 */
export declare const EntityProviderSchema: z.ZodObject<{
    entity: z.ZodObject<{
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
    headquarters: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    relationshipType: z.ZodEnum<{
        fundManagerFirm: "fundManagerFirm";
        productService: "productService";
    }>;
}, z.core.$strip>;
export type EntityProvider = z.infer<typeof EntityProviderSchema>;
//# sourceMappingURL=provider.d.ts.map