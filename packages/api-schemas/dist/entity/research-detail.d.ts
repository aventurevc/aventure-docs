import { z } from "zod/v4";
declare const EntityResearchDetailSchemaDefinition: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    derivedRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        asOfDate: z.ZodISODateTime;
        bucket: z.ZodEnum<{
            beyondTwoYears: "beyondTwoYears";
            pastDue: "pastDue";
            sixToTwelveMonths: "sixToTwelveMonths";
            threeToSixMonths: "threeToSixMonths";
            twelveToTwentyFourMonths: "twelveToTwentyFourMonths";
            withinThreeMonths: "withinThreeMonths";
        }>;
        monthsFromNow: z.ZodInt;
        targetDate: z.ZodISODateTime;
    }, z.core.$strip>>>;
    discreteValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    entityId: z.ZodUUID;
    id: z.ZodInt;
    textValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeResearchDetail: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    valueResearchDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    valueType: z.ZodEnum<{
        date: "date";
        monetary: "monetary";
        numeric: "numeric";
        percentage: "percentage";
        text: "text";
    }>;
}, z.core.$strip>;
type EntityResearchDetailDefinition = z.infer<typeof EntityResearchDetailSchemaDefinition>;
/**
 * Canonical research detail row for research.res_entity_detail
 *
 * @openapiSchema EntityResearchDetail
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityListResearchSchema
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchDetailSchema
 * @contractShape entity.research-detail
 * @contractRole canonical
 */
export declare const EntityResearchDetailSchema: z.ZodType<EntityResearchDetailDefinition>;
export type EntityResearchDetail = z.infer<typeof EntityResearchDetailSchema>;
export {};
//# sourceMappingURL=research-detail.d.ts.map