import { z } from "zod/v4";
/**
 * Read-only profile status derived from stored kind, ownership, and operating status. Funding stage stays on enrichment.fundingDetail.stage.
 *
 * @openapiSchema EntityProfileStatus
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityComparisonSignalsSchema
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.profile-status
 * @contractRole canonical
 */
export declare const EntityProfileStatusSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type EntityProfileStatus = z.infer<typeof EntityProfileStatusSchema>;
//# sourceMappingURL=profile-status.d.ts.map