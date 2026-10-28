import { z } from "zod/v4";
declare const EntityRelationshipSchemaDefinition: z.ZodObject<{
    asOf: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    comparisonSignals: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        fundingStage: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
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
        ownership: z.ZodArray<z.ZodString>;
        pricingModel: z.ZodArray<z.ZodString>;
        profileStatus: z.ZodOptional<z.ZodObject<{
            headline: z.ZodUnion<readonly [z.ZodEnum<{
                Acquired: "Acquired";
                "Acquired Subsidiary": "Acquired Subsidiary";
                "Business Line": "Business Line";
                Closed: "Closed";
                "Closed (Acquihire)": "Closed (Acquihire)";
                Company: "Company";
                Fund: "Fund";
                Government: "Government";
                Inactive: "Inactive";
                "Investment Firm": "Investment Firm";
                Nonprofit: "Nonprofit";
                "Private company": "Private company";
                Product: "Product";
                "Public company": "Public company";
                Service: "Service";
            }>, z.ZodString]> & {
                enum: {
                    Acquired: "Acquired";
                    "Acquired Subsidiary": "Acquired Subsidiary";
                    "Business Line": "Business Line";
                    Closed: "Closed";
                    "Closed (Acquihire)": "Closed (Acquihire)";
                    Company: "Company";
                    Fund: "Fund";
                    Government: "Government";
                    Inactive: "Inactive";
                    "Investment Firm": "Investment Firm";
                    Nonprofit: "Nonprofit";
                    "Private company": "Private company";
                    Product: "Product";
                    "Public company": "Public company";
                    Service: "Service";
                };
            };
            isAcquired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isClosed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isTerminal: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>;
        sellsTo: z.ZodArray<z.ZodString>;
        totalRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entity: z.ZodObject<{
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
    id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    publicSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        recordedAt: z.ZodISODateTime;
        sourceDetail: z.ZodString;
    }, z.core.$strip>>>;
    relationship: z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>;
    relationshipType: z.ZodString;
    sourceEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    targetEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type EntityRelationshipDefinition = z.infer<typeof EntityRelationshipSchemaDefinition>;
export interface EntityRelationshipSchemaInput extends z.input<typeof EntityRelationshipSchemaDefinition> {
}
/**
 * Domain record for entity relationships - oriented from the requested entity to the joined entity
 *
 * @openapiSchema EntityRelationship
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageEntityRelationshipSchema
 * @contractShape entity.relationship
 * @contractRole canonical
 */
export declare const EntityRelationshipSchema: z.ZodType<EntityRelationshipDefinition, EntityRelationshipSchemaInput>;
export type EntityRelationship = z.infer<typeof EntityRelationshipSchema>;
export {};
//# sourceMappingURL=relationship.d.ts.map