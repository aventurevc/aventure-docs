import { z } from "zod/v4";
/**
 * Flat entity core record — identity, naming, status, image, and source metadata. An entity is our umbrella record for organizations such as companies, funds, investment firms and investors, accelerators, nonprofits, and government agencies, plus products and services connected to those organizations. Returned directly by GET /v1/sitemap/entities and the alphabetical (?letter=X) list. Nested as .core inside EntityList for default list reads and EntityDetail for detail reads.
 *
 * @openapiSchema Entity
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint GET /v1/news/{newsId}/related-entities
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityAcceleratorParticipationSchema
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @usedBySchema EntityListSchema
 * @usedBySchema EntityRelationshipSchema
 * @usedBySchema EntitySimilaritySummarySchema
 * @usedBySchema HarnessRunDetailSchema
 * @usedBySchema PageEntitySchema
 * @usedBySchema PersonGraphCoInvestorSchema
 * @usedBySchema PersonInvestedCompanySchema
 * @contractShape entity.entity
 * @contractRole canonical
 */
export declare const EntitySchema: z.ZodObject<{
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
export type Entity = z.infer<typeof EntitySchema>;
//# sourceMappingURL=entity.d.ts.map