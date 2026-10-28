import { z } from "zod/v4";
/**
 * Profile headline derived from record kind, current market-standing ownership (Public or Private only), and operating status. Never a funding stage. Render an unrecognized value verbatim.
 *
 * @openapiSchema EntityProfileHeadline
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
 * @usedBySchema EntityProfileStatusSchema
 * @contractShape entity.profile-headline
 * @contractRole canonical
 */
export declare const EntityProfileHeadlineSchema: z.ZodUnion<readonly [z.ZodEnum<{
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
export type EntityProfileHeadline = z.infer<typeof EntityProfileHeadlineSchema>;
//# sourceMappingURL=profile-headline.d.ts.map