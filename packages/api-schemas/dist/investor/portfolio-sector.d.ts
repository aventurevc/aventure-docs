import { z } from "zod/v4";
declare const InvestorPortfolioSectorSchemaDefinition: z.ZodObject<{
    industry: z.ZodIntersection<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        registry: string;
    }, import("../classification/classification.ts").ClassificationSchemaInput>>, z.ZodObject<{
        bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        classificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        id: z.ZodInt;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>;
    recipientCount: z.ZodInt;
}, z.core.$strip>;
type InvestorPortfolioSectorDefinition = z.infer<typeof InvestorPortfolioSectorSchemaDefinition>;
export interface InvestorPortfolioSectorSchemaInput extends z.input<typeof InvestorPortfolioSectorSchemaDefinition> {
}
/**
 * One exclusive primary editorial industry group.
 *
 * @openapiSchema InvestorPortfolioSector
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PageInvestorPortfolioSectorSchema
 * @contractShape investor.portfolio-sector
 * @contractRole canonical
 */
export declare const InvestorPortfolioSectorSchema: z.ZodType<InvestorPortfolioSectorDefinition, InvestorPortfolioSectorSchemaInput>;
export type InvestorPortfolioSector = z.infer<typeof InvestorPortfolioSectorSchema>;
export {};
//# sourceMappingURL=portfolio-sector.d.ts.map