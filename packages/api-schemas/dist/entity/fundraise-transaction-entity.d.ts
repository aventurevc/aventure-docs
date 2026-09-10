import { z } from "zod/v4";
/**
 * Entity projection used inside FundraiseTransaction responses
 *
 * @openapiSchema EntityFundraiseTransactionEntity
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema EntityListSummarySchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @usedBySchema PersonGraphSimilarEntitySchema
 * @contractShape entity.fundraise-transaction-entity
 * @contractRole canonical
 */
export declare const EntityFundraiseTransactionEntitySchema: z.ZodObject<{
    core: z.ZodObject<{
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
    fundingDetail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        fundingRoundCount: z.ZodInt;
        investorCount: z.ZodInt;
        latestValuation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mostRecentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mostRecentDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        stage: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
        totalRaised: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EntityFundraiseTransactionEntity = z.infer<typeof EntityFundraiseTransactionEntitySchema>;
//# sourceMappingURL=fundraise-transaction-entity.d.ts.map