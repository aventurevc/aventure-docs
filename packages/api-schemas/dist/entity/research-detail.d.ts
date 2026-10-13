import { z } from "zod/v4";
declare const EntityResearchDetailSchemaDefinition: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentEligible: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    derivedRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        asOfDate: z.ZodString;
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
    publicSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        recordedAt: z.ZodISODateTime;
        sourceDetail: z.ZodString;
    }, z.core.$strip>>>;
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
export interface EntityResearchDetailSchemaInput extends z.input<typeof EntityResearchDetailSchemaDefinition> {
}
/**
 * Canonical research detail row for research.res_entity_detail
 *
 * @openapiSchema EntityResearchDetail
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research-details
 * @endpoint GET /v1/entities/{entityId}/research-details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/similar
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
 * @usedBySchema EntityListResearchSchema
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchDetailSchema
 * @contractShape entity.research-detail
 * @contractRole canonical
 */
export declare const EntityResearchDetailSchema: z.ZodType<EntityResearchDetailDefinition, EntityResearchDetailSchemaInput>;
export type EntityResearchDetail = z.infer<typeof EntityResearchDetailSchema>;
export {};
//# sourceMappingURL=research-detail.d.ts.map