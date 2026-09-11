import { z } from "zod/v4";
declare const EntityRelationshipSchemaDefinition: z.ZodObject<{
    asOf: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    comparisonSignals: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        fundingStage: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            Angel: "Angel";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
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
        }>>>;
        ownership: z.ZodArray<z.ZodString>;
        pricingModel: z.ZodArray<z.ZodString>;
        sellsTo: z.ZodArray<z.ZodString>;
        totalRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entity: z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
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
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>;
    id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    relationship: z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>;
    relationshipType: z.ZodString;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    targetEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type EntityRelationshipDefinition = z.infer<typeof EntityRelationshipSchemaDefinition>;
/**
 * Domain record for entity relationships - oriented from the requested entity to the joined entity
 *
 * @openapiSchema EntityRelationship
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageEntityRelationshipSchema
 * @contractShape entity.relationship
 * @contractRole canonical
 */
export declare const EntityRelationshipSchema: z.ZodType<EntityRelationshipDefinition>;
export type EntityRelationship = z.infer<typeof EntityRelationshipSchema>;
export {};
//# sourceMappingURL=relationship.d.ts.map